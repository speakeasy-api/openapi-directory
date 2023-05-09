# LoginSecurity

### Available Operations

* [GetOrganizationLoginSecurity](#getorganizationloginsecurity) - Returns the login security settings for an organization.
* [UpdateOrganizationLoginSecurity](#updateorganizationloginsecurity) - Update the login security settings for an organization

## GetOrganizationLoginSecurity

Returns the login security settings for an organization.

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.LoginSecurity.GetOrganizationLoginSecurity(ctx, operations.GetOrganizationLoginSecurityRequest{
        OrganizationID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationLoginSecurity200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationLoginSecurity

Update the login security settings for an organization

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.LoginSecurity.UpdateOrganizationLoginSecurity(ctx, operations.UpdateOrganizationLoginSecurityRequest{
        RequestBody: &operations.UpdateOrganizationLoginSecurityRequestBody{
            AccountLockoutAttempts: sdk.Int64(127088),
            APIAuthentication: &operations.UpdateOrganizationLoginSecurityRequestBodyAPIAuthentication{
                IPRestrictionsForKeys: &operations.UpdateOrganizationLoginSecurityRequestBodyAPIAuthenticationIPRestrictionsForKeys{
                    Enabled: sdk.Bool(false),
                    Ranges: []string{
                        "ipsam",
                        "consectetur",
                        "ad",
                        "itaque",
                    },
                },
            },
            EnforceAccountLockout: sdk.Bool(false),
            EnforceDifferentPasswords: sdk.Bool(false),
            EnforceIdleTimeout: sdk.Bool(false),
            EnforceLoginIPRanges: sdk.Bool(false),
            EnforcePasswordExpiration: sdk.Bool(false),
            EnforceStrongPasswords: sdk.Bool(false),
            EnforceTwoFactorAuth: sdk.Bool(false),
            IdleTimeoutMinutes: sdk.Int64(76101),
            LoginIPRanges: []string{
                "possimus",
                "ea",
                "tempore",
                "sapiente",
            },
            NumDifferentPasswords: sdk.Int64(435562),
            PasswordExpirationDays: sdk.Int64(264772),
        },
        OrganizationID: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationLoginSecurity200ApplicationJSONObject != nil {
        // handle response
    }
}
```
