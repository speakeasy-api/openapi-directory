# Accounts

### Available Operations

* [TagmanagerAccountsContainersCombine](#tagmanageraccountscontainerscombine) - Combines Containers.
* [TagmanagerAccountsContainersCreate](#tagmanageraccountscontainerscreate) - Creates a Container.
* [TagmanagerAccountsContainersDestinationsLink](#tagmanageraccountscontainersdestinationslink) - Adds a Destination to this Container and removes it from the Container to which it is currently linked.
* [TagmanagerAccountsContainersDestinationsList](#tagmanageraccountscontainersdestinationslist) - Lists all Destinations linked to a GTM Container.
* [TagmanagerAccountsContainersEnvironmentsCreate](#tagmanageraccountscontainersenvironmentscreate) - Creates a GTM Environment.
* [TagmanagerAccountsContainersEnvironmentsList](#tagmanageraccountscontainersenvironmentslist) - Lists all GTM Environments of a GTM Container.
* [TagmanagerAccountsContainersEnvironmentsReauthorize](#tagmanageraccountscontainersenvironmentsreauthorize) - Re-generates the authorization code for a GTM Environment.
* [TagmanagerAccountsContainersList](#tagmanageraccountscontainerslist) - Lists all Containers that belongs to a GTM Account.
* [TagmanagerAccountsContainersLookup](#tagmanageraccountscontainerslookup) - Looks up a Container by destination ID.
* [TagmanagerAccountsContainersMoveTagID](#tagmanageraccountscontainersmovetagid) - Move Tag ID out of a Container.
* [TagmanagerAccountsContainersSnippet](#tagmanageraccountscontainerssnippet) - Gets the tagging snippet for a Container.
* [TagmanagerAccountsContainersVersionHeadersLatest](#tagmanageraccountscontainersversionheaderslatest) - Gets the latest container version header
* [TagmanagerAccountsContainersVersionHeadersList](#tagmanageraccountscontainersversionheaderslist) - Lists all Container Versions of a GTM Container.
* [TagmanagerAccountsContainersVersionsLive](#tagmanageraccountscontainersversionslive) - Gets the live (i.e. published) container version
* [TagmanagerAccountsContainersVersionsPublish](#tagmanageraccountscontainersversionspublish) - Publishes a Container Version.
* [TagmanagerAccountsContainersVersionsSetLatest](#tagmanageraccountscontainersversionssetlatest) - Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
* [TagmanagerAccountsContainersVersionsUndelete](#tagmanageraccountscontainersversionsundelete) - Undeletes a Container Version.
* [TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate](#tagmanageraccountscontainersworkspacesbuiltinvariablescreate) - Creates one or more GTM Built-In Variables.
* [TagmanagerAccountsContainersWorkspacesBuiltInVariablesList](#tagmanageraccountscontainersworkspacesbuiltinvariableslist) - Lists all the enabled Built-In Variables of a GTM Container.
* [TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert](#tagmanageraccountscontainersworkspacesbuiltinvariablesrevert) - Reverts changes to a GTM Built-In Variables in a GTM Workspace.
* [TagmanagerAccountsContainersWorkspacesClientsCreate](#tagmanageraccountscontainersworkspacesclientscreate) - Creates a GTM Client.
* [TagmanagerAccountsContainersWorkspacesClientsList](#tagmanageraccountscontainersworkspacesclientslist) - Lists all GTM Clients of a GTM container workspace.
* [TagmanagerAccountsContainersWorkspacesCreate](#tagmanageraccountscontainersworkspacescreate) - Creates a Workspace.
* [TagmanagerAccountsContainersWorkspacesCreateVersion](#tagmanageraccountscontainersworkspacescreateversion) - Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
* [TagmanagerAccountsContainersWorkspacesFoldersCreate](#tagmanageraccountscontainersworkspacesfolderscreate) - Creates a GTM Folder.
* [TagmanagerAccountsContainersWorkspacesFoldersEntities](#tagmanageraccountscontainersworkspacesfoldersentities) - List all entities in a GTM Folder.
* [TagmanagerAccountsContainersWorkspacesFoldersList](#tagmanageraccountscontainersworkspacesfolderslist) - Lists all GTM Folders of a Container.
* [TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder](#tagmanageraccountscontainersworkspacesfoldersmoveentitiestofolder) - Moves entities to a GTM Folder.
* [TagmanagerAccountsContainersWorkspacesGetStatus](#tagmanageraccountscontainersworkspacesgetstatus) - Finds conflicting and modified entities in the workspace.
* [TagmanagerAccountsContainersWorkspacesGtagConfigCreate](#tagmanageraccountscontainersworkspacesgtagconfigcreate) - Creates a Google tag config.
* [TagmanagerAccountsContainersWorkspacesGtagConfigList](#tagmanageraccountscontainersworkspacesgtagconfiglist) - Lists all Google tag configs in a Container.
* [TagmanagerAccountsContainersWorkspacesList](#tagmanageraccountscontainersworkspaceslist) - Lists all Workspaces that belong to a GTM Container.
* [TagmanagerAccountsContainersWorkspacesQuickPreview](#tagmanageraccountscontainersworkspacesquickpreview) - Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
* [TagmanagerAccountsContainersWorkspacesResolveConflict](#tagmanageraccountscontainersworkspacesresolveconflict) - Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
* [TagmanagerAccountsContainersWorkspacesSync](#tagmanageraccountscontainersworkspacessync) - Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
* [TagmanagerAccountsContainersWorkspacesTagsCreate](#tagmanageraccountscontainersworkspacestagscreate) - Creates a GTM Tag.
* [TagmanagerAccountsContainersWorkspacesTagsList](#tagmanageraccountscontainersworkspacestagslist) - Lists all GTM Tags of a Container.
* [TagmanagerAccountsContainersWorkspacesTemplatesCreate](#tagmanageraccountscontainersworkspacestemplatescreate) - Creates a GTM Custom Template.
* [TagmanagerAccountsContainersWorkspacesTemplatesList](#tagmanageraccountscontainersworkspacestemplateslist) - Lists all GTM Templates of a GTM container workspace.
* [TagmanagerAccountsContainersWorkspacesTriggersCreate](#tagmanageraccountscontainersworkspacestriggerscreate) - Creates a GTM Trigger.
* [TagmanagerAccountsContainersWorkspacesTriggersList](#tagmanageraccountscontainersworkspacestriggerslist) - Lists all GTM Triggers of a Container.
* [TagmanagerAccountsContainersWorkspacesVariablesCreate](#tagmanageraccountscontainersworkspacesvariablescreate) - Creates a GTM Variable.
* [TagmanagerAccountsContainersWorkspacesVariablesList](#tagmanageraccountscontainersworkspacesvariableslist) - Lists all GTM Variables of a Container.
* [TagmanagerAccountsContainersWorkspacesZonesCreate](#tagmanageraccountscontainersworkspaceszonescreate) - Creates a GTM Zone.
* [TagmanagerAccountsContainersWorkspacesZonesList](#tagmanageraccountscontainersworkspaceszoneslist) - Lists all GTM Zones of a GTM container workspace.
* [TagmanagerAccountsContainersWorkspacesZonesRevert](#tagmanageraccountscontainersworkspaceszonesrevert) - Reverts changes to a GTM Zone in a GTM Workspace.
* [TagmanagerAccountsList](#tagmanageraccountslist) - Lists all GTM Accounts that a user has access to.
* [TagmanagerAccountsUserPermissionsCreate](#tagmanageraccountsuserpermissionscreate) - Creates a user's Account & Container access.
* [TagmanagerAccountsUserPermissionsDelete](#tagmanageraccountsuserpermissionsdelete) - Removes a user from the account, revoking access to it and all of its containers.
* [TagmanagerAccountsUserPermissionsGet](#tagmanageraccountsuserpermissionsget) - Gets a user's Account & Container access.
* [TagmanagerAccountsUserPermissionsList](#tagmanageraccountsuserpermissionslist) - List all users that have access to the account along with Account and Container user access granted to each of them.
* [TagmanagerAccountsUserPermissionsUpdate](#tagmanageraccountsuserpermissionsupdate) - Updates a user's Account & Container access.

## TagmanagerAccountsContainersCombine

Combines Containers.

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
    res, err := s.Accounts.TagmanagerAccountsContainersCombine(ctx, operations.TagmanagerAccountsContainersCombineRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        AllowUserPermissionFeatureUpdate: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        ContainerID: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("minus"),
        Path: "placeat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        SettingSource: operations.TagmanagerAccountsContainersCombineSettingSourceEnumCurrent.ToPointer(),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.TagmanagerAccountsContainersCombineSecurity{
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
            AccountID: sdk.String("temporibus"),
            ContainerID: sdk.String("ab"),
            DomainName: []string{
                "veritatis",
                "deserunt",
            },
            Features: &shared.ContainerFeatures{
                SupportBuiltInVariables: sdk.Bool(false),
                SupportClients: sdk.Bool(false),
                SupportEnvironments: sdk.Bool(false),
                SupportFolders: sdk.Bool(false),
                SupportGtagConfigs: sdk.Bool(false),
                SupportTags: sdk.Bool(false),
                SupportTemplates: sdk.Bool(false),
                SupportTriggers: sdk.Bool(false),
                SupportUserPermissions: sdk.Bool(false),
                SupportVariables: sdk.Bool(false),
                SupportVersions: sdk.Bool(false),
                SupportWorkspaces: sdk.Bool(false),
                SupportZones: sdk.Bool(false),
            },
            Fingerprint: sdk.String("perferendis"),
            Name: sdk.String("Estelle Will"),
            Notes: sdk.String("at"),
            Path: sdk.String("at"),
            PublicID: sdk.String("maiores"),
            TagIds: []string{
                "quod",
                "quod",
            },
            TagManagerURL: sdk.String("esse"),
            TaggingServerUrls: []string{
                "porro",
                "dolorum",
                "dicta",
            },
            UsageContext: []shared.ContainerUsageContextEnum{
                shared.ContainerUsageContextEnumIosSdk5,
                shared.ContainerUsageContextEnumAndroidSdk5,
                shared.ContainerUsageContextEnumWeb,
            },
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("totam"),
        Key: sdk.String("beatae"),
        OauthToken: sdk.String("commodi"),
        Parent: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("impedit"),
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

## TagmanagerAccountsContainersDestinationsLink

Adds a Destination to this Container and removes it from the Container to which it is currently linked.

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
    res, err := s.Accounts.TagmanagerAccountsContainersDestinationsLink(ctx, operations.TagmanagerAccountsContainersDestinationsLinkRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        AllowUserPermissionFeatureUpdate: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        DestinationID: sdk.String("aspernatur"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("ad"),
        OauthToken: sdk.String("natus"),
        Parent: "sed",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("natus"),
    }, operations.TagmanagerAccountsContainersDestinationsLinkSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Destination != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersDestinationsList

Lists all Destinations linked to a GTM Container.

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
    res, err := s.Accounts.TagmanagerAccountsContainersDestinationsList(ctx, operations.TagmanagerAccountsContainersDestinationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("in"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("iste"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.TagmanagerAccountsContainersDestinationsListSecurity{
        Option1: &operations.TagmanagerAccountsContainersDestinationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDestinationsResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Environment: &shared.Environment{
            AccountID: sdk.String("reiciendis"),
            AuthorizationCode: sdk.String("est"),
            AuthorizationTimestamp: sdk.String("mollitia"),
            ContainerID: sdk.String("laborum"),
            ContainerVersionID: sdk.String("dolores"),
            Description: sdk.String("dolorem"),
            EnableDebug: sdk.Bool(false),
            EnvironmentID: sdk.String("corporis"),
            Fingerprint: sdk.String("explicabo"),
            Name: sdk.String("Ronnie Mohr"),
            Path: sdk.String("excepturi"),
            TagManagerURL: sdk.String("accusantium"),
            Type: shared.EnvironmentTypeEnumLive.ToPointer(),
            URL: sdk.String("culpa"),
            WorkspaceID: sdk.String("doloribus"),
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("consequuntur"),
        Parent: "repellat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("numquam"),
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
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("error"),
        Key: sdk.String("quia"),
        OauthToken: sdk.String("quis"),
        PageToken: sdk.String("vitae"),
        Parent: "laborum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("odit"),
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

## TagmanagerAccountsContainersEnvironmentsReauthorize

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
    res, err := s.Accounts.TagmanagerAccountsContainersEnvironmentsReauthorize(ctx, operations.TagmanagerAccountsContainersEnvironmentsReauthorizeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Environment: &shared.Environment{
            AccountID: sdk.String("sequi"),
            AuthorizationCode: sdk.String("tenetur"),
            AuthorizationTimestamp: sdk.String("ipsam"),
            ContainerID: sdk.String("id"),
            ContainerVersionID: sdk.String("possimus"),
            Description: sdk.String("aut"),
            EnableDebug: sdk.Bool(false),
            EnvironmentID: sdk.String("quasi"),
            Fingerprint: sdk.String("error"),
            Name: sdk.String("Neal Boyer"),
            Path: sdk.String("vero"),
            TagManagerURL: sdk.String("nihil"),
            Type: shared.EnvironmentTypeEnumLatest.ToPointer(),
            URL: sdk.String("voluptatibus"),
            WorkspaceID: sdk.String("ipsa"),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("reprehenderit"),
        Path: "ut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.TagmanagerAccountsContainersEnvironmentsReauthorizeSecurity{
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
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("enim"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("commodi"),
        PageToken: sdk.String("repudiandae"),
        Parent: "quae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("molestias"),
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

## TagmanagerAccountsContainersLookup

Looks up a Container by destination ID.

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
    res, err := s.Accounts.TagmanagerAccountsContainersLookup(ctx, operations.TagmanagerAccountsContainersLookupRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        DestinationID: sdk.String("rem"),
        Fields: sdk.String("voluptates"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("itaque"),
    }, operations.TagmanagerAccountsContainersLookupSecurity{
        Option1: &operations.TagmanagerAccountsContainersLookupSecurityOption1{
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

## TagmanagerAccountsContainersMoveTagID

Move Tag ID out of a Container.

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
    res, err := s.Accounts.TagmanagerAccountsContainersMoveTagID(ctx, operations.TagmanagerAccountsContainersMoveTagIDRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("enim"),
        AllowUserPermissionFeatureUpdate: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        CopySettings: sdk.Bool(false),
        CopyTermsOfService: sdk.Bool(false),
        CopyUsers: sdk.Bool(false),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("deserunt"),
        Path: "distinctio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        TagID: sdk.String("labore"),
        TagName: sdk.String("modi"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.TagmanagerAccountsContainersMoveTagIDSecurity{
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

## TagmanagerAccountsContainersSnippet

Gets the tagging snippet for a Container.

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
    res, err := s.Accounts.TagmanagerAccountsContainersSnippet(ctx, operations.TagmanagerAccountsContainersSnippetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("assumenda"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("alias"),
        Path: "fugit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.TagmanagerAccountsContainersSnippetSecurity{
        Option1: &operations.TagmanagerAccountsContainersSnippetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContainerSnippetResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersVersionHeadersLatest

Gets the latest container version header

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
    res, err := s.Accounts.TagmanagerAccountsContainersVersionHeadersLatest(ctx, operations.TagmanagerAccountsContainersVersionHeadersLatestRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("eum"),
        Key: sdk.String("non"),
        OauthToken: sdk.String("eligendi"),
        Parent: "sint",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.TagmanagerAccountsContainersVersionHeadersLatestSecurity{
        Option1: &operations.TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainerVersionHeader != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersVersionHeadersList

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
    res, err := s.Accounts.TagmanagerAccountsContainersVersionHeadersList(ctx, operations.TagmanagerAccountsContainersVersionHeadersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("a"),
        IncludeDeleted: sdk.Bool(false),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("in"),
        PageToken: sdk.String("in"),
        Parent: "illum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.TagmanagerAccountsContainersVersionHeadersListSecurity{
        Option1: &operations.TagmanagerAccountsContainersVersionHeadersListSecurityOption1{
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

## TagmanagerAccountsContainersVersionsLive

Gets the live (i.e. published) container version

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
    res, err := s.Accounts.TagmanagerAccountsContainersVersionsLive(ctx, operations.TagmanagerAccountsContainersVersionsLiveRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("accusamus"),
        Parent: "non",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.TagmanagerAccountsContainersVersionsLiveSecurity{
        Option1: &operations.TagmanagerAccountsContainersVersionsLiveSecurityOption1{
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("id"),
        Fingerprint: sdk.String("blanditiis"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("sapiente"),
        Path: "amet",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("vel"),
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

## TagmanagerAccountsContainersVersionsSetLatest

Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.

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
    res, err := s.Accounts.TagmanagerAccountsContainersVersionsSetLatest(ctx, operations.TagmanagerAccountsContainersVersionsSetLatestRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("distinctio"),
        Path: "id",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.TagmanagerAccountsContainersVersionsSetLatestSecurity{
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("magnam"),
        Path: "et",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("provident"),
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

## TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate

Creates one or more GTM Built-In Variables.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate(ctx, operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("ad"),
        Parent: "eum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        Type: []TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnum{
            operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnumFormTarget,
            operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnumDeviceName,
            operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnumClickText,
            operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateTypeEnumAmpCanonicalURL,
        },
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBuiltInVariableResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersWorkspacesBuiltInVariablesList

Lists all the enabled Built-In Variables of a GTM Container.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesBuiltInVariablesList(ctx, operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("in"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("architecto"),
        PageToken: sdk.String("repudiandae"),
        Parent: "ullam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity{
        Option1: &operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnabledBuiltInVariablesResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert

Reverts changes to a GTM Built-In Variables in a GTM Workspace.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert(ctx, operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("praesentium"),
        Path: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        Type: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertTypeEnumFormClasses.ToPointer(),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("illum"),
    }, operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RevertBuiltInVariableResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersWorkspacesClientsCreate

Creates a GTM Client.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesClientsCreate(ctx, operations.TagmanagerAccountsContainersWorkspacesClientsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Client: &shared.Client{
            AccountID: sdk.String("maxime"),
            ClientID: sdk.String("ea"),
            ContainerID: sdk.String("excepturi"),
            Fingerprint: sdk.String("odit"),
            Name: sdk.String("Donna Bernhard"),
            Notes: sdk.String("ipsam"),
            Parameter: []shared.Parameter{
                shared.Parameter{
                    Key: sdk.String("autem"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                    Value: sdk.String("nemo"),
                },
                shared.Parameter{
                    Key: sdk.String("voluptatibus"),
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
                    Value: sdk.String("aut"),
                },
            },
            ParentFolderID: sdk.String("cumque"),
            Path: sdk.String("corporis"),
            Priority: sdk.Int(944124),
            TagManagerURL: sdk.String("libero"),
            Type: sdk.String("nobis"),
            WorkspaceID: sdk.String("dolores"),
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("nesciunt"),
        Parent: "eos",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("minus"),
    }, operations.TagmanagerAccountsContainersWorkspacesClientsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Client != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersWorkspacesClientsList

Lists all GTM Clients of a GTM container workspace.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesClientsList(ctx, operations.TagmanagerAccountsContainersWorkspacesClientsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("hic"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("omnis"),
        PageToken: sdk.String("facilis"),
        Parent: "perspiciatis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.TagmanagerAccountsContainersWorkspacesClientsListSecurity{
        Option1: &operations.TagmanagerAccountsContainersWorkspacesClientsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClientsResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersWorkspacesCreate

Creates a Workspace.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesCreate(ctx, operations.TagmanagerAccountsContainersWorkspacesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Workspace: &shared.Workspace{
            AccountID: sdk.String("error"),
            ContainerID: sdk.String("eaque"),
            Description: sdk.String("occaecati"),
            Fingerprint: sdk.String("rerum"),
            Name: sdk.String("Ollie Watsica"),
            Path: sdk.String("dolorum"),
            TagManagerURL: sdk.String("deleniti"),
            WorkspaceID: sdk.String("pariatur"),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("quos"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.TagmanagerAccountsContainersWorkspacesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Workspace != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersWorkspacesCreateVersion

Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesCreateVersion(ctx, operations.TagmanagerAccountsContainersWorkspacesCreateVersionRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateContainerVersionRequestVersionOptions: &shared.CreateContainerVersionRequestVersionOptions{
            Name: sdk.String("Mindy Marks"),
            Notes: sdk.String("dignissimos"),
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("ipsa"),
        Path: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.TagmanagerAccountsContainersWorkspacesCreateVersionSecurity{
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

## TagmanagerAccountsContainersWorkspacesFoldersCreate

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesFoldersCreate(ctx, operations.TagmanagerAccountsContainersWorkspacesFoldersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Folder: &shared.Folder{
            AccountID: sdk.String("quidem"),
            ContainerID: sdk.String("voluptatibus"),
            Fingerprint: sdk.String("voluptas"),
            FolderID: sdk.String("natus"),
            Name: sdk.String("Kay Bailey DDS"),
            Notes: sdk.String("dolorum"),
            Path: sdk.String("iusto"),
            TagManagerURL: sdk.String("voluptate"),
            WorkspaceID: sdk.String("dolorum"),
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("nihil"),
        Parent: "ipsum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.TagmanagerAccountsContainersWorkspacesFoldersCreateSecurity{
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

## TagmanagerAccountsContainersWorkspacesFoldersEntities

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesFoldersEntities(ctx, operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("optio"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("ad"),
        PageToken: sdk.String("saepe"),
        Path: "suscipit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("minima"),
    }, operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurity{
        Option1: &operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurityOption1{
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

## TagmanagerAccountsContainersWorkspacesFoldersList

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesFoldersList(ctx, operations.TagmanagerAccountsContainersWorkspacesFoldersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("at"),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("tempora"),
        PageToken: sdk.String("vel"),
        Parent: "quod",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.TagmanagerAccountsContainersWorkspacesFoldersListSecurity{
        Option1: &operations.TagmanagerAccountsContainersWorkspacesFoldersListSecurityOption1{
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

## TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder(ctx, operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Folder: &shared.Folder{
            AccountID: sdk.String("esse"),
            ContainerID: sdk.String("harum"),
            Fingerprint: sdk.String("iusto"),
            FolderID: sdk.String("ipsum"),
            Name: sdk.String("Saul Fay"),
            Notes: sdk.String("numquam"),
            Path: sdk.String("enim"),
            TagManagerURL: sdk.String("dolorem"),
            WorkspaceID: sdk.String("sapiente"),
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sit"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("neque"),
        OauthToken: sdk.String("sed"),
        Path: "vel",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        TagID: []string{
            "deserunt",
            "quam",
        },
        TriggerID: []string{
            "incidunt",
        },
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("cupiditate"),
        VariableID: []string{
            "pariatur",
            "soluta",
            "dicta",
            "laborum",
        },
    }, operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity{
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

## TagmanagerAccountsContainersWorkspacesGetStatus

Finds conflicting and modified entities in the workspace.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesGetStatus(ctx, operations.TagmanagerAccountsContainersWorkspacesGetStatusRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("aliquid"),
        Path: "quam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("qui"),
    }, operations.TagmanagerAccountsContainersWorkspacesGetStatusSecurity{
        Option1: &operations.TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkspaceStatusResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersWorkspacesGtagConfigCreate

Creates a Google tag config.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesGtagConfigCreate(ctx, operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GtagConfig: &shared.GtagConfig{
            AccountID: sdk.String("fugit"),
            ContainerID: sdk.String("magni"),
            Fingerprint: sdk.String("odio"),
            GtagConfigID: sdk.String("sunt"),
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
                    Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                    Value: sdk.String("soluta"),
                },
                shared.Parameter{
                    Key: sdk.String("nobis"),
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
                    Value: sdk.String("veritatis"),
                },
            },
            Path: sdk.String("nobis"),
            TagManagerURL: sdk.String("quos"),
            Type: sdk.String("tempore"),
            WorkspaceID: sdk.String("cupiditate"),
        },
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("adipisci"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("aut"),
    }, operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GtagConfig != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersWorkspacesGtagConfigList

Lists all Google tag configs in a Container.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesGtagConfigList(ctx, operations.TagmanagerAccountsContainersWorkspacesGtagConfigListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("doloribus"),
        PageToken: sdk.String("ut"),
        Parent: "facilis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("quae"),
    }, operations.TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity{
        Option1: &operations.TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGtagConfigResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersWorkspacesList

Lists all Workspaces that belong to a GTM Container.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesList(ctx, operations.TagmanagerAccountsContainersWorkspacesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("omnis"),
        PageToken: sdk.String("quis"),
        Parent: "ipsum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("consectetur"),
    }, operations.TagmanagerAccountsContainersWorkspacesListSecurity{
        Option1: &operations.TagmanagerAccountsContainersWorkspacesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkspacesResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersWorkspacesQuickPreview

Quick previews a workspace by creating a fake container version from all entities in the provided workspace.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesQuickPreview(ctx, operations.TagmanagerAccountsContainersWorkspacesQuickPreviewRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("odio"),
        Path: "similique",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("ducimus"),
    }, operations.TagmanagerAccountsContainersWorkspacesQuickPreviewSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuickPreviewResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersWorkspacesResolveConflict

Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesResolveConflict(ctx, operations.TagmanagerAccountsContainersWorkspacesResolveConflictRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Entity: &shared.Entity{
            ChangeStatus: shared.EntityChangeStatusEnumUpdated.ToPointer(),
            Client: &shared.Client{
                AccountID: sdk.String("illum"),
                ClientID: sdk.String("sequi"),
                ContainerID: sdk.String("natus"),
                Fingerprint: sdk.String("impedit"),
                Name: sdk.String("Camille Heidenreich"),
                Notes: sdk.String("porro"),
                Parameter: []shared.Parameter{
                    shared.Parameter{
                        Key: sdk.String("doloribus"),
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
                        Value: sdk.String("alias"),
                    },
                    shared.Parameter{
                        Key: sdk.String("officia"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                        Value: sdk.String("aspernatur"),
                    },
                    shared.Parameter{
                        Key: sdk.String("vel"),
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
                        Value: sdk.String("ex"),
                    },
                    shared.Parameter{
                        Key: sdk.String("laudantium"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                        Value: sdk.String("quasi"),
                    },
                },
                ParentFolderID: sdk.String("ex"),
                Path: sdk.String("nulla"),
                Priority: sdk.Int(569211),
                TagManagerURL: sdk.String("voluptatibus"),
                Type: sdk.String("nostrum"),
                WorkspaceID: sdk.String("sapiente"),
            },
            Folder: &shared.Folder{
                AccountID: sdk.String("quisquam"),
                ContainerID: sdk.String("saepe"),
                Fingerprint: sdk.String("ea"),
                FolderID: sdk.String("impedit"),
                Name: sdk.String("Mrs. Sally Jacobi"),
                Notes: sdk.String("quo"),
                Path: sdk.String("consectetur"),
                TagManagerURL: sdk.String("recusandae"),
                WorkspaceID: sdk.String("aspernatur"),
            },
            Tag: &shared.Tag{
                AccountID: sdk.String("minima"),
                BlockingRuleID: []string{
                    "a",
                },
                BlockingTriggerID: []string{
                    "aut",
                    "aut",
                    "deleniti",
                },
                ConsentSettings: &shared.TagConsentSetting{
                    ConsentStatus: shared.TagConsentSettingConsentStatusEnumNeeded.ToPointer(),
                    ConsentType: &shared.Parameter{
                        Key: sdk.String("aliquam"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                        Value: sdk.String("non"),
                    },
                },
                ContainerID: sdk.String("et"),
                Fingerprint: sdk.String("dolorum"),
                FiringRuleID: []string{
                    "placeat",
                    "velit",
                    "eum",
                },
                FiringTriggerID: []string{
                    "nobis",
                    "quas",
                },
                LiveOnly: sdk.Bool(false),
                MonitoringMetadata: &shared.Parameter{
                    Key: sdk.String("assumenda"),
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
                    Type: shared.ParameterTypeEnumMap.ToPointer(),
                    Value: sdk.String("quasi"),
                },
                MonitoringMetadataTagNameKey: sdk.String("tempora"),
                Name: sdk.String("Ms. Janice McLaughlin"),
                Notes: sdk.String("odio"),
                Parameter: []shared.Parameter{
                    shared.Parameter{
                        Key: sdk.String("esse"),
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
                        Value: sdk.String("reprehenderit"),
                    },
                    shared.Parameter{
                        Key: sdk.String("quidem"),
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
                        Value: sdk.String("suscipit"),
                    },
                },
                ParentFolderID: sdk.String("assumenda"),
                Path: sdk.String("eos"),
                Paused: sdk.Bool(false),
                Priority: &shared.Parameter{
                    Key: sdk.String("praesentium"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                    Value: sdk.String("id"),
                },
                ScheduleEndMs: sdk.String("quidem"),
                ScheduleStartMs: sdk.String("neque"),
                SetupTag: []shared.SetupTag{
                    shared.SetupTag{
                        StopOnSetupFailure: sdk.Bool(false),
                        TagName: sdk.String("illum"),
                    },
                    shared.SetupTag{
                        StopOnSetupFailure: sdk.Bool(false),
                        TagName: sdk.String("quo"),
                    },
                    shared.SetupTag{
                        StopOnSetupFailure: sdk.Bool(false),
                        TagName: sdk.String("fuga"),
                    },
                    shared.SetupTag{
                        StopOnSetupFailure: sdk.Bool(false),
                        TagName: sdk.String("eius"),
                    },
                },
                TagFiringOption: shared.TagTagFiringOptionEnumTagFiringOptionUnspecified.ToPointer(),
                TagID: sdk.String("voluptas"),
                TagManagerURL: sdk.String("ab"),
                TeardownTag: []shared.TeardownTag{
                    shared.TeardownTag{
                        StopTeardownOnFailure: sdk.Bool(false),
                        TagName: sdk.String("consequatur"),
                    },
                    shared.TeardownTag{
                        StopTeardownOnFailure: sdk.Bool(false),
                        TagName: sdk.String("tempora"),
                    },
                    shared.TeardownTag{
                        StopTeardownOnFailure: sdk.Bool(false),
                        TagName: sdk.String("debitis"),
                    },
                },
                Type: sdk.String("ipsam"),
                WorkspaceID: sdk.String("aspernatur"),
            },
            Trigger: &shared.Trigger{
                AccountID: sdk.String("sequi"),
                AutoEventFilter: []shared.Condition{
                    shared.Condition{
                        Parameter: []shared.Parameter{
                            shared.Parameter{
                                Key: sdk.String("recusandae"),
                                List: []shared.Parameter{
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
                            shared.Parameter{
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
                        },
                        Type: shared.ConditionTypeEnumMatchRegex.ToPointer(),
                    },
                    shared.Condition{
                        Parameter: []shared.Parameter{
                            shared.Parameter{
                                Key: sdk.String("commodi"),
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
                                Value: sdk.String("molestiae"),
                            },
                            shared.Parameter{
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
                            shared.Parameter{
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
                        },
                        Type: shared.ConditionTypeEnumStartsWith.ToPointer(),
                    },
                    shared.Condition{
                        Parameter: []shared.Parameter{
                            shared.Parameter{
                                Key: sdk.String("explicabo"),
                                List: []shared.Parameter{
                                    shared.Parameter{},
                                    shared.Parameter{},
                                },
                                Map: []shared.Parameter{
                                    shared.Parameter{},
                                    shared.Parameter{},
                                },
                                Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                                Value: sdk.String("sapiente"),
                            },
                            shared.Parameter{
                                Key: sdk.String("consequuntur"),
                                List: []shared.Parameter{
                                    shared.Parameter{},
                                },
                                Map: []shared.Parameter{
                                    shared.Parameter{},
                                },
                                Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                                Value: sdk.String("occaecati"),
                            },
                            shared.Parameter{
                                Key: sdk.String("atque"),
                                List: []shared.Parameter{
                                    shared.Parameter{},
                                },
                                Map: []shared.Parameter{
                                    shared.Parameter{},
                                    shared.Parameter{},
                                },
                                Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                                Value: sdk.String("accusamus"),
                            },
                        },
                        Type: shared.ConditionTypeEnumConditionTypeUnspecified.ToPointer(),
                    },
                    shared.Condition{
                        Parameter: []shared.Parameter{
                            shared.Parameter{
                                Key: sdk.String("quod"),
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
                                Value: sdk.String("quasi"),
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
                                    shared.Parameter{},
                                },
                                Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                                Value: sdk.String("rerum"),
                            },
                        },
                        Type: shared.ConditionTypeEnumGreater.ToPointer(),
                    },
                },
                CheckValidation: &shared.Parameter{
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
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                    Value: sdk.String("culpa"),
                },
                ContainerID: sdk.String("tempore"),
                ContinuousTimeMinMilliseconds: &shared.Parameter{
                    Key: sdk.String("adipisci"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                    Value: sdk.String("minus"),
                },
                CustomEventFilter: []shared.Condition{
                    shared.Condition{
                        Parameter: []shared.Parameter{
                            shared.Parameter{
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
                                Type: shared.ParameterTypeEnumList.ToPointer(),
                                Value: sdk.String("a"),
                            },
                            shared.Parameter{
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
                                Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                                Value: sdk.String("a"),
                            },
                            shared.Parameter{
                                Key: sdk.String("error"),
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
                                Value: sdk.String("quia"),
                            },
                            shared.Parameter{
                                Key: sdk.String("eveniet"),
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
                                Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                                Value: sdk.String("consequuntur"),
                            },
                        },
                        Type: shared.ConditionTypeEnumEquals.ToPointer(),
                    },
                    shared.Condition{
                        Parameter: []shared.Parameter{
                            shared.Parameter{
                                Key: sdk.String("culpa"),
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
                                Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                                Value: sdk.String("earum"),
                            },
                            shared.Parameter{
                                Key: sdk.String("vel"),
                                List: []shared.Parameter{
                                    shared.Parameter{},
                                    shared.Parameter{},
                                },
                                Map: []shared.Parameter{
                                    shared.Parameter{},
                                    shared.Parameter{},
                                },
                                Type: shared.ParameterTypeEnumMap.ToPointer(),
                                Value: sdk.String("illum"),
                            },
                            shared.Parameter{
                                Key: sdk.String("soluta"),
                                List: []shared.Parameter{
                                    shared.Parameter{},
                                },
                                Map: []shared.Parameter{
                                    shared.Parameter{},
                                    shared.Parameter{},
                                },
                                Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                                Value: sdk.String("dicta"),
                            },
                        },
                        Type: shared.ConditionTypeEnumEndsWith.ToPointer(),
                    },
                },
                EventName: &shared.Parameter{
                    Key: sdk.String("reprehenderit"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                    Value: sdk.String("voluptatum"),
                },
                Filter: []shared.Condition{
                    shared.Condition{
                        Parameter: []shared.Parameter{
                            shared.Parameter{
                                Key: sdk.String("ex"),
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
                                Type: shared.ParameterTypeEnumMap.ToPointer(),
                                Value: sdk.String("architecto"),
                            },
                            shared.Parameter{
                                Key: sdk.String("omnis"),
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
                                Value: sdk.String("et"),
                            },
                            shared.Parameter{
                                Key: sdk.String("voluptate"),
                                List: []shared.Parameter{
                                    shared.Parameter{},
                                },
                                Map: []shared.Parameter{
                                    shared.Parameter{},
                                    shared.Parameter{},
                                },
                                Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                                Value: sdk.String("consectetur"),
                            },
                            shared.Parameter{
                                Key: sdk.String("adipisci"),
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
                                Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                                Value: sdk.String("rem"),
                            },
                        },
                        Type: shared.ConditionTypeEnumConditionTypeUnspecified.ToPointer(),
                    },
                },
                Fingerprint: sdk.String("laudantium"),
                HorizontalScrollPercentageList: &shared.Parameter{
                    Key: sdk.String("eum"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumList.ToPointer(),
                    Value: sdk.String("non"),
                },
                Interval: &shared.Parameter{
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
                IntervalSeconds: &shared.Parameter{
                    Key: sdk.String("explicabo"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                    Value: sdk.String("dicta"),
                },
                Limit: &shared.Parameter{
                    Key: sdk.String("maiores"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                    Value: sdk.String("voluptas"),
                },
                MaxTimerLengthSeconds: &shared.Parameter{
                    Key: sdk.String("asperiores"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumInteger.ToPointer(),
                    Value: sdk.String("consequuntur"),
                },
                Name: sdk.String("Luke Schoen"),
                Notes: sdk.String("asperiores"),
                Parameter: []shared.Parameter{
                    shared.Parameter{
                        Key: sdk.String("quae"),
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
                        Value: sdk.String("labore"),
                    },
                    shared.Parameter{
                        Key: sdk.String("ab"),
                        List: []shared.Parameter{
                            shared.Parameter{},
                        },
                        Map: []shared.Parameter{
                            shared.Parameter{},
                            shared.Parameter{},
                            shared.Parameter{},
                        },
                        Type: shared.ParameterTypeEnumMap.ToPointer(),
                        Value: sdk.String("suscipit"),
                    },
                },
                ParentFolderID: sdk.String("velit"),
                Path: sdk.String("culpa"),
                Selector: &shared.Parameter{
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
                TagManagerURL: sdk.String("ducimus"),
                TotalTimeMinMilliseconds: &shared.Parameter{
                    Key: sdk.String("quos"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                    Value: sdk.String("facilis"),
                },
                TriggerID: sdk.String("cum"),
                Type: shared.TriggerTypeEnumFirebaseInAppPurchase.ToPointer(),
                UniqueTriggerID: &shared.Parameter{
                    Key: sdk.String("in"),
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
                    Value: sdk.String("nemo"),
                },
                VerticalScrollPercentageList: &shared.Parameter{
                    Key: sdk.String("recusandae"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumMap.ToPointer(),
                    Value: sdk.String("consectetur"),
                },
                VisibilitySelector: &shared.Parameter{
                    Key: sdk.String("in"),
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
                    Value: sdk.String("numquam"),
                },
                VisiblePercentageMax: &shared.Parameter{
                    Key: sdk.String("doloribus"),
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
                    Type: shared.ParameterTypeEnumMap.ToPointer(),
                    Value: sdk.String("saepe"),
                },
                VisiblePercentageMin: &shared.Parameter{
                    Key: sdk.String("necessitatibus"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                    Value: sdk.String("adipisci"),
                },
                WaitForTags: &shared.Parameter{
                    Key: sdk.String("non"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                    Value: sdk.String("a"),
                },
                WaitForTagsTimeout: &shared.Parameter{
                    Key: sdk.String("debitis"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumMap.ToPointer(),
                    Value: sdk.String("laboriosam"),
                },
                WorkspaceID: sdk.String("ipsa"),
            },
            Variable: &shared.Variable{
                AccountID: sdk.String("voluptates"),
                ContainerID: sdk.String("libero"),
                DisablingTriggerID: []string{
                    "accusamus",
                },
                EnablingTriggerID: []string{
                    "tempora",
                    "aspernatur",
                    "voluptas",
                },
                Fingerprint: sdk.String("voluptas"),
                FormatValue: &shared.VariableFormatValue{
                    CaseConversionType: shared.VariableFormatValueCaseConversionTypeEnumLowercase.ToPointer(),
                    ConvertFalseToValue: &shared.Parameter{
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
                        Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                        Value: sdk.String("minus"),
                    },
                    ConvertNullToValue: &shared.Parameter{
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
                        Type: shared.ParameterTypeEnumInteger.ToPointer(),
                        Value: sdk.String("aliquam"),
                    },
                    ConvertTrueToValue: &shared.Parameter{
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
                        Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                        Value: sdk.String("cum"),
                    },
                    ConvertUndefinedToValue: &shared.Parameter{
                        Key: sdk.String("blanditiis"),
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
                        Value: sdk.String("culpa"),
                    },
                },
                Name: sdk.String("Dewey Leannon"),
                Notes: sdk.String("nobis"),
                Parameter: []shared.Parameter{
                    shared.Parameter{
                        Key: sdk.String("rerum"),
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
                        Value: sdk.String("asperiores"),
                    },
                },
                ParentFolderID: sdk.String("facilis"),
                Path: sdk.String("voluptate"),
                ScheduleEndMs: sdk.String("expedita"),
                ScheduleStartMs: sdk.String("ab"),
                TagManagerURL: sdk.String("iste"),
                Type: sdk.String("dolore"),
                VariableID: sdk.String("laborum"),
                WorkspaceID: sdk.String("sed"),
            },
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("explicabo"),
        Fingerprint: sdk.String("voluptas"),
        Key: sdk.String("unde"),
        OauthToken: sdk.String("architecto"),
        Path: "suscipit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("illo"),
    }, operations.TagmanagerAccountsContainersWorkspacesResolveConflictSecurity{
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

## TagmanagerAccountsContainersWorkspacesSync

Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesSync(ctx, operations.TagmanagerAccountsContainersWorkspacesSyncRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("provident"),
        Path: "eius",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("ea"),
    }, operations.TagmanagerAccountsContainersWorkspacesSyncSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncWorkspaceResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersWorkspacesTagsCreate

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesTagsCreate(ctx, operations.TagmanagerAccountsContainersWorkspacesTagsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Tag: &shared.Tag{
            AccountID: sdk.String("quos"),
            BlockingRuleID: []string{
                "tempora",
                "tempora",
                "voluptate",
                "reiciendis",
            },
            BlockingTriggerID: []string{
                "sit",
                "non",
            },
            ConsentSettings: &shared.TagConsentSetting{
                ConsentStatus: shared.TagConsentSettingConsentStatusEnumNeeded.ToPointer(),
                ConsentType: &shared.Parameter{
                    Key: sdk.String("praesentium"),
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
                    Value: sdk.String("ipsam"),
                },
            },
            ContainerID: sdk.String("debitis"),
            Fingerprint: sdk.String("rem"),
            FiringRuleID: []string{
                "nobis",
            },
            FiringTriggerID: []string{
                "veniam",
                "minima",
                "recusandae",
            },
            LiveOnly: sdk.Bool(false),
            MonitoringMetadata: &shared.Parameter{
                Key: sdk.String("reiciendis"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                Value: sdk.String("saepe"),
            },
            MonitoringMetadataTagNameKey: sdk.String("numquam"),
            Name: sdk.String("Ms. Pearl Towne"),
            Notes: sdk.String("praesentium"),
            Parameter: []shared.Parameter{
                shared.Parameter{
                    Key: sdk.String("laboriosam"),
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
                    Type: shared.ParameterTypeEnumList.ToPointer(),
                    Value: sdk.String("hic"),
                },
                shared.Parameter{
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
                    Type: shared.ParameterTypeEnumMap.ToPointer(),
                    Value: sdk.String("nostrum"),
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
                    },
                    Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                    Value: sdk.String("tempora"),
                },
            },
            ParentFolderID: sdk.String("atque"),
            Path: sdk.String("fugit"),
            Paused: sdk.Bool(false),
            Priority: &shared.Parameter{
                Key: sdk.String("ut"),
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
                Value: sdk.String("expedita"),
            },
            ScheduleEndMs: sdk.String("magnam"),
            ScheduleStartMs: sdk.String("consequatur"),
            SetupTag: []shared.SetupTag{
                shared.SetupTag{
                    StopOnSetupFailure: sdk.Bool(false),
                    TagName: sdk.String("ipsam"),
                },
                shared.SetupTag{
                    StopOnSetupFailure: sdk.Bool(false),
                    TagName: sdk.String("sit"),
                },
            },
            TagFiringOption: shared.TagTagFiringOptionEnumOncePerEvent.ToPointer(),
            TagID: sdk.String("quas"),
            TagManagerURL: sdk.String("repudiandae"),
            TeardownTag: []shared.TeardownTag{
                shared.TeardownTag{
                    StopTeardownOnFailure: sdk.Bool(false),
                    TagName: sdk.String("et"),
                },
                shared.TeardownTag{
                    StopTeardownOnFailure: sdk.Bool(false),
                    TagName: sdk.String("blanditiis"),
                },
            },
            Type: sdk.String("ex"),
            WorkspaceID: sdk.String("sed"),
        },
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("consequatur"),
        Parent: "incidunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("harum"),
    }, operations.TagmanagerAccountsContainersWorkspacesTagsCreateSecurity{
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

## TagmanagerAccountsContainersWorkspacesTagsList

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesTagsList(ctx, operations.TagmanagerAccountsContainersWorkspacesTagsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("laborum"),
        PageToken: sdk.String("nam"),
        Parent: "tenetur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("amet"),
    }, operations.TagmanagerAccountsContainersWorkspacesTagsListSecurity{
        Option1: &operations.TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1{
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

## TagmanagerAccountsContainersWorkspacesTemplatesCreate

Creates a GTM Custom Template.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesTemplatesCreate(ctx, operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CustomTemplate: &shared.CustomTemplate{
            AccountID: sdk.String("voluptate"),
            ContainerID: sdk.String("unde"),
            Fingerprint: sdk.String("reiciendis"),
            GalleryReference: &shared.GalleryReference{
                Host: sdk.String("provident"),
                IsModified: sdk.Bool(false),
                Owner: sdk.String("repellendus"),
                Repository: sdk.String("delectus"),
                Signature: sdk.String("voluptates"),
                Version: sdk.String("perferendis"),
            },
            Name: sdk.String("Rickey Kiehn"),
            Path: sdk.String("praesentium"),
            TagManagerURL: sdk.String("mollitia"),
            TemplateData: sdk.String("veniam"),
            TemplateID: sdk.String("voluptatem"),
            WorkspaceID: sdk.String("quisquam"),
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("reprehenderit"),
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("totam"),
        Parent: "suscipit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("et"),
    }, operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomTemplate != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersWorkspacesTemplatesList

Lists all GTM Templates of a GTM container workspace.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesTemplatesList(ctx, operations.TagmanagerAccountsContainersWorkspacesTemplatesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("atque"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("officiis"),
        PageToken: sdk.String("officiis"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.TagmanagerAccountsContainersWorkspacesTemplatesListSecurity{
        Option1: &operations.TagmanagerAccountsContainersWorkspacesTemplatesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTemplatesResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersWorkspacesTriggersCreate

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesTriggersCreate(ctx, operations.TagmanagerAccountsContainersWorkspacesTriggersCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Trigger: &shared.Trigger{
            AccountID: sdk.String("maiores"),
            AutoEventFilter: []shared.Condition{
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("error"),
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
                            Value: sdk.String("atque"),
                        },
                        shared.Parameter{
                            Key: sdk.String("atque"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumMap.ToPointer(),
                            Value: sdk.String("repellendus"),
                        },
                        shared.Parameter{
                            Key: sdk.String("labore"),
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
                            Value: sdk.String("dicta"),
                        },
                        shared.Parameter{
                            Key: sdk.String("accusantium"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumInteger.ToPointer(),
                            Value: sdk.String("laboriosam"),
                        },
                    },
                    Type: shared.ConditionTypeEnumContains.ToPointer(),
                },
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("molestias"),
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
                            Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                            Value: sdk.String("occaecati"),
                        },
                        shared.Parameter{
                            Key: sdk.String("officiis"),
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
                            Value: sdk.String("eveniet"),
                        },
                        shared.Parameter{
                            Key: sdk.String("occaecati"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumMap.ToPointer(),
                            Value: sdk.String("quis"),
                        },
                        shared.Parameter{
                            Key: sdk.String("reprehenderit"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumInteger.ToPointer(),
                            Value: sdk.String("quidem"),
                        },
                    },
                    Type: shared.ConditionTypeEnumCSSSelector.ToPointer(),
                },
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("vero"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                            Value: sdk.String("totam"),
                        },
                    },
                    Type: shared.ConditionTypeEnumConditionTypeUnspecified.ToPointer(),
                },
            },
            CheckValidation: &shared.Parameter{
                Key: sdk.String("molestiae"),
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
                Value: sdk.String("iure"),
            },
            ContainerID: sdk.String("necessitatibus"),
            ContinuousTimeMinMilliseconds: &shared.Parameter{
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
                },
                Type: shared.ParameterTypeEnumList.ToPointer(),
                Value: sdk.String("rem"),
            },
            CustomEventFilter: []shared.Condition{
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("repellat"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumList.ToPointer(),
                            Value: sdk.String("nihil"),
                        },
                        shared.Parameter{
                            Key: sdk.String("mollitia"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                            Value: sdk.String("reiciendis"),
                        },
                    },
                    Type: shared.ConditionTypeEnumContains.ToPointer(),
                },
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("minima"),
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
                            Value: sdk.String("quae"),
                        },
                        shared.Parameter{
                            Key: sdk.String("recusandae"),
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
                            Value: sdk.String("ex"),
                        },
                        shared.Parameter{
                            Key: sdk.String("ut"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                            Value: sdk.String("laudantium"),
                        },
                    },
                    Type: shared.ConditionTypeEnumMatchRegex.ToPointer(),
                },
            },
            EventName: &shared.Parameter{
                Key: sdk.String("nemo"),
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
                Value: sdk.String("quis"),
            },
            Filter: []shared.Condition{
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("provident"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                            Value: sdk.String("animi"),
                        },
                        shared.Parameter{
                            Key: sdk.String("nostrum"),
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
                            Value: sdk.String("animi"),
                        },
                        shared.Parameter{
                            Key: sdk.String("ex"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTagReference.ToPointer(),
                            Value: sdk.String("doloribus"),
                        },
                        shared.Parameter{
                            Key: sdk.String("ullam"),
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
                            Value: sdk.String("officia"),
                        },
                    },
                    Type: shared.ConditionTypeEnumLess.ToPointer(),
                },
                shared.Condition{
                    Parameter: []shared.Parameter{
                        shared.Parameter{
                            Key: sdk.String("modi"),
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
                            Value: sdk.String("sapiente"),
                        },
                        shared.Parameter{
                            Key: sdk.String("cumque"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumInteger.ToPointer(),
                            Value: sdk.String("quis"),
                        },
                        shared.Parameter{
                            Key: sdk.String("inventore"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                            Value: sdk.String("perferendis"),
                        },
                        shared.Parameter{
                            Key: sdk.String("velit"),
                            List: []shared.Parameter{
                                shared.Parameter{},
                            },
                            Map: []shared.Parameter{
                                shared.Parameter{},
                                shared.Parameter{},
                            },
                            Type: shared.ParameterTypeEnumInteger.ToPointer(),
                            Value: sdk.String("rem"),
                        },
                    },
                    Type: shared.ConditionTypeEnumCSSSelector.ToPointer(),
                },
            },
            Fingerprint: sdk.String("impedit"),
            HorizontalScrollPercentageList: &shared.Parameter{
                Key: sdk.String("eos"),
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
                Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                Value: sdk.String("minima"),
            },
            Interval: &shared.Parameter{
                Key: sdk.String("beatae"),
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
                Value: sdk.String("soluta"),
            },
            IntervalSeconds: &shared.Parameter{
                Key: sdk.String("hic"),
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
                Value: sdk.String("perspiciatis"),
            },
            Limit: &shared.Parameter{
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
                Type: shared.ParameterTypeEnumTriggerReference.ToPointer(),
                Value: sdk.String("suscipit"),
            },
            MaxTimerLengthSeconds: &shared.Parameter{
                Key: sdk.String("dolorem"),
                List: []shared.Parameter{
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumMap.ToPointer(),
                Value: sdk.String("ratione"),
            },
            Name: sdk.String("Mr. Santiago Stoltenberg IV"),
            Notes: sdk.String("natus"),
            Parameter: []shared.Parameter{
                shared.Parameter{
                    Key: sdk.String("suscipit"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                    Value: sdk.String("doloribus"),
                },
                shared.Parameter{
                    Key: sdk.String("nulla"),
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
                    Value: sdk.String("nihil"),
                },
                shared.Parameter{
                    Key: sdk.String("molestiae"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                    Value: sdk.String("praesentium"),
                },
            },
            ParentFolderID: sdk.String("maiores"),
            Path: sdk.String("reiciendis"),
            Selector: &shared.Parameter{
                Key: sdk.String("vel"),
                List: []shared.Parameter{
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                Value: sdk.String("dicta"),
            },
            TagManagerURL: sdk.String("odio"),
            TotalTimeMinMilliseconds: &shared.Parameter{
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
                Value: sdk.String("aliquid"),
            },
            TriggerID: sdk.String("ipsa"),
            Type: shared.TriggerTypeEnumClick.ToPointer(),
            UniqueTriggerID: &shared.Parameter{
                Key: sdk.String("sunt"),
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
                Type: shared.ParameterTypeEnumMap.ToPointer(),
                Value: sdk.String("aliquid"),
            },
            VerticalScrollPercentageList: &shared.Parameter{
                Key: sdk.String("officia"),
                List: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                Value: sdk.String("eum"),
            },
            VisibilitySelector: &shared.Parameter{
                Key: sdk.String("voluptas"),
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
                Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                Value: sdk.String("error"),
            },
            VisiblePercentageMax: &shared.Parameter{
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
            VisiblePercentageMin: &shared.Parameter{
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
                Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                Value: sdk.String("repellendus"),
            },
            WaitForTags: &shared.Parameter{
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
            WaitForTagsTimeout: &shared.Parameter{
                Key: sdk.String("expedita"),
                List: []shared.Parameter{
                    shared.Parameter{},
                },
                Map: []shared.Parameter{
                    shared.Parameter{},
                    shared.Parameter{},
                    shared.Parameter{},
                },
                Type: shared.ParameterTypeEnumMap.ToPointer(),
                Value: sdk.String("aliquid"),
            },
            WorkspaceID: sdk.String("beatae"),
        },
        AccessToken: sdk.String("voluptatum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("est"),
        OauthToken: sdk.String("culpa"),
        Parent: "voluptatem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.TagmanagerAccountsContainersWorkspacesTriggersCreateSecurity{
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

## TagmanagerAccountsContainersWorkspacesTriggersList

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesTriggersList(ctx, operations.TagmanagerAccountsContainersWorkspacesTriggersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("alias"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("earum"),
        PageToken: sdk.String("ex"),
        Parent: "sapiente",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.TagmanagerAccountsContainersWorkspacesTriggersListSecurity{
        Option1: &operations.TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption1{
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

## TagmanagerAccountsContainersWorkspacesVariablesCreate

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesVariablesCreate(ctx, operations.TagmanagerAccountsContainersWorkspacesVariablesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Variable: &shared.Variable{
            AccountID: sdk.String("ratione"),
            ContainerID: sdk.String("ullam"),
            DisablingTriggerID: []string{
                "illum",
            },
            EnablingTriggerID: []string{
                "impedit",
                "quibusdam",
                "nam",
            },
            Fingerprint: sdk.String("ipsam"),
            FormatValue: &shared.VariableFormatValue{
                CaseConversionType: shared.VariableFormatValueCaseConversionTypeEnumLowercase.ToPointer(),
                ConvertFalseToValue: &shared.Parameter{
                    Key: sdk.String("dolor"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumList.ToPointer(),
                    Value: sdk.String("veritatis"),
                },
                ConvertNullToValue: &shared.Parameter{
                    Key: sdk.String("tempora"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumTypeUnspecified.ToPointer(),
                    Value: sdk.String("sit"),
                },
                ConvertTrueToValue: &shared.Parameter{
                    Key: sdk.String("modi"),
                    List: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Map: []shared.Parameter{
                        shared.Parameter{},
                    },
                    Type: shared.ParameterTypeEnumList.ToPointer(),
                    Value: sdk.String("quae"),
                },
                ConvertUndefinedToValue: &shared.Parameter{
                    Key: sdk.String("dolor"),
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
                    Value: sdk.String("ipsa"),
                },
            },
            Name: sdk.String("Conrad Rutherford"),
            Notes: sdk.String("necessitatibus"),
            Parameter: []shared.Parameter{
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
                    Type: shared.ParameterTypeEnumBoolean.ToPointer(),
                    Value: sdk.String("vel"),
                },
            },
            ParentFolderID: sdk.String("voluptatum"),
            Path: sdk.String("magnam"),
            ScheduleEndMs: sdk.String("exercitationem"),
            ScheduleStartMs: sdk.String("ab"),
            TagManagerURL: sdk.String("porro"),
            Type: sdk.String("autem"),
            VariableID: sdk.String("nobis"),
            WorkspaceID: sdk.String("laboriosam"),
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("quasi"),
        Parent: "nisi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("est"),
    }, operations.TagmanagerAccountsContainersWorkspacesVariablesCreateSecurity{
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

## TagmanagerAccountsContainersWorkspacesVariablesList

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesVariablesList(ctx, operations.TagmanagerAccountsContainersWorkspacesVariablesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("optio"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("nemo"),
        PageToken: sdk.String("voluptate"),
        Parent: "blanditiis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.TagmanagerAccountsContainersWorkspacesVariablesListSecurity{
        Option1: &operations.TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1{
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

## TagmanagerAccountsContainersWorkspacesZonesCreate

Creates a GTM Zone.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesZonesCreate(ctx, operations.TagmanagerAccountsContainersWorkspacesZonesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Zone: &shared.Zone{
            AccountID: sdk.String("quos"),
            Boundary: &shared.ZoneBoundary{
                Condition: []shared.Condition{
                    shared.Condition{
                        Parameter: []shared.Parameter{
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
                        Type: shared.ConditionTypeEnumEquals.ToPointer(),
                    },
                    shared.Condition{
                        Parameter: []shared.Parameter{
                            shared.Parameter{
                                Key: sdk.String("fugiat"),
                                List: []shared.Parameter{
                                    shared.Parameter{},
                                },
                                Map: []shared.Parameter{
                                    shared.Parameter{},
                                    shared.Parameter{},
                                },
                                Type: shared.ParameterTypeEnumTemplate.ToPointer(),
                                Value: sdk.String("consectetur"),
                            },
                            shared.Parameter{
                                Key: sdk.String("aperiam"),
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
                                Type: shared.ParameterTypeEnumMap.ToPointer(),
                                Value: sdk.String("alias"),
                            },
                            shared.Parameter{
                                Key: sdk.String("omnis"),
                                List: []shared.Parameter{
                                    shared.Parameter{},
                                },
                                Map: []shared.Parameter{
                                    shared.Parameter{},
                                    shared.Parameter{},
                                    shared.Parameter{},
                                },
                                Type: shared.ParameterTypeEnumList.ToPointer(),
                                Value: sdk.String("magni"),
                            },
                        },
                        Type: shared.ConditionTypeEnumConditionTypeUnspecified.ToPointer(),
                    },
                },
                CustomEvaluationTriggerID: []string{
                    "accusamus",
                    "voluptatibus",
                    "distinctio",
                },
            },
            ChildContainer: []shared.ZoneChildContainer{
                shared.ZoneChildContainer{
                    Nickname: sdk.String("delectus"),
                    PublicID: sdk.String("minima"),
                },
                shared.ZoneChildContainer{
                    Nickname: sdk.String("praesentium"),
                    PublicID: sdk.String("maxime"),
                },
                shared.ZoneChildContainer{
                    Nickname: sdk.String("magnam"),
                    PublicID: sdk.String("temporibus"),
                },
            },
            ContainerID: sdk.String("quos"),
            Fingerprint: sdk.String("commodi"),
            Name: sdk.String("Leslie Lebsack"),
            Notes: sdk.String("nam"),
            Path: sdk.String("vero"),
            TagManagerURL: sdk.String("voluptatem"),
            TypeRestriction: &shared.ZoneTypeRestriction{
                Enable: sdk.Bool(false),
                WhitelistedTypeID: []string{
                    "vel",
                    "alias",
                },
            },
            WorkspaceID: sdk.String("quasi"),
            ZoneID: sdk.String("non"),
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("esse"),
        Parent: "nemo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("quis"),
    }, operations.TagmanagerAccountsContainersWorkspacesZonesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Zone != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersWorkspacesZonesList

Lists all GTM Zones of a GTM container workspace.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesZonesList(ctx, operations.TagmanagerAccountsContainersWorkspacesZonesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("ex"),
        PageToken: sdk.String("voluptas"),
        Parent: "debitis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("minus"),
    }, operations.TagmanagerAccountsContainersWorkspacesZonesListSecurity{
        Option1: &operations.TagmanagerAccountsContainersWorkspacesZonesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListZonesResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsContainersWorkspacesZonesRevert

Reverts changes to a GTM Zone in a GTM Workspace.

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
    res, err := s.Accounts.TagmanagerAccountsContainersWorkspacesZonesRevert(ctx, operations.TagmanagerAccountsContainersWorkspacesZonesRevertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("atque"),
        Fingerprint: sdk.String("ipsum"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("magni"),
        Path: "soluta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.TagmanagerAccountsContainersWorkspacesZonesRevertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RevertZoneResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("neque"),
        IncludeGoogleTags: sdk.Bool(false),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("deleniti"),
        PageToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("voluptatibus"),
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

## TagmanagerAccountsUserPermissionsCreate

Creates a user's Account & Container access.

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
    res, err := s.Accounts.TagmanagerAccountsUserPermissionsCreate(ctx, operations.TagmanagerAccountsUserPermissionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserPermission: &shared.UserPermission{
            AccountAccess: &shared.AccountAccess{
                Permission: shared.AccountAccessPermissionEnumNoAccess.ToPointer(),
            },
            AccountID: sdk.String("quibusdam"),
            ContainerAccess: []shared.ContainerAccess{
                shared.ContainerAccess{
                    ContainerID: sdk.String("facere"),
                    Permission: shared.ContainerAccessPermissionEnumApprove.ToPointer(),
                },
            },
            EmailAddress: sdk.String("architecto"),
            Path: sdk.String("voluptatibus"),
        },
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("velit"),
        Key: sdk.String("illo"),
        OauthToken: sdk.String("accusantium"),
        Parent: "vel",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("vero"),
    }, operations.TagmanagerAccountsUserPermissionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserPermission != nil {
        // handle response
    }
}
```

## TagmanagerAccountsUserPermissionsDelete

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
    res, err := s.Accounts.TagmanagerAccountsUserPermissionsDelete(ctx, operations.TagmanagerAccountsUserPermissionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("earum"),
        OauthToken: sdk.String("dicta"),
        Path: "impedit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        Type: []TagmanagerAccountsUserPermissionsDeleteTypeEnum{
            operations.TagmanagerAccountsUserPermissionsDeleteTypeEnumRequestPath,
            operations.TagmanagerAccountsUserPermissionsDeleteTypeEnumBuiltInVariableTypeUnspecified,
            operations.TagmanagerAccountsUserPermissionsDeleteTypeEnumAdvertisingTrackingEnabled,
        },
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("velit"),
    }, operations.TagmanagerAccountsUserPermissionsDeleteSecurity{
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

## TagmanagerAccountsUserPermissionsGet

Gets a user's Account & Container access.

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
    res, err := s.Accounts.TagmanagerAccountsUserPermissionsGet(ctx, operations.TagmanagerAccountsUserPermissionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iusto"),
        ContainerVersionID: sdk.String("sit"),
        Fields: sdk.String("doloremque"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("officia"),
        Path: "recusandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.TagmanagerAccountsUserPermissionsGetSecurity{
        Option1: &operations.TagmanagerAccountsUserPermissionsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserPermission != nil {
        // handle response
    }
}
```

## TagmanagerAccountsUserPermissionsList

List all users that have access to the account along with Account and Container user access granted to each of them.

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
    res, err := s.Accounts.TagmanagerAccountsUserPermissionsList(ctx, operations.TagmanagerAccountsUserPermissionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("voluptate"),
        PageToken: sdk.String("ullam"),
        Parent: "unde",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.TagmanagerAccountsUserPermissionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserPermissionsResponse != nil {
        // handle response
    }
}
```

## TagmanagerAccountsUserPermissionsUpdate

Updates a user's Account & Container access.

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
    res, err := s.Accounts.TagmanagerAccountsUserPermissionsUpdate(ctx, operations.TagmanagerAccountsUserPermissionsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserPermission: &shared.UserPermission{
            AccountAccess: &shared.AccountAccess{
                Permission: shared.AccountAccessPermissionEnumNoAccess.ToPointer(),
            },
            AccountID: sdk.String("est"),
            ContainerAccess: []shared.ContainerAccess{
                shared.ContainerAccess{
                    ContainerID: sdk.String("esse"),
                    Permission: shared.ContainerAccessPermissionEnumNoAccess.ToPointer(),
                },
                shared.ContainerAccess{
                    ContainerID: sdk.String("veritatis"),
                    Permission: shared.ContainerAccessPermissionEnumPublish.ToPointer(),
                },
                shared.ContainerAccess{
                    ContainerID: sdk.String("consectetur"),
                    Permission: shared.ContainerAccessPermissionEnumContainerPermissionUnspecified.ToPointer(),
                },
            },
            EmailAddress: sdk.String("inventore"),
            Path: sdk.String("dolorem"),
        },
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("ex"),
        Fingerprint: sdk.String("nemo"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("libero"),
        Path: "rem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.TagmanagerAccountsUserPermissionsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserPermission != nil {
        // handle response
    }
}
```
