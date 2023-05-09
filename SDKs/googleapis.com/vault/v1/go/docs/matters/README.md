# Matters

### Available Operations

* [VaultMattersAddPermissions](#vaultmattersaddpermissions) - Adds an account as a matter collaborator.
* [VaultMattersClose](#vaultmattersclose) - Closes the specified matter. Returns the matter with updated state.
* [VaultMattersCount](#vaultmatterscount) - Counts the accounts processed by the specified query.
* [VaultMattersCreate](#vaultmatterscreate) - Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.
* [VaultMattersDelete](#vaultmattersdelete) - Deletes the specified matter. Returns the matter with updated state.
* [VaultMattersExportsCreate](#vaultmattersexportscreate) - Creates an export.
* [VaultMattersExportsDelete](#vaultmattersexportsdelete) - Deletes an export.
* [VaultMattersExportsGet](#vaultmattersexportsget) - Gets an export.
* [VaultMattersExportsList](#vaultmattersexportslist) - Lists details about the exports in the specified matter.
* [VaultMattersGet](#vaultmattersget) - Gets the specified matter.
* [VaultMattersHoldsAccountsCreate](#vaultmattersholdsaccountscreate) - Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.
* [VaultMattersHoldsAccountsDelete](#vaultmattersholdsaccountsdelete) - Removes an account from a hold.
* [VaultMattersHoldsAccountsList](#vaultmattersholdsaccountslist) - Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.
* [VaultMattersHoldsAddHeldAccounts](#vaultmattersholdsaddheldaccounts) - Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.
* [VaultMattersHoldsCreate](#vaultmattersholdscreate) - Creates a hold in the specified matter.
* [VaultMattersHoldsDelete](#vaultmattersholdsdelete) - Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.
* [VaultMattersHoldsGet](#vaultmattersholdsget) - Gets the specified hold.
* [VaultMattersHoldsList](#vaultmattersholdslist) - Lists the holds in a matter.
* [VaultMattersHoldsRemoveHeldAccounts](#vaultmattersholdsremoveheldaccounts) - Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.
* [VaultMattersHoldsUpdate](#vaultmattersholdsupdate) - Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.
* [VaultMattersList](#vaultmatterslist) - Lists matters the requestor has access to.
* [VaultMattersRemovePermissions](#vaultmattersremovepermissions) - Removes an account as a matter collaborator.
* [VaultMattersReopen](#vaultmattersreopen) - Reopens the specified matter. Returns the matter with updated state.
* [VaultMattersSavedQueriesCreate](#vaultmatterssavedqueriescreate) - Creates a saved query.
* [VaultMattersSavedQueriesDelete](#vaultmatterssavedqueriesdelete) - Deletes the specified saved query.
* [VaultMattersSavedQueriesGet](#vaultmatterssavedqueriesget) - Retrieves the specified saved query.
* [VaultMattersSavedQueriesList](#vaultmatterssavedquerieslist) - Lists the saved queries in a matter.
* [VaultMattersUndelete](#vaultmattersundelete) - Undeletes the specified matter. Returns the matter with updated state.
* [VaultMattersUpdate](#vaultmattersupdate) - Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.

## VaultMattersAddPermissions

Adds an account as a matter collaborator.

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
    res, err := s.Matters.VaultMattersAddPermissions(ctx, operations.VaultMattersAddPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AddMatterPermissionsRequest: &shared.AddMatterPermissionsRequest{
            CcMe: sdk.Bool(false),
            MatterPermission: &shared.MatterPermission{
                AccountID: sdk.String("debitis"),
                Role: shared.MatterPermissionRoleEnumRoleUnspecified.ToPointer(),
            },
            SendEmails: sdk.Bool(false),
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        MatterID: "placeat",
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.VaultMattersAddPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MatterPermission != nil {
        // handle response
    }
}
```

## VaultMattersClose

Closes the specified matter. Returns the matter with updated state.

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
    res, err := s.Matters.VaultMattersClose(ctx, operations.VaultMattersCloseRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "ab": "quis",
            "veritatis": "deserunt",
            "perferendis": "ipsam",
            "repellendus": "sapiente",
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("at"),
        Key: sdk.String("maiores"),
        MatterID: "molestiae",
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("totam"),
    }, operations.VaultMattersCloseSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloseMatterResponse != nil {
        // handle response
    }
}
```

## VaultMattersCount

Counts the accounts processed by the specified query.

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
    res, err := s.Matters.VaultMattersCount(ctx, operations.VaultMattersCountRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CountArtifactsRequest: &shared.CountArtifactsRequest{
            Query: &shared.Query{
                AccountInfo: &shared.AccountInfo{
                    Emails: []string{
                        "dicta",
                        "nam",
                        "officia",
                    },
                },
                Corpus: shared.QueryCorpusEnumGroups.ToPointer(),
                DataScope: shared.QueryDataScopeEnumDataScopeUnspecified.ToPointer(),
                DriveOptions: &shared.DriveOptions{
                    ClientSideEncryptedOption: shared.DriveOptionsClientSideEncryptedOptionEnumClientSideEncryptedOptionEncrypted.ToPointer(),
                    IncludeSharedDrives: sdk.Bool(false),
                    IncludeTeamDrives: sdk.Bool(false),
                    VersionDate: sdk.String("hic"),
                },
                EndTime: sdk.String("optio"),
                HangoutsChatInfo: &shared.HangoutsChatInfo{
                    RoomID: []string{
                        "beatae",
                        "commodi",
                        "molestiae",
                    },
                },
                HangoutsChatOptions: &shared.HangoutsChatOptions{
                    IncludeRooms: sdk.Bool(false),
                },
                MailOptions: &shared.MailOptions{
                    ClientSideEncryptedOption: shared.MailOptionsClientSideEncryptedOptionEnumClientSideEncryptedOptionAny.ToPointer(),
                    ExcludeDrafts: sdk.Bool(false),
                },
                Method: shared.QueryMethodEnumAccount.ToPointer(),
                OrgUnitInfo: &shared.OrgUnitInfo{
                    OrgUnitID: sdk.String("impedit"),
                },
                SearchMethod: shared.QuerySearchMethodEnumRoom.ToPointer(),
                SharedDriveInfo: &shared.SharedDriveInfo{
                    SharedDriveIds: []string{
                        "ipsum",
                        "excepturi",
                    },
                },
                SitesURLInfo: &shared.SitesURLInfo{
                    Urls: []string{
                        "perferendis",
                    },
                },
                StartTime: sdk.String("ad"),
                TeamDriveInfo: &shared.TeamDriveInfo{
                    TeamDriveIds: []string{
                        "sed",
                        "iste",
                        "dolor",
                    },
                },
                Terms: sdk.String("natus"),
                TimeZone: sdk.String("laboriosam"),
                VoiceOptions: &shared.VoiceOptions{
                    CoveredData: []shared.VoiceOptionsCoveredDataEnum{
                        shared.VoiceOptionsCoveredDataEnumCallLogs,
                        shared.VoiceOptionsCoveredDataEnumVoicemails,
                        shared.VoiceOptionsCoveredDataEnumTextMessages,
                        shared.VoiceOptionsCoveredDataEnumTextMessages,
                    },
                },
            },
            View: shared.CountArtifactsRequestViewEnumTotalCount.ToPointer(),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("ipsa"),
        MatterID: "reiciendis",
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.VaultMattersCountSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VaultMattersCreate

Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.

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
    res, err := s.Matters.VaultMattersCreate(ctx, operations.VaultMattersCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Matter: &shared.Matter{
            Description: sdk.String("corporis"),
            MatterID: sdk.String("explicabo"),
            MatterPermissions: []shared.MatterPermission{
                shared.MatterPermission{
                    AccountID: sdk.String("enim"),
                    Role: shared.MatterPermissionRoleEnumCollaborator.ToPointer(),
                },
                shared.MatterPermission{
                    AccountID: sdk.String("nemo"),
                    Role: shared.MatterPermissionRoleEnumRoleUnspecified.ToPointer(),
                },
                shared.MatterPermission{
                    AccountID: sdk.String("excepturi"),
                    Role: shared.MatterPermissionRoleEnumRoleUnspecified.ToPointer(),
                },
                shared.MatterPermission{
                    AccountID: sdk.String("iure"),
                    Role: shared.MatterPermissionRoleEnumCollaborator.ToPointer(),
                },
            },
            Name: sdk.String("Darrin Brakus"),
            State: shared.MatterStateEnumClosed.ToPointer(),
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("velit"),
    }, operations.VaultMattersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Matter != nil {
        // handle response
    }
}
```

## VaultMattersDelete

Deletes the specified matter. Returns the matter with updated state.

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
    res, err := s.Matters.VaultMattersDelete(ctx, operations.VaultMattersDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("animi"),
        MatterID: "enim",
        OauthToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.VaultMattersDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Matter != nil {
        // handle response
    }
}
```

## VaultMattersExportsCreate

Creates an export.

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
    res, err := s.Matters.VaultMattersExportsCreate(ctx, operations.VaultMattersExportsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Export: &shared.Export{
            CloudStorageSink: &shared.CloudStorageSink{
                Files: []shared.CloudStorageFile{
                    shared.CloudStorageFile{
                        BucketName: sdk.String("possimus"),
                        Md5Hash: sdk.String("aut"),
                        ObjectName: sdk.String("quasi"),
                        Size: sdk.String("error"),
                    },
                    shared.CloudStorageFile{
                        BucketName: sdk.String("temporibus"),
                        Md5Hash: sdk.String("laborum"),
                        ObjectName: sdk.String("quasi"),
                        Size: sdk.String("reiciendis"),
                    },
                    shared.CloudStorageFile{
                        BucketName: sdk.String("voluptatibus"),
                        Md5Hash: sdk.String("vero"),
                        ObjectName: sdk.String("nihil"),
                        Size: sdk.String("praesentium"),
                    },
                },
            },
            CreateTime: sdk.String("voluptatibus"),
            ExportOptions: &shared.ExportOptions{
                DriveOptions: &shared.DriveExportOptions{
                    IncludeAccessInfo: sdk.Bool(false),
                },
                GroupsOptions: &shared.GroupsExportOptions{
                    ExportFormat: shared.GroupsExportOptionsExportFormatEnumExportFormatUnspecified.ToPointer(),
                },
                HangoutsChatOptions: &shared.HangoutsChatExportOptions{
                    ExportFormat: shared.HangoutsChatExportOptionsExportFormatEnumMbox.ToPointer(),
                },
                MailOptions: &shared.MailExportOptions{
                    ExportFormat: shared.MailExportOptionsExportFormatEnumMbox.ToPointer(),
                    ShowConfidentialModeContent: sdk.Bool(false),
                    UseNewExport: sdk.Bool(false),
                },
                Region: shared.ExportOptionsRegionEnumUs.ToPointer(),
                VoiceOptions: &shared.VoiceExportOptions{
                    ExportFormat: shared.VoiceExportOptionsExportFormatEnumExportFormatUnspecified.ToPointer(),
                },
            },
            ID: sdk.String("074f1547-1b5e-46e1-bb99-d488e1e91e45"),
            MatterID: sdk.String("consequatur"),
            Name: sdk.String("Taylor Cole"),
            Query: &shared.Query{
                AccountInfo: &shared.AccountInfo{
                    Emails: []string{
                        "labore",
                        "modi",
                        "qui",
                        "aliquid",
                    },
                },
                Corpus: shared.QueryCorpusEnumGroups.ToPointer(),
                DataScope: shared.QueryDataScopeEnumHeldData.ToPointer(),
                DriveOptions: &shared.DriveOptions{
                    ClientSideEncryptedOption: shared.DriveOptionsClientSideEncryptedOptionEnumClientSideEncryptedOptionUnspecified.ToPointer(),
                    IncludeSharedDrives: sdk.Bool(false),
                    IncludeTeamDrives: sdk.Bool(false),
                    VersionDate: sdk.String("magni"),
                },
                EndTime: sdk.String("assumenda"),
                HangoutsChatInfo: &shared.HangoutsChatInfo{
                    RoomID: []string{
                        "alias",
                        "fugit",
                    },
                },
                HangoutsChatOptions: &shared.HangoutsChatOptions{
                    IncludeRooms: sdk.Bool(false),
                },
                MailOptions: &shared.MailOptions{
                    ClientSideEncryptedOption: shared.MailOptionsClientSideEncryptedOptionEnumClientSideEncryptedOptionEncrypted.ToPointer(),
                    ExcludeDrafts: sdk.Bool(false),
                },
                Method: shared.QueryMethodEnumEntireOrg.ToPointer(),
                OrgUnitInfo: &shared.OrgUnitInfo{
                    OrgUnitID: sdk.String("tempora"),
                },
                SearchMethod: shared.QuerySearchMethodEnumRoom.ToPointer(),
                SharedDriveInfo: &shared.SharedDriveInfo{
                    SharedDriveIds: []string{
                        "labore",
                        "delectus",
                        "eum",
                    },
                },
                SitesURLInfo: &shared.SitesURLInfo{
                    Urls: []string{
                        "eligendi",
                    },
                },
                StartTime: sdk.String("sint"),
                TeamDriveInfo: &shared.TeamDriveInfo{
                    TeamDriveIds: []string{
                        "provident",
                        "necessitatibus",
                    },
                },
                Terms: sdk.String("sint"),
                TimeZone: sdk.String("officia"),
                VoiceOptions: &shared.VoiceOptions{
                    CoveredData: []shared.VoiceOptionsCoveredDataEnum{
                        shared.VoiceOptionsCoveredDataEnumCallLogs,
                    },
                },
            },
            Requester: &shared.UserInfo{
                DisplayName: sdk.String("a"),
                Email: sdk.String("Isadore_Kirlin69@hotmail.com"),
            },
            Stats: &shared.ExportStats{
                ExportedArtifactCount: sdk.String("dicta"),
                SizeInBytes: sdk.String("magnam"),
                TotalArtifactCount: sdk.String("cumque"),
            },
            Status: shared.ExportStatusEnumInProgress.ToPointer(),
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("non"),
        MatterID: "occaecati",
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.VaultMattersExportsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Export != nil {
        // handle response
    }
}
```

## VaultMattersExportsDelete

Deletes an export.

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
    res, err := s.Matters.VaultMattersExportsDelete(ctx, operations.VaultMattersExportsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("blanditiis"),
        ExportID: "deleniti",
        Fields: sdk.String("sapiente"),
        Key: sdk.String("amet"),
        MatterID: "deserunt",
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.VaultMattersExportsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## VaultMattersExportsGet

Gets an export.

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
    res, err := s.Matters.VaultMattersExportsGet(ctx, operations.VaultMattersExportsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        ExportID: "distinctio",
        Fields: sdk.String("id"),
        Key: sdk.String("labore"),
        MatterID: "labore",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("eum"),
    }, operations.VaultMattersExportsGetSecurity{
        Option1: &operations.VaultMattersExportsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Export != nil {
        // handle response
    }
}
```

## VaultMattersExportsList

Lists details about the exports in the specified matter.

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
    res, err := s.Matters.VaultMattersExportsList(ctx, operations.VaultMattersExportsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("et"),
        Key: sdk.String("excepturi"),
        MatterID: "ullam",
        OauthToken: sdk.String("provident"),
        PageSize: sdk.Int64(551816),
        PageToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.VaultMattersExportsListSecurity{
        Option1: &operations.VaultMattersExportsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExportsResponse != nil {
        // handle response
    }
}
```

## VaultMattersGet

Gets the specified matter.

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
    res, err := s.Matters.VaultMattersGet(ctx, operations.VaultMattersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("odit"),
        MatterID: "nemo",
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("debitis"),
        View: operations.VaultMattersGetViewEnumViewUnspecified.ToPointer(),
    }, operations.VaultMattersGetSecurity{
        Option1: &operations.VaultMattersGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Matter != nil {
        // handle response
    }
}
```

## VaultMattersHoldsAccountsCreate

Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.

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
    res, err := s.Matters.VaultMattersHoldsAccountsCreate(ctx, operations.VaultMattersHoldsAccountsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        HeldAccount: &shared.HeldAccount{
            AccountID: sdk.String("deleniti"),
            Email: sdk.String("Isaias91@hotmail.com"),
            FirstName: sdk.String("Felix"),
            HoldTime: sdk.String("expedita"),
            LastName: sdk.String("Koss"),
        },
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("saepe"),
        HoldID: "pariatur",
        Key: sdk.String("accusantium"),
        MatterID: "consequuntur",
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("sunt"),
    }, operations.VaultMattersHoldsAccountsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HeldAccount != nil {
        // handle response
    }
}
```

## VaultMattersHoldsAccountsDelete

Removes an account from a hold.

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
    res, err := s.Matters.VaultMattersHoldsAccountsDelete(ctx, operations.VaultMattersHoldsAccountsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("illum"),
        AccountID: "pariatur",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("excepturi"),
        HoldID: "odit",
        Key: sdk.String("ea"),
        MatterID: "accusantium",
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.VaultMattersHoldsAccountsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## VaultMattersHoldsAccountsList

Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.

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
    res, err := s.Matters.VaultMattersHoldsAccountsList(ctx, operations.VaultMattersHoldsAccountsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("autem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eaque"),
        Fields: sdk.String("pariatur"),
        HoldID: "nemo",
        Key: sdk.String("voluptatibus"),
        MatterID: "perferendis",
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.VaultMattersHoldsAccountsListSecurity{
        Option1: &operations.VaultMattersHoldsAccountsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHeldAccountsResponse != nil {
        // handle response
    }
}
```

## VaultMattersHoldsAddHeldAccounts

Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.

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
    res, err := s.Matters.VaultMattersHoldsAddHeldAccounts(ctx, operations.VaultMattersHoldsAddHeldAccountsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AddHeldAccountsRequest: &shared.AddHeldAccountsRequest{
            AccountIds: []string{
                "libero",
                "nobis",
                "dolores",
                "quis",
            },
            Emails: []string{
                "dignissimos",
                "eaque",
                "quis",
            },
        },
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("dolores"),
        HoldID: "minus",
        Key: sdk.String("quam"),
        MatterID: "dolor",
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.VaultMattersHoldsAddHeldAccountsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddHeldAccountsResponse != nil {
        // handle response
    }
}
```

## VaultMattersHoldsCreate

Creates a hold in the specified matter.

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
    res, err := s.Matters.VaultMattersHoldsCreate(ctx, operations.VaultMattersHoldsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Hold: &shared.Hold{
            Accounts: []shared.HeldAccount{
                shared.HeldAccount{
                    AccountID: sdk.String("perspiciatis"),
                    Email: sdk.String("Ottilie_Cruickshank@gmail.com"),
                    FirstName: sdk.String("Amber"),
                    HoldTime: sdk.String("occaecati"),
                    LastName: sdk.String("Price"),
                },
                shared.HeldAccount{
                    AccountID: sdk.String("adipisci"),
                    Email: sdk.String("Tracey_Gleichner@hotmail.com"),
                    FirstName: sdk.String("Kailee"),
                    HoldTime: sdk.String("pariatur"),
                    LastName: sdk.String("McLaughlin"),
                },
                shared.HeldAccount{
                    AccountID: sdk.String("nobis"),
                    Email: sdk.String("Violet.Hahn@hotmail.com"),
                    FirstName: sdk.String("Coy"),
                    HoldTime: sdk.String("dolorem"),
                    LastName: sdk.String("Fadel"),
                },
            },
            Corpus: shared.HoldCorpusEnumDrive.ToPointer(),
            HoldID: sdk.String("ipsum"),
            Name: sdk.String("Marshall Ritchie"),
            OrgUnit: &shared.HeldOrgUnit{
                HoldTime: sdk.String("reiciendis"),
                OrgUnitID: sdk.String("amet"),
            },
            Query: &shared.CorpusQuery{
                DriveQuery: &shared.HeldDriveQuery{
                    IncludeSharedDriveFiles: sdk.Bool(false),
                    IncludeTeamDriveFiles: sdk.Bool(false),
                },
                GroupsQuery: &shared.HeldGroupsQuery{
                    EndTime: sdk.String("dolorum"),
                    StartTime: sdk.String("numquam"),
                    Terms: sdk.String("veritatis"),
                },
                HangoutsChatQuery: &shared.HeldHangoutsChatQuery{
                    IncludeRooms: sdk.Bool(false),
                },
                MailQuery: &shared.HeldMailQuery{
                    EndTime: sdk.String("ipsa"),
                    StartTime: sdk.String("ipsa"),
                    Terms: sdk.String("iure"),
                },
                VoiceQuery: &shared.HeldVoiceQuery{
                    CoveredData: []shared.HeldVoiceQueryCoveredDataEnum{
                        shared.HeldVoiceQueryCoveredDataEnumTextMessages,
                        shared.HeldVoiceQueryCoveredDataEnumCallLogs,
                    },
                },
            },
            UpdateTime: sdk.String("quidem"),
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("eos"),
        Key: sdk.String("atque"),
        MatterID: "sit",
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.VaultMattersHoldsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hold != nil {
        // handle response
    }
}
```

## VaultMattersHoldsDelete

Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.

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
    res, err := s.Matters.VaultMattersHoldsDelete(ctx, operations.VaultMattersHoldsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("omnis"),
        HoldID: "necessitatibus",
        Key: sdk.String("distinctio"),
        MatterID: "asperiores",
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("id"),
    }, operations.VaultMattersHoldsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## VaultMattersHoldsGet

Gets the specified hold.

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
    res, err := s.Matters.VaultMattersHoldsGet(ctx, operations.VaultMattersHoldsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("amet"),
        HoldID: "optio",
        Key: sdk.String("accusamus"),
        MatterID: "ad",
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("provident"),
        View: operations.VaultMattersHoldsGetViewEnumHoldViewUnspecified.ToPointer(),
    }, operations.VaultMattersHoldsGetSecurity{
        Option1: &operations.VaultMattersHoldsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hold != nil {
        // handle response
    }
}
```

## VaultMattersHoldsList

Lists the holds in a matter.

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
    res, err := s.Matters.VaultMattersHoldsList(ctx, operations.VaultMattersHoldsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("at"),
        Key: sdk.String("quaerat"),
        MatterID: "tempora",
        OauthToken: sdk.String("vel"),
        PageSize: sdk.Int64(798047),
        PageToken: sdk.String("officiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("a"),
        View: operations.VaultMattersHoldsListViewEnumBasicHold.ToPointer(),
    }, operations.VaultMattersHoldsListSecurity{
        Option1: &operations.VaultMattersHoldsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHoldsResponse != nil {
        // handle response
    }
}
```

## VaultMattersHoldsRemoveHeldAccounts

Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.

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
    res, err := s.Matters.VaultMattersHoldsRemoveHeldAccounts(ctx, operations.VaultMattersHoldsRemoveHeldAccountsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RemoveHeldAccountsRequest: &shared.RemoveHeldAccountsRequest{
            AccountIds: []string{
                "ipsum",
                "quisquam",
            },
        },
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("accusamus"),
        HoldID: "numquam",
        Key: sdk.String("enim"),
        MatterID: "dolorem",
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("sit"),
    }, operations.VaultMattersHoldsRemoveHeldAccountsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveHeldAccountsResponse != nil {
        // handle response
    }
}
```

## VaultMattersHoldsUpdate

Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.

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
    res, err := s.Matters.VaultMattersHoldsUpdate(ctx, operations.VaultMattersHoldsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Hold: &shared.Hold{
            Accounts: []shared.HeldAccount{
                shared.HeldAccount{
                    AccountID: sdk.String("sed"),
                    Email: sdk.String("Moriah.Hintz@yahoo.com"),
                    FirstName: sdk.String("Cristobal"),
                    HoldTime: sdk.String("incidunt"),
                    LastName: sdk.String("Dibbert"),
                },
            },
            Corpus: shared.HoldCorpusEnumGroups.ToPointer(),
            HoldID: sdk.String("maxime"),
            Name: sdk.String("Dominic Carroll"),
            OrgUnit: &shared.HeldOrgUnit{
                HoldTime: sdk.String("incidunt"),
                OrgUnitID: sdk.String("aspernatur"),
            },
            Query: &shared.CorpusQuery{
                DriveQuery: &shared.HeldDriveQuery{
                    IncludeSharedDriveFiles: sdk.Bool(false),
                    IncludeTeamDriveFiles: sdk.Bool(false),
                },
                GroupsQuery: &shared.HeldGroupsQuery{
                    EndTime: sdk.String("dolores"),
                    StartTime: sdk.String("distinctio"),
                    Terms: sdk.String("facilis"),
                },
                HangoutsChatQuery: &shared.HeldHangoutsChatQuery{
                    IncludeRooms: sdk.Bool(false),
                },
                MailQuery: &shared.HeldMailQuery{
                    EndTime: sdk.String("aliquid"),
                    StartTime: sdk.String("quam"),
                    Terms: sdk.String("molestias"),
                },
                VoiceQuery: &shared.HeldVoiceQuery{
                    CoveredData: []shared.HeldVoiceQueryCoveredDataEnum{
                        shared.HeldVoiceQueryCoveredDataEnumCoveredDataUnspecified,
                        shared.HeldVoiceQueryCoveredDataEnumCoveredDataUnspecified,
                        shared.HeldVoiceQueryCoveredDataEnumCoveredDataUnspecified,
                        shared.HeldVoiceQueryCoveredDataEnumCoveredDataUnspecified,
                    },
                },
            },
            UpdateTime: sdk.String("odio"),
        },
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("hic"),
        HoldID: "voluptatem",
        Key: sdk.String("cumque"),
        MatterID: "soluta",
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.VaultMattersHoldsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hold != nil {
        // handle response
    }
}
```

## VaultMattersList

Lists matters the requestor has access to.

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
    res, err := s.Matters.VaultMattersList(ctx, operations.VaultMattersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("aperiam"),
        OauthToken: sdk.String("delectus"),
        PageSize: sdk.Int64(209157),
        PageToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        State: operations.VaultMattersListStateEnumStateUnspecified.ToPointer(),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("architecto"),
        View: operations.VaultMattersListViewEnumViewUnspecified.ToPointer(),
    }, operations.VaultMattersListSecurity{
        Option1: &operations.VaultMattersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMattersResponse != nil {
        // handle response
    }
}
```

## VaultMattersRemovePermissions

Removes an account as a matter collaborator.

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
    res, err := s.Matters.VaultMattersRemovePermissions(ctx, operations.VaultMattersRemovePermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RemoveMatterPermissionsRequest: &shared.RemoveMatterPermissionsRequest{
            AccountID: sdk.String("quas"),
        },
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("porro"),
        MatterID: "doloribus",
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("qui"),
    }, operations.VaultMattersRemovePermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## VaultMattersReopen

Reopens the specified matter. Returns the matter with updated state.

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
    res, err := s.Matters.VaultMattersReopen(ctx, operations.VaultMattersReopenRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "odio": "occaecati",
            "voluptatibus": "quisquam",
            "vero": "omnis",
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("consectetur"),
        MatterID: "vero",
        OauthToken: sdk.String("tenetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.VaultMattersReopenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReopenMatterResponse != nil {
        // handle response
    }
}
```

## VaultMattersSavedQueriesCreate

Creates a saved query.

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
    res, err := s.Matters.VaultMattersSavedQueriesCreate(ctx, operations.VaultMattersSavedQueriesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SavedQuery: &shared.SavedQuery{
            CreateTime: sdk.String("odio"),
            DisplayName: sdk.String("similique"),
            MatterID: sdk.String("facilis"),
            Query: &shared.Query{
                AccountInfo: &shared.AccountInfo{
                    Emails: []string{
                        "ducimus",
                        "dolore",
                        "quibusdam",
                        "illum",
                    },
                },
                Corpus: shared.QueryCorpusEnumDrive.ToPointer(),
                DataScope: shared.QueryDataScopeEnumHeldData.ToPointer(),
                DriveOptions: &shared.DriveOptions{
                    ClientSideEncryptedOption: shared.DriveOptionsClientSideEncryptedOptionEnumClientSideEncryptedOptionUnencrypted.ToPointer(),
                    IncludeSharedDrives: sdk.Bool(false),
                    IncludeTeamDrives: sdk.Bool(false),
                    VersionDate: sdk.String("aut"),
                },
                EndTime: sdk.String("voluptatibus"),
                HangoutsChatInfo: &shared.HangoutsChatInfo{
                    RoomID: []string{
                        "nulla",
                        "fugit",
                    },
                },
                HangoutsChatOptions: &shared.HangoutsChatOptions{
                    IncludeRooms: sdk.Bool(false),
                },
                MailOptions: &shared.MailOptions{
                    ClientSideEncryptedOption: shared.MailOptionsClientSideEncryptedOptionEnumClientSideEncryptedOptionUnencrypted.ToPointer(),
                    ExcludeDrafts: sdk.Bool(false),
                },
                Method: shared.QueryMethodEnumSharedDrive.ToPointer(),
                OrgUnitInfo: &shared.OrgUnitInfo{
                    OrgUnitID: sdk.String("doloribus"),
                },
                SearchMethod: shared.QuerySearchMethodEnumTeamDrive.ToPointer(),
                SharedDriveInfo: &shared.SharedDriveInfo{
                    SharedDriveIds: []string{
                        "ducimus",
                        "alias",
                        "officia",
                        "tempora",
                    },
                },
                SitesURLInfo: &shared.SitesURLInfo{
                    Urls: []string{
                        "ea",
                        "aspernatur",
                    },
                },
                StartTime: sdk.String("vel"),
                TeamDriveInfo: &shared.TeamDriveInfo{
                    TeamDriveIds: []string{
                        "magnam",
                        "ratione",
                        "ex",
                        "laudantium",
                    },
                },
                Terms: sdk.String("dicta"),
                TimeZone: sdk.String("dolor"),
                VoiceOptions: &shared.VoiceOptions{
                    CoveredData: []shared.VoiceOptionsCoveredDataEnum{
                        shared.VoiceOptionsCoveredDataEnumCoveredDataUnspecified,
                        shared.VoiceOptionsCoveredDataEnumTextMessages,
                        shared.VoiceOptionsCoveredDataEnumCallLogs,
                        shared.VoiceOptionsCoveredDataEnumVoicemails,
                    },
                },
            },
            SavedQueryID: sdk.String("voluptatibus"),
        },
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("ea"),
        MatterID: "impedit",
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veniam"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.VaultMattersSavedQueriesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SavedQuery != nil {
        // handle response
    }
}
```

## VaultMattersSavedQueriesDelete

Deletes the specified saved query.

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
    res, err := s.Matters.VaultMattersSavedQueriesDelete(ctx, operations.VaultMattersSavedQueriesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("aspernatur"),
        MatterID: "minima",
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        SavedQueryID: "libero",
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("aut"),
    }, operations.VaultMattersSavedQueriesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## VaultMattersSavedQueriesGet

Retrieves the specified saved query.

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
    res, err := s.Matters.VaultMattersSavedQueriesGet(ctx, operations.VaultMattersSavedQueriesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("inventore"),
        MatterID: "non",
        OauthToken: sdk.String("et"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        SavedQueryID: "laborum",
        UploadType: sdk.String("placeat"),
        UploadProtocol: sdk.String("velit"),
    }, operations.VaultMattersSavedQueriesGetSecurity{
        Option1: &operations.VaultMattersSavedQueriesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SavedQuery != nil {
        // handle response
    }
}
```

## VaultMattersSavedQueriesList

Lists the saved queries in a matter.

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
    res, err := s.Matters.VaultMattersSavedQueriesList(ctx, operations.VaultMattersSavedQueriesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("autem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("assumenda"),
        Key: sdk.String("nulla"),
        MatterID: "voluptas",
        OauthToken: sdk.String("libero"),
        PageSize: sdk.Int64(96549),
        PageToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("provident"),
    }, operations.VaultMattersSavedQueriesListSecurity{
        Option1: &operations.VaultMattersSavedQueriesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSavedQueriesResponse != nil {
        // handle response
    }
}
```

## VaultMattersUndelete

Undeletes the specified matter. Returns the matter with updated state.

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
    res, err := s.Matters.VaultMattersUndelete(ctx, operations.VaultMattersUndeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "magnam": "odio",
            "eius": "esse",
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("reprehenderit"),
        Key: sdk.String("quidem"),
        MatterID: "fugiat",
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("assumenda"),
    }, operations.VaultMattersUndeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Matter != nil {
        // handle response
    }
}
```

## VaultMattersUpdate

Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.

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
    res, err := s.Matters.VaultMattersUpdate(ctx, operations.VaultMattersUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Matter: &shared.Matter{
            Description: sdk.String("praesentium"),
            MatterID: sdk.String("quisquam"),
            MatterPermissions: []shared.MatterPermission{
                shared.MatterPermission{
                    AccountID: sdk.String("ipsa"),
                    Role: shared.MatterPermissionRoleEnumCollaborator.ToPointer(),
                },
            },
            Name: sdk.String("Luis Satterfield"),
            State: shared.MatterStateEnumClosed.ToPointer(),
        },
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("ab"),
        Key: sdk.String("cupiditate"),
        MatterID: "consequatur",
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.VaultMattersUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Matter != nil {
        // handle response
    }
}
```
