# Myconfig

### Available Operations

* [BooksMyconfigGetUserSettings](#booksmyconfiggetusersettings) - Gets the current settings for the user.
* [BooksMyconfigReleaseDownloadAccess](#booksmyconfigreleasedownloadaccess) - Release downloaded content access restriction.
* [BooksMyconfigRequestAccess](#booksmyconfigrequestaccess) - Request concurrent and download access restrictions.
* [BooksMyconfigSyncVolumeLicenses](#booksmyconfigsyncvolumelicenses) - Request downloaded content access for specified volumes on the My eBooks shelf.
* [BooksMyconfigUpdateUserSettings](#booksmyconfigupdateusersettings) - Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

## BooksMyconfigGetUserSettings

Gets the current settings for the user.

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
    res, err := s.Myconfig.BooksMyconfigGetUserSettings(ctx, operations.BooksMyconfigGetUserSettingsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Country: sdk.String("Saint Helena"),
        Fields: sdk.String("eum"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("et"),
    }, operations.BooksMyconfigGetUserSettingsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Usersettings != nil {
        // handle response
    }
}
```

## BooksMyconfigReleaseDownloadAccess

Release downloaded content access restriction.

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
    res, err := s.Myconfig.BooksMyconfigReleaseDownloadAccess(ctx, operations.BooksMyconfigReleaseDownloadAccessRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Cpksver: "sint",
        Fields: sdk.String("accusantium"),
        Key: sdk.String("mollitia"),
        Locale: sdk.String("reiciendis"),
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        Source: sdk.String("eum"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("necessitatibus"),
        VolumeIds: []string{
            "nemo",
        },
    }, operations.BooksMyconfigReleaseDownloadAccessSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadAccesses != nil {
        // handle response
    }
}
```

## BooksMyconfigRequestAccess

Request concurrent and download access restrictions.

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
    res, err := s.Myconfig.BooksMyconfigRequestAccess(ctx, operations.BooksMyconfigRequestAccessRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        Cpksver: "eius",
        Fields: sdk.String("maxime"),
        Key: sdk.String("deleniti"),
        LicenseTypes: operations.BooksMyconfigRequestAccessLicenseTypesEnumConcurrent.ToPointer(),
        Locale: sdk.String("in"),
        Nonce: "architecto",
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        Source: "ullam",
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("nihil"),
        VolumeID: "repellat",
    }, operations.BooksMyconfigRequestAccessSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestAccessData != nil {
        // handle response
    }
}
```

## BooksMyconfigSyncVolumeLicenses

Request downloaded content access for specified volumes on the My eBooks shelf.

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
    res, err := s.Myconfig.BooksMyconfigSyncVolumeLicenses(ctx, operations.BooksMyconfigSyncVolumeLicensesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("pariatur"),
        Cpksver: "accusantium",
        Features: []BooksMyconfigSyncVolumeLicensesFeaturesEnum{
            operations.BooksMyconfigSyncVolumeLicensesFeaturesEnumRentals,
        },
        Fields: sdk.String("natus"),
        IncludeNonComicsSeries: sdk.Bool(false),
        Key: sdk.String("magni"),
        Locale: sdk.String("sunt"),
        Nonce: "quo",
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        ShowPreorders: sdk.Bool(false),
        Source: "maxime",
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("excepturi"),
        VolumeIds: []string{
            "ea",
        },
    }, operations.BooksMyconfigSyncVolumeLicensesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volumes != nil {
        // handle response
    }
}
```

## BooksMyconfigUpdateUserSettings

Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

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
    res, err := s.Myconfig.BooksMyconfigUpdateUserSettings(ctx, operations.BooksMyconfigUpdateUserSettingsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Usersettings: &shared.Usersettings{
            Kind: sdk.String("ab"),
            NotesExport: &shared.UsersettingsNotesExport{
                FolderName: sdk.String("maiores"),
                IsEnabled: sdk.Bool(false),
            },
            Notification: &shared.UsersettingsNotification{
                MatchMyInterests: &shared.UsersettingsNotificationMatchMyInterests{
                    OptedState: sdk.String("quidem"),
                },
                MoreFromAuthors: &shared.UsersettingsNotificationMoreFromAuthors{
                    OptedState: sdk.String("ipsam"),
                },
                MoreFromSeries: &shared.UsersettingsNotificationMoreFromSeries{
                    OptedState: sdk.String("voluptate"),
                },
                PriceDrop: &shared.UsersettingsNotificationPriceDrop{
                    OptedState: sdk.String("autem"),
                },
                RewardExpirations: &shared.UsersettingsNotificationRewardExpirations{
                    OptedState: sdk.String("nam"),
                },
            },
        },
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.BooksMyconfigUpdateUserSettingsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Usersettings != nil {
        // handle response
    }
}
```
