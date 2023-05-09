# Accounts

### Available Operations

* [TagmanagerAccountsContainersCreate](#tagmanageraccountscontainerscreate) - Creates a Container.
* [TagmanagerAccountsContainersDelete](#tagmanageraccountscontainersdelete) - Deletes a Container.
* [TagmanagerAccountsContainersEnvironmentsCreate](#tagmanageraccountscontainersenvironmentscreate) - Creates a GTM Environment.
* [TagmanagerAccountsContainersEnvironmentsDelete](#tagmanageraccountscontainersenvironmentsdelete) - Deletes a GTM Environment.
* [TagmanagerAccountsContainersEnvironmentsGet](#tagmanageraccountscontainersenvironmentsget) - Gets a GTM Environment.
* [TagmanagerAccountsContainersEnvironmentsList](#tagmanageraccountscontainersenvironmentslist) - Lists all GTM Environments of a GTM Container.
* [TagmanagerAccountsContainersEnvironmentsUpdate](#tagmanageraccountscontainersenvironmentsupdate) - Updates a GTM Environment.
* [TagmanagerAccountsContainersFoldersCreate](#tagmanageraccountscontainersfolderscreate) - Creates a GTM Folder.
* [TagmanagerAccountsContainersFoldersDelete](#tagmanageraccountscontainersfoldersdelete) - Deletes a GTM Folder.
* [TagmanagerAccountsContainersFoldersEntitiesList](#tagmanageraccountscontainersfoldersentitieslist) - List all entities in a GTM Folder.
* [TagmanagerAccountsContainersFoldersGet](#tagmanageraccountscontainersfoldersget) - Gets a GTM Folder.
* [TagmanagerAccountsContainersFoldersList](#tagmanageraccountscontainersfolderslist) - Lists all GTM Folders of a Container.
* [TagmanagerAccountsContainersFoldersUpdate](#tagmanageraccountscontainersfoldersupdate) - Updates a GTM Folder.
* [TagmanagerAccountsContainersGet](#tagmanageraccountscontainersget) - Gets a Container.
* [TagmanagerAccountsContainersList](#tagmanageraccountscontainerslist) - Lists all Containers that belongs to a GTM Account.
* [TagmanagerAccountsContainersMoveFoldersUpdate](#tagmanageraccountscontainersmovefoldersupdate) - Moves entities to a GTM Folder.
* [TagmanagerAccountsContainersReauthorizeEnvironmentsUpdate](#tagmanageraccountscontainersreauthorizeenvironmentsupdate) - Re-generates the authorization code for a GTM Environment.
* [TagmanagerAccountsContainersTagsCreate](#tagmanageraccountscontainerstagscreate) - Creates a GTM Tag.
* [TagmanagerAccountsContainersTagsDelete](#tagmanageraccountscontainerstagsdelete) - Deletes a GTM Tag.
* [TagmanagerAccountsContainersTagsGet](#tagmanageraccountscontainerstagsget) - Gets a GTM Tag.
* [TagmanagerAccountsContainersTagsList](#tagmanageraccountscontainerstagslist) - Lists all GTM Tags of a Container.
* [TagmanagerAccountsContainersTagsUpdate](#tagmanageraccountscontainerstagsupdate) - Updates a GTM Tag.
* [TagmanagerAccountsContainersTriggersCreate](#tagmanageraccountscontainerstriggerscreate) - Creates a GTM Trigger.
* [TagmanagerAccountsContainersTriggersDelete](#tagmanageraccountscontainerstriggersdelete) - Deletes a GTM Trigger.
* [TagmanagerAccountsContainersTriggersGet](#tagmanageraccountscontainerstriggersget) - Gets a GTM Trigger.
* [TagmanagerAccountsContainersTriggersList](#tagmanageraccountscontainerstriggerslist) - Lists all GTM Triggers of a Container.
* [TagmanagerAccountsContainersTriggersUpdate](#tagmanageraccountscontainerstriggersupdate) - Updates a GTM Trigger.
* [TagmanagerAccountsContainersUpdate](#tagmanageraccountscontainersupdate) - Updates a Container.
* [TagmanagerAccountsContainersVariablesCreate](#tagmanageraccountscontainersvariablescreate) - Creates a GTM Variable.
* [TagmanagerAccountsContainersVariablesDelete](#tagmanageraccountscontainersvariablesdelete) - Deletes a GTM Variable.
* [TagmanagerAccountsContainersVariablesGet](#tagmanageraccountscontainersvariablesget) - Gets a GTM Variable.
* [TagmanagerAccountsContainersVariablesList](#tagmanageraccountscontainersvariableslist) - Lists all GTM Variables of a Container.
* [TagmanagerAccountsContainersVariablesUpdate](#tagmanageraccountscontainersvariablesupdate) - Updates a GTM Variable.
* [TagmanagerAccountsContainersVersionsCreate](#tagmanageraccountscontainersversionscreate) - Creates a Container Version.
* [TagmanagerAccountsContainersVersionsDelete](#tagmanageraccountscontainersversionsdelete) - Deletes a Container Version.
* [TagmanagerAccountsContainersVersionsGet](#tagmanageraccountscontainersversionsget) - Gets a Container Version.
* [TagmanagerAccountsContainersVersionsList](#tagmanageraccountscontainersversionslist) - Lists all Container Versions of a GTM Container.
* [TagmanagerAccountsContainersVersionsPublish](#tagmanageraccountscontainersversionspublish) - Publishes a Container Version.
* [TagmanagerAccountsContainersVersionsRestore](#tagmanageraccountscontainersversionsrestore) - Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
* [TagmanagerAccountsContainersVersionsUndelete](#tagmanageraccountscontainersversionsundelete) - Undeletes a Container Version.
* [TagmanagerAccountsContainersVersionsUpdate](#tagmanageraccountscontainersversionsupdate) - Updates a Container Version.
* [TagmanagerAccountsGet](#tagmanageraccountsget) - Gets a GTM Account.
* [TagmanagerAccountsList](#tagmanageraccountslist) - Lists all GTM Accounts that a user has access to.
* [TagmanagerAccountsPermissionsCreate](#tagmanageraccountspermissionscreate) - Creates a user's Account & Container Permissions.
* [TagmanagerAccountsPermissionsDelete](#tagmanageraccountspermissionsdelete) - Removes a user from the account, revoking access to it and all of its containers.
* [TagmanagerAccountsPermissionsGet](#tagmanageraccountspermissionsget) - Gets a user's Account & Container Permissions.
* [TagmanagerAccountsPermissionsList](#tagmanageraccountspermissionslist) - List all users that have access to the account along with Account and Container Permissions granted to each of them.
* [TagmanagerAccountsPermissionsUpdate](#tagmanageraccountspermissionsupdate) - Updates a user's Account & Container Permissions.
* [TagmanagerAccountsUpdate](#tagmanageraccountsupdate) - Updates a GTM Account.

## TagmanagerAccountsContainersCreate

Creates a Container.

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
    res, err := s.Accounts.TagmanagerAccountsContainersCreate(ctx, operations.TagmanagerAccountsContainersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Container: &shared.Container{
            AccountID: sdk.String("odit"),
            ContainerID: sdk.String("at"),
            DomainName: []string{
                "maiores",
                "molestiae",
                "quod",
                "quod",
            },
            EnabledBuiltInVariable: []shared.ContainerEnabledBuiltInVariableEnum{
                shared.ContainerEnabledBuiltInVariableEnumAmpClientTimestamp,
                shared.ContainerEnabledBuiltInVariableEnumFirebaseEventParameterNotificationMessageName,
            },
            Fingerprint: sdk.String("dolorum"),
            Name: sdk.String("Antoinette Nikolaus"),
            Notes: sdk.String("deleniti"),
            PublicID: sdk.String("hic"),
            TimeZoneCountryID: sdk.String("optio"),
            TimeZoneID: sdk.String("totam"),
            UsageContext: []shared.ContainerUsageContextEnum{
                shared.ContainerUsageContextEnumIos,
            },
        },
        AccessToken: sdk.String("molestiae"),
        AccountID: "modi",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("cum"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.TagmanagerAccountsContainersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Container != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersDelete

Deletes a Container.

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
    res, err := s.Accounts.TagmanagerAccountsContainersDelete(ctx, operations.TagmanagerAccountsContainersDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("natus"),
        AccountID: "sed",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        ContainerID: "natus",
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.TagmanagerAccountsContainersDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagmanagerAccountsContainersEnvironmentsCreate

Creates a GTM Environment.

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
    res, err := s.Accounts.TagmanagerAccountsContainersEnvironmentsCreate(ctx, operations.TagmanagerAccountsContainersEnvironmentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Environment: &shared.Environment{
            AccountID: sdk.String("iure"),
            AuthorizationCode: sdk.String("saepe"),
            AuthorizationTimestampMs: sdk.String("quidem"),
            ContainerID: sdk.String("architecto"),
            ContainerVersionID: sdk.String("ipsa"),
            Description: sdk.String("reiciendis"),
            EnableDebug: sdk.Bool(false),
            EnvironmentID: sdk.String("est"),
            Fingerprint: sdk.String("mollitia"),
            Name: sdk.String("Ernest Ebert"),
            Type: shared.EnvironmentTypeEnumDraft.ToPointer(),
            URL: sdk.String("enim"),
        },
        AccessToken: sdk.String("omnis"),
        AccountID: "nemo",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        ContainerID: "accusantium",
        Fields: sdk.String("iure"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.TagmanagerAccountsContainersEnvironmentsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Environment != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersEnvironmentsDelete

Deletes a GTM Environment.

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
    res, err := s.Accounts.TagmanagerAccountsContainersEnvironmentsDelete(ctx, operations.TagmanagerAccountsContainersEnvironmentsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("culpa"),
        AccountID: "consequuntur",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        ContainerID: "occaecati",
        EnvironmentID: "numquam",
        Fields: sdk.String("commodi"),
        Key: sdk.String("quam"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("quia"),
    }, operations.TagmanagerAccountsContainersEnvironmentsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagmanagerAccountsContainersEnvironmentsGet

Gets a GTM Environment.

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
    res, err := s.Accounts.TagmanagerAccountsContainersEnvironmentsGet(ctx, operations.TagmanagerAccountsContainersEnvironmentsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vitae"),
        AccountID: "laborum",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("enim"),
        ContainerID: "odit",
        EnvironmentID: "quo",
        Fields: sdk.String("sequi"),
        Key: sdk.String("tenetur"),
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("aut"),
    }, operations.TagmanagerAccountsContainersEnvironmentsGetSecurity{
        Option1: &operations.TagmanagerAccountsContainersEnvironmentsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Environment != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersEnvironmentsList

Lists all GTM Environments of a GTM Container.

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
    res, err := s.Accounts.TagmanagerAccountsContainersEnvironmentsList(ctx, operations.TagmanagerAccountsContainersEnvironmentsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("error"),
        AccountID: "temporibus",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        ContainerID: "reiciendis",
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.TagmanagerAccountsContainersEnvironmentsListSecurity{
        Option1: &operations.TagmanagerAccountsContainersEnvironmentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnvironmentsResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersEnvironmentsUpdate

Updates a GTM Environment.

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
    res, err := s.Accounts.TagmanagerAccountsContainersEnvironmentsUpdate(ctx, operations.TagmanagerAccountsContainersEnvironmentsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Environment: &shared.Environment{
            AccountID: sdk.String("voluptate"),
            AuthorizationCode: sdk.String("cum"),
            AuthorizationTimestampMs: sdk.String("perferendis"),
            ContainerID: sdk.String("doloremque"),
            ContainerVersionID: sdk.String("reprehenderit"),
            Description: sdk.String("ut"),
            EnableDebug: sdk.Bool(false),
            EnvironmentID: sdk.String("maiores"),
            Fingerprint: sdk.String("dicta"),
            Name: sdk.String("Miss Valerie Kshlerin"),
            Type: shared.EnvironmentTypeEnumDraft.ToPointer(),
            URL: sdk.String("commodi"),
        },
        AccessToken: sdk.String("repudiandae"),
        AccountID: "quae",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quidem"),
        ContainerID: "molestias",
        EnvironmentID: "excepturi",
        Fields: sdk.String("pariatur"),
        Fingerprint: sdk.String("modi"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.TagmanagerAccountsContainersEnvironmentsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Environment != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersFoldersCreate

Creates a GTM Folder.

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
    res, err := s.Accounts.TagmanagerAccountsContainersFoldersCreate(ctx, operations.TagmanagerAccountsContainersFoldersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Folder: &shared.Folder{
            AccountID: sdk.String("veritatis"),
            ContainerID: sdk.String("itaque"),
            Fingerprint: sdk.String("incidunt"),
            FolderID: sdk.String("enim"),
            Name: sdk.String("Monique Spinka"),
        },
        AccessToken: sdk.String("distinctio"),
        AccountID: "quibusdam",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("modi"),
        ContainerID: "qui",
        Fields: sdk.String("aliquid"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("assumenda"),
    }, operations.TagmanagerAccountsContainersFoldersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Folder != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersFoldersDelete

Deletes a GTM Folder.

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
    res, err := s.Accounts.TagmanagerAccountsContainersFoldersDelete(ctx, operations.TagmanagerAccountsContainersFoldersDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("alias"),
        AccountID: "fugit",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("excepturi"),
        ContainerID: "tempora",
        Fields: sdk.String("facilis"),
        FolderID: "tempore",
        Key: sdk.String("labore"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.TagmanagerAccountsContainersFoldersDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagmanagerAccountsContainersFoldersEntitiesList

List all entities in a GTM Folder.

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
    res, err := s.Accounts.TagmanagerAccountsContainersFoldersEntitiesList(ctx, operations.TagmanagerAccountsContainersFoldersEntitiesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        AccountID: "provident",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        ContainerID: "officia",
        Fields: sdk.String("dolor"),
        FolderID: "debitis",
        Key: sdk.String("a"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("illum"),
    }, operations.TagmanagerAccountsContainersFoldersEntitiesListSecurity{
        Option1: &operations.TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FolderEntities != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersFoldersGet

Gets a GTM Folder.

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
    res, err := s.Accounts.TagmanagerAccountsContainersFoldersGet(ctx, operations.TagmanagerAccountsContainersFoldersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("rerum"),
        AccountID: "dicta",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        ContainerID: "facere",
        Fields: sdk.String("ea"),
        FolderID: "aliquid",
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("enim"),
    }, operations.TagmanagerAccountsContainersFoldersGetSecurity{
        Option1: &operations.TagmanagerAccountsContainersFoldersGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Folder != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersFoldersList

Lists all GTM Folders of a Container.

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
    res, err := s.Accounts.TagmanagerAccountsContainersFoldersList(ctx, operations.TagmanagerAccountsContainersFoldersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("delectus"),
        AccountID: "quidem",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        ContainerID: "id",
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.TagmanagerAccountsContainersFoldersListSecurity{
        Option1: &operations.TagmanagerAccountsContainersFoldersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFoldersResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersFoldersUpdate

Updates a GTM Folder.

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
    res, err := s.Accounts.TagmanagerAccountsContainersFoldersUpdate(ctx, operations.TagmanagerAccountsContainersFoldersUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Folder: &shared.Folder{
            AccountID: sdk.String("natus"),
            ContainerID: sdk.String("omnis"),
            Fingerprint: sdk.String("molestiae"),
            FolderID: sdk.String("perferendis"),
            Name: sdk.String("Megan Rau"),
        },
        AccessToken: sdk.String("labore"),
        AccountID: "suscipit",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        ContainerID: "eum",
        Fields: sdk.String("vero"),
        Fingerprint: sdk.String("aspernatur"),
        FolderID: "architecto",
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("et"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("provident"),
    }, operations.TagmanagerAccountsContainersFoldersUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Folder != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersGet

Gets a Container.

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
    res, err := s.Accounts.TagmanagerAccountsContainersGet(ctx, operations.TagmanagerAccountsContainersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sint"),
        AccountID: "accusantium",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        ContainerID: "mollitia",
        Fields: sdk.String("ad"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.TagmanagerAccountsContainersGetSecurity{
        Option1: &operations.TagmanagerAccountsContainersGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Container != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersList

Lists all Containers that belongs to a GTM Account.

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
    res, err := s.Accounts.TagmanagerAccountsContainersList(ctx, operations.TagmanagerAccountsContainersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        AccountID: "doloribus",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.TagmanagerAccountsContainersListSecurity{
        Option1: &operations.TagmanagerAccountsContainersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContainersResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersMoveFoldersUpdate

Moves entities to a GTM Folder.

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
    res, err := s.Accounts.TagmanagerAccountsContainersMoveFoldersUpdate(ctx, operations.TagmanagerAccountsContainersMoveFoldersUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Folder: &shared.Folder{
            AccountID: sdk.String("ullam"),
            ContainerID: sdk.String("expedita"),
            Fingerprint: sdk.String("nihil"),
            FolderID: sdk.String("repellat"),
            Name: sdk.String("Louis Turner Sr."),
        },
        AccessToken: sdk.String("praesentium"),
        AccountID: "natus",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sunt"),
        ContainerID: "quo",
        Fields: sdk.String("illum"),
        FolderID: "pariatur",
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        TagID: []string{
            "ea",
        },
        TriggerID: []string{
            "ab",
        },
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("quidem"),
        VariableID: []string{
            "voluptate",
            "autem",
        },
    }, operations.TagmanagerAccountsContainersMoveFoldersUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagmanagerAccountsContainersReauthorizeEnvironmentsUpdate

Re-generates the authorization code for a GTM Environment.

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
    res, err := s.Accounts.TagmanagerAccountsContainersReauthorizeEnvironmentsUpdate(ctx, operations.TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Environment: &shared.Environment{
            AccountID: sdk.String("eaque"),
            AuthorizationCode: sdk.String("pariatur"),
            AuthorizationTimestampMs: sdk.String("nemo"),
            ContainerID: sdk.String("voluptatibus"),
            ContainerVersionID: sdk.String("perferendis"),
            Description: sdk.String("fugiat"),
            EnableDebug: sdk.Bool(false),
            EnvironmentID: sdk.String("amet"),
            Fingerprint: sdk.String("aut"),
            Name: sdk.String("Lewis Welch"),
            Type: shared.EnvironmentTypeEnumUser.ToPointer(),
            URL: sdk.String("quis"),
        },
        AccessToken: sdk.String("totam"),
        AccountID: "dignissimos",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        ContainerID: "nesciunt",
        EnvironmentID: "eos",
        Fields: sdk.String("perferendis"),
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("vero"),
    }, operations.TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Environment != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersTagsCreate

Creates a GTM Tag.

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
    res, err := s.Accounts.TagmanagerAccountsContainersTagsCreate(ctx, operations.TagmanagerAccountsContainersTagsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Tag: &shared.Tag{
            AccountID: sdk.String("hic"),
            BlockingRuleID: []string{
                "omnis",
                "facilis",
                "perspiciatis",
                "voluptatem",
            },
            BlockingTriggerID: []string{
                "consequuntur",
                "blanditiis",
                "error",
                "eaque",
            },
            ContainerID: sdk.String("occaecati"),
            Fingerprint: sdk.String("rerum"),
            FiringRuleID: []string{
                "asperiores",
            },
            FiringTriggerID: []string{
                "modi",
                "iste",
                "dolorum",
                "deleniti",
            },
            LiveOnly: sdk.Bool(false),
            Name: sdk.String("Rene Rolfson"),
            Notes: sdk.String("quaerat"),
            Parameter: []shared.Parameter{
                shared.Parameter{
                    Key: sdk.String("aliquid"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumInteger.ToPointer(),
                    Value: sdk.String("qui"),
                },
                shared.Parameter{
                    Key: sdk.String("ipsum"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                    Value: sdk.String("voluptate"),
                },
                shared.Parameter{
                    Key: sdk.String("dignissimos"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumMap.ToPointer(),
                    Value: sdk.String("numquam"),
                },
            },
            ParentFolderID: sdk.String("veritatis"),
            Paused: sdk.Bool(false),
            Priority: &shared.Parameter{
                Key: sdk.String("ipsa"),
                List: []shared.Parameter{
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumList.ToPointer(),
                Value: sdk.String("quaerat"),
            },
            ScheduleEndMs: sdk.String("accusamus"),
            ScheduleStartMs: sdk.String("quidem"),
            SetupTag: []shared.SetupTag{
                shared.SetupTag{
                    StopOnSetupFailure: sdk.Bool(false),
                    TagName: sdk.String("voluptas"),
                },
                shared.SetupTag{
                    StopOnSetupFailure: sdk.Bool(false),
                    TagName: sdk.String("natus"),
                },
                shared.SetupTag{
                    StopOnSetupFailure: sdk.Bool(false),
                    TagName: sdk.String("eos"),
                },
                shared.SetupTag{
                    StopOnSetupFailure: sdk.Bool(false),
                    TagName: sdk.String("atque"),
                },
            },
            TagFiringOption: shared.TagTagFiringOptionEnumUnlimited.ToPointer(),
            TagID: sdk.String("fugiat"),
            TeardownTag: []shared.TeardownTag{
                shared.TeardownTag{
                    StopTeardownOnFailure: sdk.Bool(false),
                    TagName: sdk.String("soluta"),
                },
            },
            Type: sdk.String("dolorum"),
        },
        AccessToken: sdk.String("iusto"),
        AccountID: "voluptate",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deleniti"),
        ContainerID: "omnis",
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.TagmanagerAccountsContainersTagsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersTagsDelete

Deletes a GTM Tag.

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
    res, err := s.Accounts.TagmanagerAccountsContainersTagsDelete(ctx, operations.TagmanagerAccountsContainersTagsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("saepe"),
        AccountID: "eius",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        ContainerID: "amet",
        Fields: sdk.String("optio"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        TagID: "suscipit",
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("provident"),
    }, operations.TagmanagerAccountsContainersTagsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagmanagerAccountsContainersTagsGet

Gets a GTM Tag.

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
    res, err := s.Accounts.TagmanagerAccountsContainersTagsGet(ctx, operations.TagmanagerAccountsContainersTagsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repellendus"),
        AccountID: "totam",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        ContainerID: "at",
        Fields: sdk.String("quaerat"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        TagID: "officiis",
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.TagmanagerAccountsContainersTagsGetSecurity{
        Option1: &operations.TagmanagerAccountsContainersTagsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersTagsList

Lists all GTM Tags of a Container.

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
    res, err := s.Accounts.TagmanagerAccountsContainersTagsList(ctx, operations.TagmanagerAccountsContainersTagsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        AccountID: "harum",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        ContainerID: "quisquam",
        Fields: sdk.String("tenetur"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("enim"),
    }, operations.TagmanagerAccountsContainersTagsListSecurity{
        Option1: &operations.TagmanagerAccountsContainersTagsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersTagsUpdate

Updates a GTM Tag.

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
    res, err := s.Accounts.TagmanagerAccountsContainersTagsUpdate(ctx, operations.TagmanagerAccountsContainersTagsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Tag: &shared.Tag{
            AccountID: sdk.String("sapiente"),
            BlockingRuleID: []string{
                "nihil",
                "sit",
                "expedita",
            },
            BlockingTriggerID: []string{
                "sed",
            },
            ContainerID: sdk.String("vel"),
            Fingerprint: sdk.String("libero"),
            FiringRuleID: []string{
                "deserunt",
                "quam",
            },
            FiringTriggerID: []string{
                "incidunt",
            },
            LiveOnly: sdk.Bool(false),
            Name: sdk.String("Shelly Schoen"),
            Notes: sdk.String("dicta"),
            Parameter: []shared.Parameter{
                shared.Parameter{
                    Key: sdk.String("totam"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumInteger.ToPointer(),
                    Value: sdk.String("distinctio"),
                },
                shared.Parameter{
                    Key: sdk.String("facilis"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumList.ToPointer(),
                    Value: sdk.String("temporibus"),
                },
                shared.Parameter{
                    Key: sdk.String("qui"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumInteger.ToPointer(),
                    Value: sdk.String("odio"),
                },
            },
            ParentFolderID: sdk.String("sunt"),
            Paused: sdk.Bool(false),
            Priority: &shared.Parameter{
                Key: sdk.String("ullam"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                Value: sdk.String("cumque"),
            },
            ScheduleEndMs: sdk.String("soluta"),
            ScheduleStartMs: sdk.String("nobis"),
            SetupTag: []shared.SetupTag{
                shared.SetupTag{
                    StopOnSetupFailure: sdk.Bool(false),
                    TagName: sdk.String("saepe"),
                },
            },
            TagFiringOption: shared.TagTagFiringOptionEnumUnlimited.ToPointer(),
            TagID: sdk.String("veritatis"),
            TeardownTag: []shared.TeardownTag{
                shared.TeardownTag{
                    StopTeardownOnFailure: sdk.Bool(false),
                    TagName: sdk.String("quos"),
                },
                shared.TeardownTag{
                    StopTeardownOnFailure: sdk.Bool(false),
                    TagName: sdk.String("tempore"),
                },
                shared.TeardownTag{
                    StopTeardownOnFailure: sdk.Bool(false),
                    TagName: sdk.String("cupiditate"),
                },
            },
            Type: sdk.String("aperiam"),
        },
        AccessToken: sdk.String("delectus"),
        AccountID: "dolorem",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("labore"),
        ContainerID: "adipisci",
        Fields: sdk.String("dolorum"),
        Fingerprint: sdk.String("architecto"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        TagID: "itaque",
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("est"),
    }, operations.TagmanagerAccountsContainersTagsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersTriggersCreate

Creates a GTM Trigger.

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
    res, err := s.Accounts.TagmanagerAccountsContainersTriggersCreate(ctx, operations.TagmanagerAccountsContainersTriggersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Trigger: &shared.Trigger{
            AccountID: sdk.String("porro"),
            AutoEventFilter: []shared.Condition{
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("facilis"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                            Value: sdk.String("laudantium"),
                        },
                        shared.Parameter{
                            Key: sdk.String("odio"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                            Value: sdk.String("vero"),
                        },
                    },
                    Type: shared.ConditionTypeEnumGreaterOrEquals.ToPointer(),
                },
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("ipsum"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumInteger.ToPointer(),
                            Value: sdk.String("vero"),
                        },
                        shared.Parameter{
                            Key: sdk.String("tenetur"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                            Value: sdk.String("quod"),
                        },
                    },
                    Type: shared.ConditionTypeEnumGreater.ToPointer(),
                },
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("facilis"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                            Value: sdk.String("quibusdam"),
                        },
                        shared.Parameter{
                            Key: sdk.String("illum"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                            Value: sdk.String("aut"),
                        },
                        shared.Parameter{
                            Key: sdk.String("voluptatibus"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumInteger.ToPointer(),
                            Value: sdk.String("porro"),
                        },
                    },
                    Type: shared.ConditionTypeEnumURLMatches.ToPointer(),
                },
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("iusto"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                            Value: sdk.String("officia"),
                        },
                        shared.Parameter{
                            Key: sdk.String("tempora"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                            Value: sdk.String("vel"),
                        },
                        shared.Parameter{
                            Key: sdk.String("possimus"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                            Value: sdk.String("laudantium"),
                        },
                        shared.Parameter{
                            Key: sdk.String("dicta"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                            Value: sdk.String("ex"),
                        },
                    },
                    Type: shared.ConditionTypeEnumCSSSelector.ToPointer(),
                },
            },
            CheckValidation: &shared.Parameter{
                Key: sdk.String("excepturi"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                Value: sdk.String("quisquam"),
            },
            ContainerID: sdk.String("saepe"),
            ContinuousTimeMinMilliseconds: &shared.Parameter{
                Key: sdk.String("ea"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                Value: sdk.String("aliquid"),
            },
            CustomEventFilter: []shared.Condition{
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("ea"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                            Value: sdk.String("aspernatur"),
                        },
                        shared.Parameter{
                            Key: sdk.String("minima"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                            Value: sdk.String("aut"),
                        },
                    },
                    Type: shared.ConditionTypeEnumEquals.ToPointer(),
                },
            },
            EventName: &shared.Parameter{
                Key: sdk.String("deleniti"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumInteger.ToPointer(),
                Value: sdk.String("accusamus"),
            },
            Filter: []shared.Condition{
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("et"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                            Value: sdk.String("velit"),
                        },
                        shared.Parameter{
                            Key: sdk.String("eum"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumList.ToPointer(),
                            Value: sdk.String("assumenda"),
                        },
                    },
                    Type: shared.ConditionTypeEnumCSSSelector.ToPointer(),
                },
            },
            Fingerprint: sdk.String("voluptas"),
            HorizontalScrollPercentageList: &shared.Parameter{
                Key: sdk.String("libero"),
                List: []shared.Parameter{
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumInteger.ToPointer(),
                Value: sdk.String("explicabo"),
            },
            Interval: &shared.Parameter{
                Key: sdk.String("provident"),
                List: []shared.Parameter{
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                Value: sdk.String("odio"),
            },
            IntervalSeconds: &shared.Parameter{
                Key: sdk.String("eius"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumList.ToPointer(),
                Value: sdk.String("fuga"),
            },
            Limit: &shared.Parameter{
                Key: sdk.String("reprehenderit"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumInteger.ToPointer(),
                Value: sdk.String("eum"),
            },
            MaxTimerLengthSeconds: &shared.Parameter{
                Key: sdk.String("suscipit"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumList.ToPointer(),
                Value: sdk.String("quisquam"),
            },
            Name: sdk.String("Angela Olson"),
            Parameter: []shared.Parameter{
                shared.Parameter{
                    Key: sdk.String("illum"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumInteger.ToPointer(),
                    Value: sdk.String("eos"),
                },
                shared.Parameter{
                    Key: sdk.String("voluptas"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                    Value: sdk.String("tempora"),
                },
                shared.Parameter{
                    Key: sdk.String("debitis"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumInteger.ToPointer(),
                    Value: sdk.String("quo"),
                },
                shared.Parameter{
                    Key: sdk.String("esse"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                    Value: sdk.String("quod"),
                },
            },
            ParentFolderID: sdk.String("dignissimos"),
            Selector: &shared.Parameter{
                Key: sdk.String("inventore"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                Value: sdk.String("aliquam"),
            },
            TotalTimeMinMilliseconds: &shared.Parameter{
                Key: sdk.String("odio"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                Value: sdk.String("dolores"),
            },
            TriggerID: sdk.String("deserunt"),
            Type: shared.TriggerTypeEnumJsError.ToPointer(),
            UniqueTriggerID: &shared.Parameter{
                Key: sdk.String("accusantium"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumList.ToPointer(),
                Value: sdk.String("praesentium"),
            },
            VerticalScrollPercentageList: &shared.Parameter{
                Key: sdk.String("consequuntur"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumMap.ToPointer(),
                Value: sdk.String("mollitia"),
            },
            VisibilitySelector: &shared.Parameter{
                Key: sdk.String("incidunt"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                Value: sdk.String("nisi"),
            },
            VisiblePercentageMax: &shared.Parameter{
                Key: sdk.String("fugit"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumInteger.ToPointer(),
                Value: sdk.String("explicabo"),
            },
            VisiblePercentageMin: &shared.Parameter{
                Key: sdk.String("saepe"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                Value: sdk.String("esse"),
            },
            WaitForTags: &shared.Parameter{
                Key: sdk.String("eveniet"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumList.ToPointer(),
                Value: sdk.String("quod"),
            },
            WaitForTagsTimeout: &shared.Parameter{
                Key: sdk.String("nam"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                Value: sdk.String("saepe"),
            },
        },
        AccessToken: sdk.String("vel"),
        AccountID: "harum",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("rerum"),
        ContainerID: "occaecati",
        Fields: sdk.String("minima"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("eligendi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.TagmanagerAccountsContainersTriggersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Trigger != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersTriggersDelete

Deletes a GTM Trigger.

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
    res, err := s.Accounts.TagmanagerAccountsContainersTriggersDelete(ctx, operations.TagmanagerAccountsContainersTriggersDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        AccountID: "consequuntur",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("minus"),
        ContainerID: "quaerat",
        Fields: sdk.String("sapiente"),
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        TriggerID: "provident",
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("nulla"),
    }, operations.TagmanagerAccountsContainersTriggersDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagmanagerAccountsContainersTriggersGet

Gets a GTM Trigger.

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
    res, err := s.Accounts.TagmanagerAccountsContainersTriggersGet(ctx, operations.TagmanagerAccountsContainersTriggersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        AccountID: "quasi",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("error"),
        ContainerID: "sint",
        Fields: sdk.String("pariatur"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("quia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eveniet"),
        TriggerID: "asperiores",
        UploadType: sdk.String("facere"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.TagmanagerAccountsContainersTriggersGetSecurity{
        Option1: &operations.TagmanagerAccountsContainersTriggersGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Trigger != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersTriggersList

Lists all GTM Triggers of a Container.

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
    res, err := s.Accounts.TagmanagerAccountsContainersTriggersList(ctx, operations.TagmanagerAccountsContainersTriggersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quasi"),
        AccountID: "similique",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        ContainerID: "tenetur",
        Fields: sdk.String("quae"),
        Key: sdk.String("earum"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("libero"),
    }, operations.TagmanagerAccountsContainersTriggersListSecurity{
        Option1: &operations.TagmanagerAccountsContainersTriggersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTriggersResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersTriggersUpdate

Updates a GTM Trigger.

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
    res, err := s.Accounts.TagmanagerAccountsContainersTriggersUpdate(ctx, operations.TagmanagerAccountsContainersTriggersUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Trigger: &shared.Trigger{
            AccountID: sdk.String("soluta"),
            AutoEventFilter: []shared.Condition{
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("sapiente"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumList.ToPointer(),
                            Value: sdk.String("ullam"),
                        },
                        shared.Parameter{
                            Key: sdk.String("nisi"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumInteger.ToPointer(),
                            Value: sdk.String("quibusdam"),
                        },
                    },
                    Type: shared.ConditionTypeEnumMatchRegex.ToPointer(),
                },
            },
            CheckValidation: &shared.Parameter{
                Key: sdk.String("deleniti"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                Value: sdk.String("omnis"),
            },
            ContainerID: sdk.String("tenetur"),
            ContinuousTimeMinMilliseconds: &shared.Parameter{
                Key: sdk.String("quasi"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumList.ToPointer(),
                Value: sdk.String("ipsa"),
            },
            CustomEventFilter: []shared.Condition{
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("consectetur"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                            Value: sdk.String("accusantium"),
                        },
                    },
                    Type: shared.ConditionTypeEnumGreater.ToPointer(),
                },
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("laudantium"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                            Value: sdk.String("corrupti"),
                        },
                    },
                    Type: shared.ConditionTypeEnumStartsWith.ToPointer(),
                },
            },
            EventName: &shared.Parameter{
                Key: sdk.String("voluptatem"),
                List: []shared.Parameter{
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumInteger.ToPointer(),
                Value: sdk.String("impedit"),
            },
            Filter: []shared.Condition{
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("aut"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                            Value: sdk.String("natus"),
                        },
                        shared.Parameter{
                            Key: sdk.String("velit"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                            Value: sdk.String("aperiam"),
                        },
                    },
                    Type: shared.ConditionTypeEnumMatchRegex.ToPointer(),
                },
            },
            Fingerprint: sdk.String("quaerat"),
            HorizontalScrollPercentageList: &shared.Parameter{
                Key: sdk.String("consequuntur"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                Value: sdk.String("dignissimos"),
            },
            Interval: &shared.Parameter{
                Key: sdk.String("officia"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                Value: sdk.String("quaerat"),
            },
            IntervalSeconds: &shared.Parameter{
                Key: sdk.String("porro"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                Value: sdk.String("adipisci"),
            },
            Limit: &shared.Parameter{
                Key: sdk.String("fuga"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumInteger.ToPointer(),
                Value: sdk.String("culpa"),
            },
            MaxTimerLengthSeconds: &shared.Parameter{
                Key: sdk.String("est"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                Value: sdk.String("vel"),
            },
            Name: sdk.String("Billie Keebler"),
            Parameter: []shared.Parameter{
                shared.Parameter{
                    Key: sdk.String("cum"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                    Value: sdk.String("reiciendis"),
                },
                shared.Parameter{
                    Key: sdk.String("assumenda"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                    Value: sdk.String("aperiam"),
                },
                shared.Parameter{
                    Key: sdk.String("cum"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                    Value: sdk.String("earum"),
                },
            },
            ParentFolderID: sdk.String("facere"),
            Selector: &shared.Parameter{
                Key: sdk.String("numquam"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                Value: sdk.String("quidem"),
            },
            TotalTimeMinMilliseconds: &shared.Parameter{
                Key: sdk.String("saepe"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                Value: sdk.String("asperiores"),
            },
            TriggerID: sdk.String("adipisci"),
            Type: shared.TriggerTypeEnumTriggerGroup.ToPointer(),
            UniqueTriggerID: &shared.Parameter{
                Key: sdk.String("amet"),
                List: []shared.Parameter{
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                Value: sdk.String("debitis"),
            },
            VerticalScrollPercentageList: &shared.Parameter{
                Key: sdk.String("consectetur"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                Value: sdk.String("ipsa"),
            },
            VisibilitySelector: &shared.Parameter{
                Key: sdk.String("voluptates"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                Value: sdk.String("similique"),
            },
            VisiblePercentageMax: &shared.Parameter{
                Key: sdk.String("tempora"),
                List: []shared.Parameter{
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                Value: sdk.String("voluptas"),
            },
            VisiblePercentageMin: &shared.Parameter{
                Key: sdk.String("minima"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumInteger.ToPointer(),
                Value: sdk.String("minus"),
            },
            WaitForTags: &shared.Parameter{
                Key: sdk.String("dolores"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                Value: sdk.String("aliquam"),
            },
            WaitForTagsTimeout: &shared.Parameter{
                Key: sdk.String("officiis"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumInteger.ToPointer(),
                Value: sdk.String("cum"),
            },
        },
        AccessToken: sdk.String("blanditiis"),
        AccountID: "quas",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nesciunt"),
        ContainerID: "culpa",
        Fields: sdk.String("corrupti"),
        Fingerprint: sdk.String("pariatur"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("exercitationem"),
        TriggerID: "nobis",
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("rerum"),
    }, operations.TagmanagerAccountsContainersTriggersUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Trigger != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersUpdate

Updates a Container.

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
    res, err := s.Accounts.TagmanagerAccountsContainersUpdate(ctx, operations.TagmanagerAccountsContainersUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Container: &shared.Container{
            AccountID: sdk.String("reiciendis"),
            ContainerID: sdk.String("explicabo"),
            DomainName: []string{
                "facilis",
                "voluptate",
                "expedita",
                "ab",
            },
            EnabledBuiltInVariable: []shared.ContainerEnabledBuiltInVariableEnum{
                shared.ContainerEnabledBuiltInVariableEnumDebugMode,
                shared.ContainerEnabledBuiltInVariableEnumFirebaseEventParameterCampaignClickTimestamp,
                shared.ContainerEnabledBuiltInVariableEnumFormTarget,
            },
            Fingerprint: sdk.String("in"),
            Name: sdk.String("Melody Cole"),
            Notes: sdk.String("architecto"),
            PublicID: sdk.String("suscipit"),
            TimeZoneCountryID: sdk.String("sapiente"),
            TimeZoneID: sdk.String("debitis"),
            UsageContext: []shared.ContainerUsageContextEnum{
                shared.ContainerUsageContextEnumAmp,
            },
        },
        AccessToken: sdk.String("perferendis"),
        AccountID: "corrupti",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("incidunt"),
        ContainerID: "sed",
        Fields: sdk.String("provident"),
        Fingerprint: sdk.String("eius"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("quos"),
    }, operations.TagmanagerAccountsContainersUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Container != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersVariablesCreate

Creates a GTM Variable.

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
    res, err := s.Accounts.TagmanagerAccountsContainersVariablesCreate(ctx, operations.TagmanagerAccountsContainersVariablesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Variable: &shared.Variable{
            AccountID: sdk.String("tempora"),
            ContainerID: sdk.String("tempora"),
            DisablingTriggerID: []string{
                "reiciendis",
                "ex",
            },
            EnablingTriggerID: []string{
                "non",
            },
            Fingerprint: sdk.String("officiis"),
            Name: sdk.String("Malcolm Hagenes"),
            Notes: sdk.String("debitis"),
            Parameter: []shared.Parameter{
                shared.Parameter{
                    Key: sdk.String("sit"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                    Value: sdk.String("minima"),
                },
                shared.Parameter{
                    Key: sdk.String("recusandae"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumInteger.ToPointer(),
                    Value: sdk.String("aperiam"),
                },
                shared.Parameter{
                    Key: sdk.String("saepe"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumList.ToPointer(),
                    Value: sdk.String("officiis"),
                },
            },
            ParentFolderID: sdk.String("beatae"),
            ScheduleEndMs: sdk.String("laudantium"),
            ScheduleStartMs: sdk.String("exercitationem"),
            Type: sdk.String("praesentium"),
            VariableID: sdk.String("cum"),
        },
        AccessToken: sdk.String("laboriosam"),
        AccountID: "dolorum",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        ContainerID: "hic",
        Fields: sdk.String("expedita"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("neque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("officia"),
    }, operations.TagmanagerAccountsContainersVariablesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Variable != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersVariablesDelete

Deletes a GTM Variable.

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
    res, err := s.Accounts.TagmanagerAccountsContainersVariablesDelete(ctx, operations.TagmanagerAccountsContainersVariablesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("corrupti"),
        AccountID: "accusamus",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("atque"),
        ContainerID: "fugit",
        Fields: sdk.String("ut"),
        Key: sdk.String("fugiat"),
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("magnam"),
        VariableID: "consequatur",
    }, operations.TagmanagerAccountsContainersVariablesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagmanagerAccountsContainersVariablesGet

Gets a GTM Variable.

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
    res, err := s.Accounts.TagmanagerAccountsContainersVariablesGet(ctx, operations.TagmanagerAccountsContainersVariablesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        AccountID: "sit",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quas"),
        ContainerID: "repudiandae",
        Fields: sdk.String("corporis"),
        Key: sdk.String("et"),
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ex"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("sit"),
        VariableID: "vel",
    }, operations.TagmanagerAccountsContainersVariablesGetSecurity{
        Option1: &operations.TagmanagerAccountsContainersVariablesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Variable != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersVariablesList

Lists all GTM Variables of a Container.

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
    res, err := s.Accounts.TagmanagerAccountsContainersVariablesList(ctx, operations.TagmanagerAccountsContainersVariablesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("saepe"),
        AccountID: "error",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("incidunt"),
        ContainerID: "reiciendis",
        Fields: sdk.String("dolorem"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("labore"),
    }, operations.TagmanagerAccountsContainersVariablesListSecurity{
        Option1: &operations.TagmanagerAccountsContainersVariablesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVariablesResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersVariablesUpdate

Updates a GTM Variable.

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
    res, err := s.Accounts.TagmanagerAccountsContainersVariablesUpdate(ctx, operations.TagmanagerAccountsContainersVariablesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Variable: &shared.Variable{
            AccountID: sdk.String("atque"),
            ContainerID: sdk.String("laborum"),
            DisablingTriggerID: []string{
                "tenetur",
                "laboriosam",
                "alias",
            },
            EnablingTriggerID: []string{
                "deserunt",
            },
            Fingerprint: sdk.String("voluptate"),
            Name: sdk.String("Boyd McKenzie"),
            Notes: sdk.String("voluptates"),
            Parameter: []shared.Parameter{
                shared.Parameter{
                    Key: sdk.String("est"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                    Value: sdk.String("fuga"),
                },
            },
            ParentFolderID: sdk.String("praesentium"),
            ScheduleEndMs: sdk.String("mollitia"),
            ScheduleStartMs: sdk.String("veniam"),
            Type: sdk.String("voluptatem"),
            VariableID: sdk.String("quisquam"),
        },
        AccessToken: sdk.String("repudiandae"),
        AccountID: "quasi",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        ContainerID: "asperiores",
        Fields: sdk.String("totam"),
        Fingerprint: sdk.String("suscipit"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("amet"),
        VariableID: "assumenda",
    }, operations.TagmanagerAccountsContainersVariablesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Variable != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersVersionsCreate

Creates a Container Version.

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
    res, err := s.Accounts.TagmanagerAccountsContainersVersionsCreate(ctx, operations.TagmanagerAccountsContainersVersionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateContainerVersionRequestVersionOptions: &shared.CreateContainerVersionRequestVersionOptions{
            Name: sdk.String("Evan Torphy"),
            Notes: sdk.String("natus"),
            QuickPreview: sdk.Bool(false),
        },
        AccessToken: sdk.String("minima"),
        AccountID: "aspernatur",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        ContainerID: "corrupti",
        Fields: sdk.String("at"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("atque"),
    }, operations.TagmanagerAccountsContainersVersionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateContainerVersionResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersVersionsDelete

Deletes a Container Version.

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
    res, err := s.Accounts.TagmanagerAccountsContainersVersionsDelete(ctx, operations.TagmanagerAccountsContainersVersionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sunt"),
        AccountID: "recusandae",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repellendus"),
        ContainerID: "labore",
        ContainerVersionID: "reiciendis",
        Fields: sdk.String("doloremque"),
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.TagmanagerAccountsContainersVersionsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagmanagerAccountsContainersVersionsGet

Gets a Container Version.

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
    res, err := s.Accounts.TagmanagerAccountsContainersVersionsGet(ctx, operations.TagmanagerAccountsContainersVersionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laboriosam"),
        AccountID: "velit",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestias"),
        ContainerID: "magnam",
        ContainerVersionID: "saepe",
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("officiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perspiciatis"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.TagmanagerAccountsContainersVersionsGetSecurity{
        Option1: &operations.TagmanagerAccountsContainersVersionsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainerVersion != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersVersionsList

Lists all Container Versions of a GTM Container.

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
    res, err := s.Accounts.TagmanagerAccountsContainersVersionsList(ctx, operations.TagmanagerAccountsContainersVersionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        AccountID: "consequuntur",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("id"),
        ContainerID: "quis",
        Fields: sdk.String("reprehenderit"),
        Headers: sdk.Bool(false),
        IncludeDeleted: sdk.Bool(false),
        Key: sdk.String("error"),
        OauthToken: sdk.String("illo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("eveniet"),
    }, operations.TagmanagerAccountsContainersVersionsListSecurity{
        Option1: &operations.TagmanagerAccountsContainersVersionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContainerVersionsResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersVersionsPublish

Publishes a Container Version.

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
    res, err := s.Accounts.TagmanagerAccountsContainersVersionsPublish(ctx, operations.TagmanagerAccountsContainersVersionsPublishRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vero"),
        AccountID: "doloremque",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        ContainerID: "totam",
        ContainerVersionID: "quae",
        Fields: sdk.String("molestiae"),
        Fingerprint: sdk.String("eveniet"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("ratione"),
    }, operations.TagmanagerAccountsContainersVersionsPublishSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublishContainerVersionResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersVersionsRestore

Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).

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
    res, err := s.Accounts.TagmanagerAccountsContainersVersionsRestore(ctx, operations.TagmanagerAccountsContainersVersionsRestoreRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        AccountID: "voluptatum",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquam"),
        ContainerID: "ad",
        ContainerVersionID: "repellat",
        Fields: sdk.String("alias"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.TagmanagerAccountsContainersVersionsRestoreSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainerVersion != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersVersionsUndelete

Undeletes a Container Version.

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
    res, err := s.Accounts.TagmanagerAccountsContainersVersionsUndelete(ctx, operations.TagmanagerAccountsContainersVersionsUndeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maiores"),
        AccountID: "reiciendis",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("id"),
        ContainerID: "minima",
        ContainerVersionID: "dolore",
        Fields: sdk.String("dolorum"),
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.TagmanagerAccountsContainersVersionsUndeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainerVersion != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersVersionsUpdate

Updates a Container Version.

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
    res, err := s.Accounts.TagmanagerAccountsContainersVersionsUpdate(ctx, operations.TagmanagerAccountsContainersVersionsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ContainerVersion: &shared.ContainerVersion{
            AccountID: sdk.String("ex"),
            Container: &shared.Container{
                AccountID: sdk.String("ut"),
                ContainerID: sdk.String("culpa"),
                DomainName: []string{
                    "debitis",
                },
                EnabledBuiltInVariable: []shared.ContainerEnabledBuiltInVariableEnum{
                    shared.ContainerEnabledBuiltInVariableEnumHTMLID,
                    shared.ContainerEnabledBuiltInVariableEnumOsVersion,
                    shared.ContainerEnabledBuiltInVariableEnumVideoCurrentTime,
                },
                Fingerprint: sdk.String("esse"),
                Name: sdk.String("Alvin Kemmer"),
                Notes: sdk.String("aspernatur"),
                PublicID: sdk.String("ullam"),
                TimeZoneCountryID: sdk.String("quasi"),
                TimeZoneID: sdk.String("animi"),
                UsageContext: []shared.ContainerUsageContextEnum{
                    shared.ContainerUsageContextEnumAndroidSdk5,
                    shared.ContainerUsageContextEnumAndroidSdk5,
                },
            },
            ContainerID: sdk.String("possimus"),
            ContainerVersionID: sdk.String("animi"),
            Deleted: sdk.Bool(false),
            Fingerprint: sdk.String("ex"),
            Folder: []shared.Folder{
                shared.Folder{
                    AccountID: sdk.String("accusantium"),
                    ContainerID: sdk.String("repellat"),
                    Fingerprint: sdk.String("doloribus"),
                    FolderID: sdk.String("ullam"),
                    Name: sdk.String("Antoinette Wehner"),
                },
                shared.Folder{
                    AccountID: sdk.String("placeat"),
                    ContainerID: sdk.String("modi"),
                    Fingerprint: sdk.String("voluptatibus"),
                    FolderID: sdk.String("molestias"),
                    Name: sdk.String("Miss Timmy Runolfsdottir"),
                },
            },
            Macro: []shared.Macro{
                shared.Macro{
                    AccountID: sdk.String("inventore"),
                    ContainerID: sdk.String("fugit"),
                    DisablingRuleID: []string{
                        "quae",
                        "perferendis",
                        "velit",
                        "aspernatur",
                    },
                    EnablingRuleID: []string{
                        "eius",
                        "rem",
                    },
                    Fingerprint: sdk.String("at"),
                    MacroID: sdk.String("impedit"),
                    Name: sdk.String("Mrs. Miranda Kemmer V"),
                    Notes: sdk.String("provident"),
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("soluta"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                            Value: sdk.String("earum"),
                        },
                        shared.Parameter{
                            Key: sdk.String("perspiciatis"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                            Value: sdk.String("porro"),
                        },
                        shared.Parameter{
                            Key: sdk.String("suscipit"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                            Value: sdk.String("fuga"),
                        },
                        shared.Parameter{
                            Key: sdk.String("ratione"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                            Value: sdk.String("consequatur"),
                        },
                    },
                    ParentFolderID: sdk.String("quasi"),
                    ScheduleEndMs: sdk.String("et"),
                    ScheduleStartMs: sdk.String("ducimus"),
                    Type: sdk.String("natus"),
                },
                shared.Macro{
                    AccountID: sdk.String("occaecati"),
                    ContainerID: sdk.String("suscipit"),
                    DisablingRuleID: []string{
                        "quasi",
                    },
                    EnablingRuleID: []string{
                        "doloribus",
                    },
                    Fingerprint: sdk.String("nulla"),
                    MacroID: sdk.String("necessitatibus"),
                    Name: sdk.String("Anita Kovacek IV"),
                    Notes: sdk.String("esse"),
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("maiores"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                            Value: sdk.String("fugiat"),
                        },
                        shared.Parameter{
                            Key: sdk.String("doloremque"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumInteger.ToPointer(),
                            Value: sdk.String("esse"),
                        },
                        shared.Parameter{
                            Key: sdk.String("ex"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                            Value: sdk.String("laborum"),
                        },
                    },
                    ParentFolderID: sdk.String("sunt"),
                    ScheduleEndMs: sdk.String("nostrum"),
                    ScheduleStartMs: sdk.String("fugiat"),
                    Type: sdk.String("expedita"),
                },
            },
            Name: sdk.String("Brandi Homenick III"),
            Notes: sdk.String("voluptas"),
            Rule: []shared.Rule{
                shared.Rule{
                    AccountID: sdk.String("id"),
                    Condition: []shared.Condition{
                        shared.Condition{
                            Parameter: []shared.Parameter{
                                shared.Parameter{
                                    Key: sdk.String("possimus"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumMap.ToPointer(),
                                    Value: sdk.String("libero"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("ad"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                                    Value: sdk.String("repellendus"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("ex"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumInteger.ToPointer(),
                                    Value: sdk.String("ad"),
                                },
                            },
                            Type: shared.ConditionTypeEnumLess.ToPointer(),
                        },
                    },
                    ContainerID: sdk.String("voluptatem"),
                    Fingerprint: sdk.String("molestias"),
                    Name: sdk.String("Gene Brekke"),
                    Notes: sdk.String("veritatis"),
                    RuleID: sdk.String("rerum"),
                },
                shared.Rule{
                    AccountID: sdk.String("est"),
                    Condition: []shared.Condition{
                        shared.Condition{
                            Parameter: []shared.Parameter{
                                shared.Parameter{
                                    Key: sdk.String("sapiente"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumMap.ToPointer(),
                                    Value: sdk.String("pariatur"),
                                },
                            },
                            Type: shared.ConditionTypeEnumCSSSelector.ToPointer(),
                        },
                        shared.Condition{
                            Parameter: []shared.Parameter{
                                shared.Parameter{
                                    Key: sdk.String("alias"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                                    Value: sdk.String("sapiente"),
                                },
                            },
                            Type: shared.ConditionTypeEnumGreater.ToPointer(),
                        },
                        shared.Condition{
                            Parameter: []shared.Parameter{
                                shared.Parameter{
                                    Key: sdk.String("nemo"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                                    Value: sdk.String("perferendis"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("illum"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                                    Value: sdk.String("nam"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("ipsam"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                                    Value: sdk.String("inventore"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("deleniti"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumInteger.ToPointer(),
                                    Value: sdk.String("consequatur"),
                                },
                            },
                            Type: shared.ConditionTypeEnumContains.ToPointer(),
                        },
                    },
                    ContainerID: sdk.String("sit"),
                    Fingerprint: sdk.String("modi"),
                    Name: sdk.String("Mrs. Rebecca Larkin"),
                    Notes: sdk.String("ipsam"),
                    RuleID: sdk.String("consequuntur"),
                },
                shared.Rule{
                    AccountID: sdk.String("ipsa"),
                    Condition: []shared.Condition{
                        shared.Condition{
                            Parameter: []shared.Parameter{
                                shared.Parameter{
                                    Key: sdk.String("impedit"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                                    Value: sdk.String("sed"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("veniam"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumList.ToPointer(),
                                    Value: sdk.String("vel"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("voluptatum"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                                    Value: sdk.String("porro"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("autem"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                                    Value: sdk.String("consequuntur"),
                                },
                            },
                            Type: shared.ConditionTypeEnumEquals.ToPointer(),
                        },
                        shared.Condition{
                            Parameter: []shared.Parameter{
                                shared.Parameter{
                                    Key: sdk.String("necessitatibus"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                                    Value: sdk.String("vero"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("est"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                                    Value: sdk.String("repudiandae"),
                                },
                            },
                            Type: shared.ConditionTypeEnumLessOrEquals.ToPointer(),
                        },
                        shared.Condition{
                            Parameter: []shared.Parameter{
                                shared.Parameter{
                                    Key: sdk.String("nemo"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumMap.ToPointer(),
                                    Value: sdk.String("voluptas"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("numquam"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumInteger.ToPointer(),
                                    Value: sdk.String("aspernatur"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("ducimus"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumList.ToPointer(),
                                    Value: sdk.String("incidunt"),
                                },
                            },
                            Type: shared.ConditionTypeEnumContains.ToPointer(),
                        },
                    },
                    ContainerID: sdk.String("rem"),
                    Fingerprint: sdk.String("fugiat"),
                    Name: sdk.String("Elsie Cronin V"),
                    Notes: sdk.String("reiciendis"),
                    RuleID: sdk.String("soluta"),
                },
            },
            Tag: []shared.Tag{
                shared.Tag{
                    AccountID: sdk.String("omnis"),
                    BlockingRuleID: []string{
                        "occaecati",
                    },
                    BlockingTriggerID: []string{
                        "magni",
                        "inventore",
                        "fuga",
                    },
                    ContainerID: sdk.String("accusamus"),
                    Fingerprint: sdk.String("voluptatibus"),
                    FiringRuleID: []string{
                        "omnis",
                        "delectus",
                        "minima",
                    },
                    FiringTriggerID: []string{
                        "maxime",
                        "magnam",
                        "temporibus",
                    },
                    LiveOnly: sdk.Bool(false),
                    Name: sdk.String("Leslie Waters"),
                    Notes: sdk.String("earum"),
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("nam"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                            Value: sdk.String("vel"),
                        },
                        shared.Parameter{
                            Key: sdk.String("alias"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                            Value: sdk.String("enim"),
                        },
                    },
                    ParentFolderID: sdk.String("sint"),
                    Paused: sdk.Bool(false),
                    Priority: &shared.Parameter{
                        Key: sdk.String("nulla"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                        Value: sdk.String("reprehenderit"),
                    },
                    ScheduleEndMs: sdk.String("est"),
                    ScheduleStartMs: sdk.String("quis"),
                    SetupTag: []shared.SetupTag{
                        shared.SetupTag{
                            StopOnSetupFailure: sdk.Bool(false),
                            TagName: sdk.String("accusamus"),
                        },
                        shared.SetupTag{
                            StopOnSetupFailure: sdk.Bool(false),
                            TagName: sdk.String("impedit"),
                        },
                        shared.SetupTag{
                            StopOnSetupFailure: sdk.Bool(false),
                            TagName: sdk.String("hic"),
                        },
                    },
                    TagFiringOption: shared.TagTagFiringOptionEnumOncePerLoad.ToPointer(),
                    TagID: sdk.String("asperiores"),
                    TeardownTag: []shared.TeardownTag{
                        shared.TeardownTag{
                            StopTeardownOnFailure: sdk.Bool(false),
                            TagName: sdk.String("voluptas"),
                        },
                        shared.TeardownTag{
                            StopTeardownOnFailure: sdk.Bool(false),
                            TagName: sdk.String("debitis"),
                        },
                    },
                    Type: sdk.String("delectus"),
                },
            },
            Trigger: []shared.Trigger{
                shared.Trigger{
                    AccountID: sdk.String("minus"),
                    AutoEventFilter: []shared.Condition{
                        shared.Condition{
                            Parameter: []shared.Parameter{
                                shared.Parameter{
                                    Key: sdk.String("consectetur"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumInteger.ToPointer(),
                                    Value: sdk.String("impedit"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("magni"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                                    Value: sdk.String("dolore"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("iusto"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumList.ToPointer(),
                                    Value: sdk.String("neque"),
                                },
                            },
                            Type: shared.ConditionTypeEnumLessOrEquals.ToPointer(),
                        },
                        shared.Condition{
                            Parameter: []shared.Parameter{
                                shared.Parameter{
                                    Key: sdk.String("quibusdam"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                                    Value: sdk.String("vel"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("magnam"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                                    Value: sdk.String("libero"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("architecto"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                                    Value: sdk.String("aliquam"),
                                },
                            },
                            Type: shared.ConditionTypeEnumStartsWith.ToPointer(),
                        },
                        shared.Condition{
                            Parameter: []shared.Parameter{
                                shared.Parameter{
                                    Key: sdk.String("accusantium"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                                    Value: sdk.String("vero"),
                                },
                            },
                            Type: shared.ConditionTypeEnumGreaterOrEquals.ToPointer(),
                        },
                    },
                    CheckValidation: &shared.Parameter{
                        Key: sdk.String("eum"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumMap.ToPointer(),
                        Value: sdk.String("earum"),
                    },
                    ContainerID: sdk.String("dicta"),
                    ContinuousTimeMinMilliseconds: &shared.Parameter{
                        Key: sdk.String("impedit"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                        Value: sdk.String("alias"),
                    },
                    CustomEventFilter: []shared.Condition{
                        shared.Condition{
                            Parameter: []shared.Parameter{
                                shared.Parameter{
                                    Key: sdk.String("velit"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumInteger.ToPointer(),
                                    Value: sdk.String("iusto"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("sit"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumMap.ToPointer(),
                                    Value: sdk.String("recusandae"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("ea"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumMap.ToPointer(),
                                    Value: sdk.String("placeat"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("perspiciatis"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                                    Value: sdk.String("voluptate"),
                                },
                            },
                            Type: shared.ConditionTypeEnumEndsWith.ToPointer(),
                        },
                        shared.Condition{
                            Parameter: []shared.Parameter{
                                shared.Parameter{
                                    Key: sdk.String("necessitatibus"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                                    Value: sdk.String("corporis"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("est"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                                    Value: sdk.String("veritatis"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("vero"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                                    Value: sdk.String("dolorem"),
                                },
                            },
                            Type: shared.ConditionTypeEnumEndsWith.ToPointer(),
                        },
                    },
                    EventName: &shared.Parameter{
                        Key: sdk.String("qui"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                        Value: sdk.String("soluta"),
                    },
                    Filter: []shared.Condition{
                        shared.Condition{
                            Parameter: []shared.Parameter{
                                shared.Parameter{
                                    Key: sdk.String("dolorum"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                                    Value: sdk.String("magni"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("vel"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumInteger.ToPointer(),
                                    Value: sdk.String("neque"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("exercitationem"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumInteger.ToPointer(),
                                    Value: sdk.String("unde"),
                                },
                            },
                            Type: shared.ConditionTypeEnumCSSSelector.ToPointer(),
                        },
                        shared.Condition{
                            Parameter: []shared.Parameter{
                                shared.Parameter{
                                    Key: sdk.String("maxime"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                                    Value: sdk.String("omnis"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("libero"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                                    Value: sdk.String("fugiat"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("officia"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                                    Value: sdk.String("iusto"),
                                },
                            },
                            Type: shared.ConditionTypeEnumEquals.ToPointer(),
                        },
                        shared.Condition{
                            Parameter: []shared.Parameter{
                                shared.Parameter{
                                    Key: sdk.String("inventore"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                                    Value: sdk.String("eligendi"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("distinctio"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumList.ToPointer(),
                                    Value: sdk.String("dolores"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("assumenda"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                                    Value: sdk.String("corrupti"),
                                },
                                shared.Parameter{
                                    Key: sdk.String("molestiae"),
                                    List: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Map: []shared.Parameter{
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                        shared.Parameter{},
                                    },
                                    Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                                    Value: sdk.String("tempore"),
                                },
                            },
                            Type: shared.ConditionTypeEnumGreaterOrEquals.ToPointer(),
                        },
                    },
                    Fingerprint: sdk.String("ea"),
                    HorizontalScrollPercentageList: &shared.Parameter{
                        Key: sdk.String("autem"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumList.ToPointer(),
                        Value: sdk.String("corporis"),
                    },
                    Interval: &shared.Parameter{
                        Key: sdk.String("officiis"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                        Value: sdk.String("alias"),
                    },
                    IntervalSeconds: &shared.Parameter{
                        Key: sdk.String("quia"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                        Value: sdk.String("accusantium"),
                    },
                    Limit: &shared.Parameter{
                        Key: sdk.String("expedita"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                        Value: sdk.String("odio"),
                    },
                    MaxTimerLengthSeconds: &shared.Parameter{
                        Key: sdk.String("praesentium"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                        Value: sdk.String("error"),
                    },
                    Name: sdk.String("Jeff Walker"),
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("quis"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumList.ToPointer(),
                            Value: sdk.String("delectus"),
                        },
                        shared.Parameter{
                            Key: sdk.String("cupiditate"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumInteger.ToPointer(),
                            Value: sdk.String("nesciunt"),
                        },
                        shared.Parameter{
                            Key: sdk.String("at"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                            Value: sdk.String("necessitatibus"),
                        },
                    },
                    ParentFolderID: sdk.String("corporis"),
                    Selector: &shared.Parameter{
                        Key: sdk.String("qui"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumMap.ToPointer(),
                        Value: sdk.String("minima"),
                    },
                    TotalTimeMinMilliseconds: &shared.Parameter{
                        Key: sdk.String("placeat"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumList.ToPointer(),
                        Value: sdk.String("minus"),
                    },
                    TriggerID: sdk.String("eum"),
                    Type: shared.TriggerTypeEnumAlways.ToPointer(),
                    UniqueTriggerID: &shared.Parameter{
                        Key: sdk.String("corporis"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                        Value: sdk.String("tempore"),
                    },
                    VerticalScrollPercentageList: &shared.Parameter{
                        Key: sdk.String("aperiam"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                        Value: sdk.String("totam"),
                    },
                    VisibilitySelector: &shared.Parameter{
                        Key: sdk.String("occaecati"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumInteger.ToPointer(),
                        Value: sdk.String("minus"),
                    },
                    VisiblePercentageMax: &shared.Parameter{
                        Key: sdk.String("fuga"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                        Value: sdk.String("delectus"),
                    },
                    VisiblePercentageMin: &shared.Parameter{
                        Key: sdk.String("tempore"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                        Value: sdk.String("pariatur"),
                    },
                    WaitForTags: &shared.Parameter{
                        Key: sdk.String("nemo"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumList.ToPointer(),
                        Value: sdk.String("minima"),
                    },
                    WaitForTagsTimeout: &shared.Parameter{
                        Key: sdk.String("in"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumInteger.ToPointer(),
                        Value: sdk.String("error"),
                    },
                },
            },
            Variable: []shared.Variable{
                shared.Variable{
                    AccountID: sdk.String("ducimus"),
                    ContainerID: sdk.String("voluptate"),
                    DisablingTriggerID: []string{
                        "itaque",
                        "similique",
                        "optio",
                        "ex",
                    },
                    EnablingTriggerID: []string{
                        "commodi",
                        "officiis",
                    },
                    Fingerprint: sdk.String("placeat"),
                    Name: sdk.String("Jorge Kohler"),
                    Notes: sdk.String("ipsa"),
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("vero"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                            Value: sdk.String("dicta"),
                        },
                        shared.Parameter{
                            Key: sdk.String("earum"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumInteger.ToPointer(),
                            Value: sdk.String("nam"),
                        },
                        shared.Parameter{
                            Key: sdk.String("dicta"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                            Value: sdk.String("ipsa"),
                        },
                    },
                    ParentFolderID: sdk.String("ducimus"),
                    ScheduleEndMs: sdk.String("maiores"),
                    ScheduleStartMs: sdk.String("veritatis"),
                    Type: sdk.String("quasi"),
                    VariableID: sdk.String("laboriosam"),
                },
            },
        },
        AccessToken: sdk.String("pariatur"),
        AccountID: "libero",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        ContainerID: "nemo",
        ContainerVersionID: "aliquam",
        Fields: sdk.String("nostrum"),
        Fingerprint: sdk.String("doloribus"),
        Key: sdk.String("eligendi"),
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("animi"),
    }, operations.TagmanagerAccountsContainersVersionsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainerVersion != nil {
        // handle response
    }
}
```

## TagmanagerAccountsGet

Gets a GTM Account.

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
    res, err := s.Accounts.TagmanagerAccountsGet(ctx, operations.TagmanagerAccountsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("totam"),
        AccountID: "molestias",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eaque"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.TagmanagerAccountsGetSecurity{
        Option1: &operations.TagmanagerAccountsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## TagmanagerAccountsList

Lists all GTM Accounts that a user has access to.

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
    res, err := s.Accounts.TagmanagerAccountsList(ctx, operations.TagmanagerAccountsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.TagmanagerAccountsListSecurity{
        Option1: &operations.TagmanagerAccountsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountsResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsPermissionsCreate

Creates a user's Account & Container Permissions.

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
    res, err := s.Accounts.TagmanagerAccountsPermissionsCreate(ctx, operations.TagmanagerAccountsPermissionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserAccess: &shared.UserAccess{
            AccountAccess: &shared.AccountAccess{
                Permission: []shared.AccountAccessPermissionEnum{
                    shared.AccountAccessPermissionEnumEdit,
                    shared.AccountAccessPermissionEnumManage,
                },
            },
            AccountID: sdk.String("architecto"),
            ContainerAccess: []shared.ContainerAccess{
                shared.ContainerAccess{
                    ContainerID: sdk.String("molestiae"),
                    Permission: []shared.ContainerAccessPermissionEnum{
                        shared.ContainerAccessPermissionEnumManage,
                        shared.ContainerAccessPermissionEnumEdit,
                        shared.ContainerAccessPermissionEnumEdit,
                        shared.ContainerAccessPermissionEnumEditWorkspace,
                    },
                },
                shared.ContainerAccess{
                    ContainerID: sdk.String("sed"),
                    Permission: []shared.ContainerAccessPermissionEnum{
                        shared.ContainerAccessPermissionEnumEdit,
                        shared.ContainerAccessPermissionEnumRead,
                        shared.ContainerAccessPermissionEnumManage,
                        shared.ContainerAccessPermissionEnumDelete,
                    },
                },
                shared.ContainerAccess{
                    ContainerID: sdk.String("odit"),
                    Permission: []shared.ContainerAccessPermissionEnum{
                        shared.ContainerAccessPermissionEnumEdit,
                        shared.ContainerAccessPermissionEnumPublish,
                        shared.ContainerAccessPermissionEnumRead,
                        shared.ContainerAccessPermissionEnumEdit,
                    },
                },
            },
            EmailAddress: sdk.String("facilis"),
            PermissionID: sdk.String("tempore"),
        },
        AccessToken: sdk.String("nisi"),
        AccountID: "voluptatibus",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("minus"),
    }, operations.TagmanagerAccountsPermissionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserAccess != nil {
        // handle response
    }
}
```

## TagmanagerAccountsPermissionsDelete

Removes a user from the account, revoking access to it and all of its containers.

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
    res, err := s.Accounts.TagmanagerAccountsPermissionsDelete(ctx, operations.TagmanagerAccountsPermissionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        AccountID: "ipsum",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("debitis"),
        PermissionID: "labore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("reprehenderit"),
    }, operations.TagmanagerAccountsPermissionsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagmanagerAccountsPermissionsGet

Gets a user's Account & Container Permissions.

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
    res, err := s.Accounts.TagmanagerAccountsPermissionsGet(ctx, operations.TagmanagerAccountsPermissionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("neque"),
        AccountID: "iusto",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("fugiat"),
        OauthToken: sdk.String("unde"),
        PermissionID: "officiis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ducimus"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.TagmanagerAccountsPermissionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserAccess != nil {
        // handle response
    }
}
```

## TagmanagerAccountsPermissionsList

List all users that have access to the account along with Account and Container Permissions granted to each of them.

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
    res, err := s.Accounts.TagmanagerAccountsPermissionsList(ctx, operations.TagmanagerAccountsPermissionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("porro"),
        AccountID: "vitae",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("ad"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.TagmanagerAccountsPermissionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountUsersResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsPermissionsUpdate

Updates a user's Account & Container Permissions.

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
    res, err := s.Accounts.TagmanagerAccountsPermissionsUpdate(ctx, operations.TagmanagerAccountsPermissionsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserAccess: &shared.UserAccess{
            AccountAccess: &shared.AccountAccess{
                Permission: []shared.AccountAccessPermissionEnum{
                    shared.AccountAccessPermissionEnumRead,
                    shared.AccountAccessPermissionEnumRead,
                    shared.AccountAccessPermissionEnumEdit,
                },
            },
            AccountID: sdk.String("accusamus"),
            ContainerAccess: []shared.ContainerAccess{
                shared.ContainerAccess{
                    ContainerID: sdk.String("tempore"),
                    Permission: []shared.ContainerAccessPermissionEnum{
                        shared.ContainerAccessPermissionEnumEdit,
                        shared.ContainerAccessPermissionEnumEditWorkspace,
                    },
                },
                shared.ContainerAccess{
                    ContainerID: sdk.String("earum"),
                    Permission: []shared.ContainerAccessPermissionEnum{
                        shared.ContainerAccessPermissionEnumDelete,
                        shared.ContainerAccessPermissionEnumPublish,
                    },
                },
                shared.ContainerAccess{
                    ContainerID: sdk.String("repellat"),
                    Permission: []shared.ContainerAccessPermissionEnum{
                        shared.ContainerAccessPermissionEnumEdit,
                        shared.ContainerAccessPermissionEnumPublish,
                        shared.ContainerAccessPermissionEnumDelete,
                        shared.ContainerAccessPermissionEnumRead,
                    },
                },
                shared.ContainerAccess{
                    ContainerID: sdk.String("labore"),
                    Permission: []shared.ContainerAccessPermissionEnum{
                        shared.ContainerAccessPermissionEnumEdit,
                        shared.ContainerAccessPermissionEnumManage,
                        shared.ContainerAccessPermissionEnumDelete,
                        shared.ContainerAccessPermissionEnumDelete,
                    },
                },
            },
            EmailAddress: sdk.String("repudiandae"),
            PermissionID: sdk.String("consequatur"),
        },
        AccessToken: sdk.String("maxime"),
        AccountID: "aspernatur",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("quas"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("repudiandae"),
        PermissionID: "rerum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("vero"),
    }, operations.TagmanagerAccountsPermissionsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserAccess != nil {
        // handle response
    }
}
```

## TagmanagerAccountsUpdate

Updates a GTM Account.

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
    res, err := s.Accounts.TagmanagerAccountsUpdate(ctx, operations.TagmanagerAccountsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Account: &shared.Account{
            AccountID: sdk.String("repellendus"),
            Fingerprint: sdk.String("iure"),
            Name: sdk.String("Gertrude Russel Jr."),
            ShareData: sdk.Bool(false),
        },
        AccessToken: sdk.String("ad"),
        AccountID: "quae",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("praesentium"),
        Fingerprint: sdk.String("quidem"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.TagmanagerAccountsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```
