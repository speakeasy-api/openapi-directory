# Account

### Available Operations

* [CreateAccountCredential](#createaccountcredential) - Create a new credential
* [CreateAccountGroup](#createaccountgroup) - Create a new group
* [CreateAccountGroupMapping](#createaccountgroupmapping) - Create a new SSO group mapping
* [CreateAccountKey](#createaccountkey) - Create a new key
* [CreateAccountOrganization](#createaccountorganization) - Create a new organization
* [CreateAccountScanTemplate](#createaccountscantemplate) - Create a new scan template
* [CreateAccountUser](#createaccountuser) - Create a new user account
* [CreateAccountUserInvite](#createaccountuserinvite) - Create a new user account and send an email invite
* [DeleteAccountOrganizationExportToken](#deleteaccountorganizationexporttoken) - Removes the export token from the specified organization
* [ExportEventsJSON](#exporteventsjson) - System event log as JSON
* [ExportEventsJSONL](#exporteventsjsonl) - System event log as JSON line-delimited
* [GetAccountAgents](#getaccountagents) - Get all agents across all organizations
* [GetAccountCredential](#getaccountcredential) - Get credential details
* [GetAccountCredentials](#getaccountcredentials) - Get all account credentials
* [GetAccountGroup](#getaccountgroup) - Get group details
* [GetAccountGroupMapping](#getaccountgroupmapping) - Get SSO group mapping details
* [GetAccountGroupMappings](#getaccountgroupmappings) - Get all SSO group mappings
* [GetAccountGroups](#getaccountgroups) - Get all groups
* [GetAccountKey](#getaccountkey) - Get key details
* [GetAccountKeys](#getaccountkeys) - Get all active API keys
* [GetAccountLicense](#getaccountlicense) - Get license details
* [GetAccountOrganization](#getaccountorganization) - Get organization details
* [GetAccountOrganizations](#getaccountorganizations) - Get all organization details
* [GetAccountScanTemplate](#getaccountscantemplate) - Get scan template details
* [GetAccountScanTemplates](#getaccountscantemplates) - Get all scan templates across all organizations (up to 1000)
* [GetAccountSites](#getaccountsites) - Get all sites details across all organizations
* [GetAccountTasks](#getaccounttasks) - Get all task details across all organizations (up to 1000)
* [GetAccountUser](#getaccountuser) - Get user details
* [GetAccountUsers](#getaccountusers) - Get all users
* [RemoveAccountCredential](#removeaccountcredential) - Remove this credential
* [RemoveAccountGroup](#removeaccountgroup) - Remove this group
* [RemoveAccountGroupMapping](#removeaccountgroupmapping) - Remove this SSO group mapping
* [RemoveAccountKey](#removeaccountkey) - Remove this key
* [RemoveAccountOrganization](#removeaccountorganization) - Remove this organization
* [RemoveAccountScanTemplate](#removeaccountscantemplate) - Remove scan template
* [RemoveAccountUser](#removeaccountuser) - Remove this user
* [ResetAccountUserLockout](#resetaccountuserlockout) - Resets the user's lockout status
* [ResetAccountUserMFA](#resetaccountusermfa) - Resets the user's MFA tokens
* [ResetAccountUserPassword](#resetaccountuserpassword) - Sends the user a password reset email
* [RotateAccountKey](#rotateaccountkey) - Rotates the key secret
* [RotateAccountOrganizationExportToken](#rotateaccountorganizationexporttoken) - Rotates the organization export token and returns the updated organization
* [UpdateAccountGroup](#updateaccountgroup) - Update an existing group
* [UpdateAccountGroupMapping](#updateaccountgroupmapping) - Update an existing SSO group mapping
* [UpdateAccountOrganization](#updateaccountorganization) - Update organization details
* [UpdateAccountScanTemplate](#updateaccountscantemplate) - Update scan template
* [UpdateAccountUser](#updateaccountuser) - Update a user's details

## CreateAccountCredential

Create a new credential

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.CreateAccountCredential(ctx, shared.CredentialOptions{
        ACL: map[string]interface{}{
            "vel": "error",
            "deserunt": "suscipit",
            "iure": "magnam",
            "debitis": "ipsa",
        },
        Cidrs: sdk.String("10.0.0.17/32, 192.168.1.0/24"),
        Global: sdk.Bool(false),
        Name: sdk.String("credentials_name"),
        Secret: &shared.CredentialFields{},
        Type: shared.CredentialOptionsTypeEnumMiradoreAPIKeyV1.ToPointer(),
    }, operations.CreateAccountCredentialSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Credential != nil {
        // handle response
    }
}
```

## CreateAccountGroup

Create a new group

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.CreateAccountGroup(ctx, shared.GroupPost{
        Description: sdk.String("Viewers Group"),
        ExpiresAt: sdk.Int64(1576300370),
        Name: sdk.String("Viewers"),
        OrgDefaultRole: sdk.String("admin"),
        OrgRoles: map[string]interface{}{
            "tempora": "suscipit",
            "molestiae": "minus",
            "placeat": "voluptatum",
            "iusto": "excepturi",
        },
    }, operations.CreateAccountGroupSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateAccountGroupMapping

Create a new SSO group mapping

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.CreateAccountGroupMapping(ctx, shared.GroupMapping{
        CreatedAt: sdk.Int64(1576300370),
        CreatedByEmail: sdk.String("jsmith@example.com"),
        Description: sdk.String("Maps basic-attribute to Viewers Group"),
        GroupID: "2b096711-4d28-4417-8635-64af4f62c1ae",
        GroupName: sdk.String("Viewers Group"),
        ID: "f6cfb91a-52ea-4a86-bf9a-5a891a26f52b",
        SsoAttribute: "basic-attribute",
        SsoValue: "basic-attribute-value",
        UpdatedAt: sdk.Int64(1576300370),
    }, operations.CreateAccountGroupMappingSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateAccountKey

Create a new key

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.CreateAccountKey(ctx, shared.APIKeyOptions{
        Comment: sdk.String("Splunk integration key"),
        OrganizationID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
    }, operations.CreateAccountKeySecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKey != nil {
        // handle response
    }
}
```

## CreateAccountOrganization

Create a new organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.CreateAccountOrganization(ctx, shared.OrgOptions{
        Description: sdk.String("Wobbly Widgets, Inc."),
        ExpirationAssetsOffline: sdk.String("365"),
        ExpirationAssetsStale: sdk.String("365"),
        ExpirationScans: sdk.String("365"),
        ExportToken: sdk.String("ETXXXXXXXXXXXXXXXX"),
        Name: sdk.String("My Organization"),
        ParentID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
        Project: sdk.String("nisi"),
    }, operations.CreateAccountOrganizationSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organization != nil {
        // handle response
    }
}
```

## CreateAccountScanTemplate

Create a new scan template

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.CreateAccountScanTemplate(ctx, shared.ScanTemplateOptions{
        ACL: map[string]interface{}{
            "temporibus": "ab",
            "quis": "veritatis",
            "deserunt": "perferendis",
            "ipsam": "repellendus",
        },
        Description: sdk.String("My Scan Template"),
        Global: false,
        Name: "My Scan Template",
        Params: map[string]string{
            "quo": "odit",
            "at": "at",
            "maiores": "molestiae",
            "quod": "quod",
        },
    }, operations.CreateAccountScanTemplateSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanTemplate != nil {
        // handle response
    }
}
```

## CreateAccountUser

Create a new user account

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.CreateAccountUser(ctx, shared.UserOptions{
        ClientAdmin: sdk.Bool(true),
        Email: sdk.String("jsmith@example.com"),
        FirstName: sdk.String("James"),
        LastName: sdk.String("Smith"),
        OrgDefaultRole: sdk.String("admin"),
        OrgRoles: map[string]interface{}{
            "totam": "porro",
            "dolorum": "dicta",
        },
    }, operations.CreateAccountUserSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## CreateAccountUserInvite

Create a new user account and send an email invite

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.CreateAccountUserInvite(ctx, shared.UserInviteOptions{
        ClientAdmin: sdk.Bool(true),
        Email: sdk.String("jsmith@example.com"),
        FirstName: sdk.String("James"),
        LastName: sdk.String("Smith"),
        Message: sdk.String("You have been invited to the Rumble Network Discovery platform"),
        OrgDefaultRole: sdk.String("admin"),
        OrgRoles: map[string]interface{}{
            "officia": "occaecati",
            "fugit": "deleniti",
            "hic": "optio",
        },
        Subject: sdk.String("Welcome to Rumble"),
    }, operations.CreateAccountUserInviteSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## DeleteAccountOrganizationExportToken

Removes the export token from the specified organization

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DeleteAccountOrganizationExportToken(ctx, operations.DeleteAccountOrganizationExportTokenRequest{
        OrgID: "816742cb-7392-4059-a939-6fea7596eb10",
    }, operations.DeleteAccountOrganizationExportTokenSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ExportEventsJSON

System event log as JSON

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.ExportEventsJSON(ctx, operations.ExportEventsJSONRequest{
        Fields: sdk.String("reiciendis"),
        Search: sdk.String("est"),
    }, operations.ExportEventsJSONSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## ExportEventsJSONL

System event log as JSON line-delimited

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.ExportEventsJSONL(ctx, operations.ExportEventsJSONLRequest{
        Fields: sdk.String("mollitia"),
        Search: sdk.String("laborum"),
    }, operations.ExportEventsJSONLSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## GetAccountAgents

Get all agents across all organizations

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountAgents(ctx, operations.GetAccountAgentsRequest{
        Search: sdk.String("dolores"),
    }, operations.GetAccountAgentsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Agents != nil {
        // handle response
    }
}
```

## GetAccountCredential

Get credential details

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountCredential(ctx, operations.GetAccountCredentialRequest{
        CredentialID: "352c5955-907a-4ff1-a3a2-fa9467739251",
    }, operations.GetAccountCredentialSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Credential != nil {
        // handle response
    }
}
```

## GetAccountCredentials

Get all account credentials

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountCredentials(ctx, operations.GetAccountCredentialsRequest{
        Search: sdk.String("laborum"),
    }, operations.GetAccountCredentialsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Credentials != nil {
        // handle response
    }
}
```

## GetAccountGroup

Get group details

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountGroup(ctx, operations.GetAccountGroupRequest{
        GroupID: "a52c3f5a-d019-4da1-bfe7-8f097b0074f1",
    }, operations.GetAccountGroupSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetAccountGroupMapping

Get SSO group mapping details

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountGroupMapping(ctx, operations.GetAccountGroupMappingRequest{
        GroupMappingID: "5471b5e6-e13b-499d-888e-1e91e450ad2a",
    }, operations.GetAccountGroupMappingSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetAccountGroupMappings

Get all SSO group mappings

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountGroupMappings(ctx, operations.GetAccountGroupMappingsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetAccountGroups

Get all groups

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountGroups(ctx, operations.GetAccountGroupsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetAccountKey

Get key details

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountKey(ctx, operations.GetAccountKeyRequest{
        KeyID: "bd442698-02d5-402a-94bb-4f63c969e9a3",
    }, operations.GetAccountKeySecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetAccountKeys

Get all active API keys

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountKeys(ctx, operations.GetAccountKeysSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeys != nil {
        // handle response
    }
}
```

## GetAccountLicense

Get license details

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountLicense(ctx, operations.GetAccountLicenseSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetAccountOrganization

Get organization details

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountOrganization(ctx, operations.GetAccountOrganizationRequest{
        OrgID: "efa77dfb-14cd-466a-a395-efb9ba88f3a6",
    }, operations.GetAccountOrganizationSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetAccountOrganizations

Get all organization details

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountOrganizations(ctx, operations.GetAccountOrganizationsRequest{
        Search: sdk.String("vel"),
    }, operations.GetAccountOrganizationsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organizations != nil {
        // handle response
    }
}
```

## GetAccountScanTemplate

Get scan template details

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountScanTemplate(ctx, operations.GetAccountScanTemplateRequest{
        ScanTemplateID: "997074ba-4469-4b6e-a141-959890afa563",
    }, operations.GetAccountScanTemplateSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanTemplate != nil {
        // handle response
    }
}
```

## GetAccountScanTemplates

Get all scan templates across all organizations (up to 1000)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountScanTemplates(ctx, operations.GetAccountScanTemplatesRequest{
        Search: sdk.String("necessitatibus"),
    }, operations.GetAccountScanTemplatesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanTemplates != nil {
        // handle response
    }
}
```

## GetAccountSites

Get all sites details across all organizations

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountSites(ctx, operations.GetAccountSitesRequest{
        Search: sdk.String("odit"),
    }, operations.GetAccountSitesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Sites != nil {
        // handle response
    }
}
```

## GetAccountTasks

Get all task details across all organizations (up to 1000)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountTasks(ctx, operations.GetAccountTasksRequest{
        Search: sdk.String("nemo"),
    }, operations.GetAccountTasksSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tasks != nil {
        // handle response
    }
}
```

## GetAccountUser

Get user details

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountUser(ctx, operations.GetAccountUserRequest{
        UserID: "16fe4c8b-711e-45b7-bd2e-d028921cddc6",
    }, operations.GetAccountUserSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetAccountUsers

Get all users

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccountUsers(ctx, operations.GetAccountUsersSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Users != nil {
        // handle response
    }
}
```

## RemoveAccountCredential

Remove this credential

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.RemoveAccountCredential(ctx, operations.RemoveAccountCredentialRequest{
        CredentialID: "92601fb5-76b0-4d5f-8d30-c5fbb2587053",
    }, operations.RemoveAccountCredentialSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveAccountGroup

Remove this group

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.RemoveAccountGroup(ctx, operations.RemoveAccountGroupRequest{
        GroupID: "202c73d5-fe9b-490c-a890-9b3fe49a8d9c",
    }, operations.RemoveAccountGroupSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveAccountGroupMapping

Remove this SSO group mapping

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.RemoveAccountGroupMapping(ctx, operations.RemoveAccountGroupMappingRequest{
        GroupMappingID: "bf486333-23f9-4b77-b3a4-100674ebf692",
    }, operations.RemoveAccountGroupMappingSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveAccountKey

Remove this key

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.RemoveAccountKey(ctx, operations.RemoveAccountKeyRequest{
        KeyID: "80d1ba77-a89e-4bf7-b7ae-4203ce5e6a95",
    }, operations.RemoveAccountKeySecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveAccountOrganization

Remove this organization

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.RemoveAccountOrganization(ctx, operations.RemoveAccountOrganizationRequest{
        OrgID: "d8a0d446-ce2a-4f7a-b3cf-3be453f870b3",
    }, operations.RemoveAccountOrganizationSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveAccountScanTemplate

Remove scan template

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.RemoveAccountScanTemplate(ctx, operations.RemoveAccountScanTemplateRequest{
        ScanTemplateID: "26b5a734-29cd-4b1a-8422-bb679d232271",
    }, operations.RemoveAccountScanTemplateSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanTemplate != nil {
        // handle response
    }
}
```

## RemoveAccountUser

Remove this user

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.RemoveAccountUser(ctx, operations.RemoveAccountUserRequest{
        UserID: "5bf0cbb1-e31b-48b9-8f34-43a1108e0adc",
    }, operations.RemoveAccountUserSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetAccountUserLockout

Resets the user's lockout status

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.ResetAccountUserLockout(ctx, operations.ResetAccountUserLockoutRequest{
        UserID: "f4b92187-9fce-4953-b73e-f7fbc7abd74d",
    }, operations.ResetAccountUserLockoutSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ResetAccountUserMFA

Resets the user's MFA tokens

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.ResetAccountUserMFA(ctx, operations.ResetAccountUserMFARequest{
        UserID: "d39c0f5d-2cff-47c7-8a45-626d436813f1",
    }, operations.ResetAccountUserMFASecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ResetAccountUserPassword

Sends the user a password reset email

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.ResetAccountUserPassword(ctx, operations.ResetAccountUserPasswordRequest{
        UserID: "6d9f5fce-6c55-4614-ac3e-250fb008c42e",
    }, operations.ResetAccountUserPasswordSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## RotateAccountKey

Rotates the key secret

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.RotateAccountKey(ctx, operations.RotateAccountKeyRequest{
        KeyID: "141aac36-6c8d-4d6b-9442-907474778a7b",
    }, operations.RotateAccountKeySecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKey != nil {
        // handle response
    }
}
```

## RotateAccountOrganizationExportToken

Rotates the organization export token and returns the updated organization

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.RotateAccountOrganizationExportToken(ctx, operations.RotateAccountOrganizationExportTokenRequest{
        OrgID: "d466d28c-10ab-43cd-8a42-51904e523c7e",
    }, operations.RotateAccountOrganizationExportTokenSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organization != nil {
        // handle response
    }
}
```

## UpdateAccountGroup

Update an existing group

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UpdateAccountGroup(ctx, shared.GroupPut{
        Description: sdk.String("Viewers Group"),
        ExpiresAt: sdk.Int64(1576300370),
        ID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
        Name: sdk.String("Viewers"),
        OrgDefaultRole: sdk.String("admin"),
        OrgRoles: map[string]interface{}{
            "distinctio": "quod",
        },
    }, operations.UpdateAccountGroupSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateAccountGroupMapping

Update an existing SSO group mapping

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UpdateAccountGroupMapping(ctx, shared.GroupMapping{
        CreatedAt: sdk.Int64(1576300370),
        CreatedByEmail: sdk.String("jsmith@example.com"),
        Description: sdk.String("Maps basic-attribute to Viewers Group"),
        GroupID: "2b096711-4d28-4417-8635-64af4f62c1ae",
        GroupName: sdk.String("Viewers Group"),
        ID: "f6cfb91a-52ea-4a86-bf9a-5a891a26f52b",
        SsoAttribute: "basic-attribute",
        SsoValue: "basic-attribute-value",
        UpdatedAt: sdk.Int64(1576300370),
    }, operations.UpdateAccountGroupMappingSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateAccountOrganization

Update organization details

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UpdateAccountOrganization(ctx, operations.UpdateAccountOrganizationRequest{
        OrgOptions: shared.OrgOptions{
            Description: sdk.String("Wobbly Widgets, Inc."),
            ExpirationAssetsOffline: sdk.String("365"),
            ExpirationAssetsStale: sdk.String("365"),
            ExpirationScans: sdk.String("365"),
            ExportToken: sdk.String("ETXXXXXXXXXXXXXXXX"),
            Name: sdk.String("My Organization"),
            ParentID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
            Project: sdk.String("dignissimos"),
        },
        OrgID: "178e4796-f2a7-40c6-8828-2aa482562f22",
    }, operations.UpdateAccountOrganizationSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organization != nil {
        // handle response
    }
}
```

## UpdateAccountScanTemplate

Update scan template

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UpdateAccountScanTemplate(ctx, shared.ScanTemplate{
        ACL: map[string]interface{}{
            "saepe": "occaecati",
        },
        AgentID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
        ClientID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
        CreatedAt: sdk.Int64(1576300370),
        CreatedBy: sdk.String("user@example.com"),
        CreatedByUserID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
        CruncherID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
        Description: sdk.String("My Scan Template"),
        Error: sdk.String("agent unavailable"),
        Global: false,
        GracePeriod: sdk.String("4"),
        Hidden: sdk.Bool(false),
        HostedZoneID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
        ID: "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
        LinkedTaskCount: sdk.Int(1),
        Name: sdk.String("My Scan Template"),
        OrganizationID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
        Params: map[string]string{
            "et": "esse",
            "eveniet": "accusamus",
            "veritatis": "esse",
        },
        ParentID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
        Recur: sdk.Bool(false),
        RecurFrequency: sdk.String("hour"),
        RecurLast: sdk.Int64(1576300370),
        RecurLastTaskID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
        RecurNext: sdk.Int64(1576300370),
        SiteID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
        SizeData: sdk.Int64(800379),
        SizeResults: sdk.Int64(724168),
        SizeSite: sdk.Int64(877131),
        SourceID: sdk.String("1"),
        StartTime: sdk.Int64(1576300370),
        Stats: map[string]interface{}{
            "quasi": "saepe",
            "vel": "harum",
        },
        Status: sdk.String("processed"),
        TemplateID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
        Type: sdk.String("scan"),
        UpdatedAt: sdk.Int64(1576300370),
    }, operations.UpdateAccountScanTemplateSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanTemplate != nil {
        // handle response
    }
}
```

## UpdateAccountUser

Update a user's details

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UpdateAccountUser(ctx, operations.UpdateAccountUserRequest{
        UserOptions: shared.UserOptions{
            ClientAdmin: sdk.Bool(true),
            Email: sdk.String("jsmith@example.com"),
            FirstName: sdk.String("James"),
            LastName: sdk.String("Smith"),
            OrgDefaultRole: sdk.String("admin"),
            OrgRoles: map[string]interface{}{
                "rerum": "occaecati",
                "minima": "distinctio",
            },
        },
        UserID: "c0ab3c20-c4f3-4789-bd87-1f99dd2efd12",
    }, operations.UpdateAccountUserSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
