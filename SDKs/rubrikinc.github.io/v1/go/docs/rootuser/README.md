# RootUser

## Overview

User management.

### Available Operations

* [GenerateTotpSecret](#generatetotpsecret) - Generate a TOTP secret key for the given user
* [GetTotpStatus](#gettotpstatus) - Get the TOTP status for the given user
* [GetUserAccountLockoutSettings](#getuseraccountlockoutsettings) - Get the local user account lockout settings
* [ManageUserAccountLockoutSettings](#manageuseraccountlockoutsettings) - Update the local user account lockout settings
* [ResetTotp](#resettotp) - Reset the TOTP for the given user
* [SetupTotp](#setuptotp) - Configure the TOTP secret for the given user
* [UnlockUser](#unlockuser) - Unlock a user account

## GenerateTotpSecret

Use this endpoint to generate the time-based one time password (TOTP) secret key for a specified user account. The secret is a key value encoded in Base32 and includes a URI for generating a scannable QR code.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootUser.GenerateTotpSecret(ctx, operations.GenerateTotpSecretRequest{
        ID: "b86b3cdf-6415-4b04-89f9-df13f4eedbe7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TotpSecret != nil {
        // handle response
    }
}
```

## GetTotpStatus

Get the time-based one time password (TOTP) status for a specified user account. The TOTP status specifies whether that account has TOTP enabled and whether TOTP is being enforced for that account.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootUser.GetTotpStatus(ctx, operations.GetTotpStatusRequest{
        ID: "8bf60682-5894-4ea7-a3d5-c72795b78514",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TotpStatus != nil {
        // handle response
    }
}
```

## GetUserAccountLockoutSettings

Get the local user account lockout settings which are used to configure whether user accounts will be locked on failed logins, when they will be locked and the duration for which they will stay locked.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootUser.GetUserAccountLockoutSettings(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.LocalUserAccountLockoutStatus != nil {
        // handle response
    }
}
```

## ManageUserAccountLockoutSettings

Update the local user account lockout settings which are used to configure whether user accounts will be locked on failed logins, when they will be locked and the duration for which they will stay locked.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootUser.ManageUserAccountLockoutSettings(ctx, shared.LocalUserAccountLockoutConfig{
        AccountLockoutDurationInMinutes: sdk.Int(503247),
        Enabled: sdk.Bool(false),
        MaxFailedLoginsForLocalUser: sdk.Int(861236),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocalUserAccountLockoutStatus != nil {
        // handle response
    }
}
```

## ResetTotp

Reset the TOTP settings to the default disabled state for the specified user account.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootUser.ResetTotp(ctx, operations.ResetTotpRequest{
        ID: "6d549e56-35b3-43bc-8f97-0c42fc9f4844",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetupTotp

Use this endpoint to configure the time-based one time password (TOTP) secret for a specified user account. The endpoint replaces an existing secret with the new one. The Rubrik cluster checks the secret against a one time password (OTP) to ensure validity.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootUser.SetupTotp(ctx, operations.SetupTotpRequest{
        TotpConfigUpdateRequest: shared.TotpConfigUpdateRequest{
            OtpForValidation: "sunt",
            Secret: "consequuntur",
        },
        ID: "5e75b796-065c-40ef-a6f9-3b90a1b8c95b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnlockUser

Unlock a user account that has been locked because of too many failed login attempts.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootUser.UnlockUser(ctx, operations.UnlockUserRequest{
        ID: "e1254b73-9f4f-4e77-a10d-1f6558c99c72",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
