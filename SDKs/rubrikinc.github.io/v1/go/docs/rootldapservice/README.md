# RootLdapService

## Overview

LDAP services.

### Available Operations

* [CreateLdapService](#createldapservice) - Add a new authentication domain
* [DeleteLdapService](#deleteldapservice) - Delete an authentication domain for the given ID
* [GetLdapService](#getldapservice) - Get a LDAP service for the given ID
* [PatchLdapService](#patchldapservice) - Update an existing authentication domain
* [PutLdapService](#putldapservice) - Replace the values of an authentication domain
* [QueryLdapService](#queryldapservice) - Get a list of LDAP services

## CreateLdapService

Add a new authentication domain.

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
    res, err := s.RootLdapService.CreateLdapService(ctx, shared.LdapServiceInfo{
        AdvancedOptions: &shared.AdvancedLdapConfiguration{
            GroupMaxLevel: sdk.Int(44509),
            GroupMemberAttribute: sdk.String("voluptatem"),
            GroupMembershipAttribute: sdk.String("non"),
            GroupSearchFilter: sdk.String("beatae"),
            UserNameSearchAttribute: sdk.String("sequi"),
            UserSearchFilter: sdk.String("rerum"),
        },
        AuthServers: []string{
            "debitis",
        },
        BaseDn: sdk.String("quis"),
        BindUserName: "eaque",
        BindUserPassword: "incidunt",
        CertificateID: sdk.String("ut"),
        DynamicDNSName: sdk.String("delectus"),
        IsTotpEnforced: sdk.Bool(false),
        MfaServerID: sdk.String("aliquid"),
        Name: sdk.String("Shawna Trantow"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LdapServiceSummary != nil {
        // handle response
    }
}
```

## DeleteLdapService

Delete an authentication domain for the given ID.

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
    res, err := s.RootLdapService.DeleteLdapService(ctx, operations.DeleteLdapServiceRequest{
        ID: "dc4077d0-cc3f-4408-afc1-5ceb4d6e1eae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetLdapService

Get a LDAP service for the given ID.

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
    res, err := s.RootLdapService.GetLdapService(ctx, operations.GetLdapServiceRequest{
        ID: "0f75aedf-2aca-4b58-b991-c926ddb58946",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LdapServiceSummary != nil {
        // handle response
    }
}
```

## PatchLdapService

Modify the values of a specified authentication domain object.

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
    res, err := s.RootLdapService.PatchLdapService(ctx, operations.PatchLdapServiceRequest{
        LdapServiceInfoUpdate: shared.LdapServiceInfoUpdate{
            AdvancedOptions: &shared.AdvancedLdapConfiguration{
                GroupMaxLevel: sdk.Int(97674),
                GroupMemberAttribute: sdk.String("vero"),
                GroupMembershipAttribute: sdk.String("odio"),
                GroupSearchFilter: sdk.String("numquam"),
                UserNameSearchAttribute: sdk.String("fugit"),
                UserSearchFilter: sdk.String("inventore"),
            },
            AuthServers: []string{
                "nobis",
                "recusandae",
                "commodi",
                "possimus",
            },
            BaseDn: sdk.String("provident"),
            BindUserName: sdk.String("veniam"),
            BindUserPassword: sdk.String("sit"),
            CertificateID: sdk.String("fugit"),
            DynamicDNSName: sdk.String("a"),
            IsTotpEnforced: sdk.Bool(false),
            MfaServerID: sdk.String("consequatur"),
            Name: sdk.String("Orlando Muller MD"),
        },
        ID: "69f7ac2f-72f8-4850-8904-911608207888",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LdapServiceSummary != nil {
        // handle response
    }
}
```

## PutLdapService

Replace the values of a specified authentication domain object.

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
    res, err := s.RootLdapService.PutLdapService(ctx, operations.PutLdapServiceRequest{
        LdapServiceInfoUpdate: shared.LdapServiceInfoUpdate{
            AdvancedOptions: &shared.AdvancedLdapConfiguration{
                GroupMaxLevel: sdk.Int(915267),
                GroupMemberAttribute: sdk.String("minus"),
                GroupMembershipAttribute: sdk.String("autem"),
                GroupSearchFilter: sdk.String("vel"),
                UserNameSearchAttribute: sdk.String("beatae"),
                UserSearchFilter: sdk.String("quos"),
            },
            AuthServers: []string{
                "soluta",
            },
            BaseDn: sdk.String("tenetur"),
            BindUserName: sdk.String("necessitatibus"),
            BindUserPassword: sdk.String("perspiciatis"),
            CertificateID: sdk.String("suscipit"),
            DynamicDNSName: sdk.String("ullam"),
            IsTotpEnforced: sdk.Bool(false),
            MfaServerID: sdk.String("unde"),
            Name: sdk.String("Dr. Willis Gutkowski"),
        },
        ID: "16faf75b-0b53-42a4-9a37-cbaaf4452c48",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LdapServiceSummary != nil {
        // handle response
    }
}
```

## QueryLdapService

Get a list of LDAP services.

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
    res, err := s.RootLdapService.QueryLdapService(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.LdapServiceSummaryListResponse != nil {
        // handle response
    }
}
```
