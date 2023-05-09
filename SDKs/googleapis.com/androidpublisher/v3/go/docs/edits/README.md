# Edits

### Available Operations

* [AndroidpublisherEditsApksAddexternallyhosted](#androidpublishereditsapksaddexternallyhosted) - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
* [AndroidpublisherEditsApksList](#androidpublishereditsapkslist) - Lists all current APKs of the app and edit.
* [AndroidpublisherEditsApksUpload](#androidpublishereditsapksupload) - Uploads an APK and adds to the current edit.
* [AndroidpublisherEditsBundlesList](#androidpublishereditsbundleslist) - Lists all current Android App Bundles of the app and edit.
* [AndroidpublisherEditsBundlesUpload](#androidpublishereditsbundlesupload) - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* [AndroidpublisherEditsCommit](#androidpublishereditscommit) - Commits an app edit.
* [AndroidpublisherEditsCountryavailabilityGet](#androidpublishereditscountryavailabilityget) - Gets country availability.
* [AndroidpublisherEditsDelete](#androidpublishereditsdelete) - Deletes an app edit.
* [AndroidpublisherEditsDeobfuscationfilesUpload](#androidpublishereditsdeobfuscationfilesupload) - Uploads a new deobfuscation file and attaches to the specified APK.
* [AndroidpublisherEditsDetailsGet](#androidpublishereditsdetailsget) - Gets details of an app.
* [AndroidpublisherEditsDetailsPatch](#androidpublishereditsdetailspatch) - Patches details of an app.
* [AndroidpublisherEditsDetailsUpdate](#androidpublishereditsdetailsupdate) - Updates details of an app.
* [AndroidpublisherEditsExpansionfilesGet](#androidpublishereditsexpansionfilesget) - Fetches the expansion file configuration for the specified APK.
* [AndroidpublisherEditsExpansionfilesPatch](#androidpublishereditsexpansionfilespatch) - Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* [AndroidpublisherEditsExpansionfilesUpdate](#androidpublishereditsexpansionfilesupdate) - Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* [AndroidpublisherEditsExpansionfilesUpload](#androidpublishereditsexpansionfilesupload) - Uploads a new expansion file and attaches to the specified APK.
* [AndroidpublisherEditsGet](#androidpublishereditsget) - Gets an app edit.
* [AndroidpublisherEditsImagesDelete](#androidpublishereditsimagesdelete) - Deletes the image (specified by id) from the edit.
* [AndroidpublisherEditsImagesDeleteall](#androidpublishereditsimagesdeleteall) - Deletes all images for the specified language and image type. Returns an empty response if no images are found.
* [AndroidpublisherEditsImagesList](#androidpublishereditsimageslist) - Lists all images. The response may be empty.
* [AndroidpublisherEditsImagesUpload](#androidpublishereditsimagesupload) - Uploads an image of the specified language and image type, and adds to the edit.
* [AndroidpublisherEditsInsert](#androidpublishereditsinsert) - Creates a new edit for an app.
* [AndroidpublisherEditsListingsDelete](#androidpublishereditslistingsdelete) - Deletes a localized store listing.
* [AndroidpublisherEditsListingsDeleteall](#androidpublishereditslistingsdeleteall) - Deletes all store listings.
* [AndroidpublisherEditsListingsGet](#androidpublishereditslistingsget) - Gets a localized store listing.
* [AndroidpublisherEditsListingsList](#androidpublishereditslistingslist) - Lists all localized store listings.
* [AndroidpublisherEditsListingsPatch](#androidpublishereditslistingspatch) - Patches a localized store listing.
* [AndroidpublisherEditsListingsUpdate](#androidpublishereditslistingsupdate) - Creates or updates a localized store listing.
* [AndroidpublisherEditsTestersGet](#androidpublishereditstestersget) - Gets testers. Note: Testers resource does not support email lists.
* [AndroidpublisherEditsTestersPatch](#androidpublishereditstesterspatch) - Patches testers. Note: Testers resource does not support email lists.
* [AndroidpublisherEditsTestersUpdate](#androidpublishereditstestersupdate) - Updates testers. Note: Testers resource does not support email lists.
* [AndroidpublisherEditsTracksGet](#androidpublishereditstracksget) - Gets a track.
* [AndroidpublisherEditsTracksList](#androidpublishereditstrackslist) - Lists all tracks.
* [AndroidpublisherEditsTracksPatch](#androidpublishereditstrackspatch) - Patches a track.
* [AndroidpublisherEditsTracksUpdate](#androidpublishereditstracksupdate) - Updates a track.
* [AndroidpublisherEditsValidate](#androidpublishereditsvalidate) - Validates an app edit.

## AndroidpublisherEditsApksAddexternallyhosted

Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.

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
    res, err := s.Edits.AndroidpublisherEditsApksAddexternallyhosted(ctx, operations.AndroidpublisherEditsApksAddexternallyhostedRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ApksAddExternallyHostedRequest: &shared.ApksAddExternallyHostedRequest{
            ExternallyHostedApk: &shared.ExternallyHostedApk{
                ApplicationLabel: sdk.String("dolores"),
                CertificateBase64s: []string{
                    "molestiae",
                    "accusantium",
                    "porro",
                },
                ExternallyHostedURL: sdk.String("eum"),
                FileSha1Base64: sdk.String("quas"),
                FileSha256Base64: sdk.String("praesentium"),
                FileSize: sdk.String("consequuntur"),
                IconBase64: sdk.String("deleniti"),
                MaximumSDK: sdk.Int(143829),
                MinimumSDK: sdk.Int(681393),
                NativeCodes: []string{
                    "incidunt",
                    "atque",
                    "explicabo",
                },
                PackageName: sdk.String("minima"),
                UsesFeatures: []string{
                    "fugit",
                    "sapiente",
                },
                UsesPermissions: []shared.UsesPermission{
                    shared.UsesPermission{
                        MaxSDKVersion: sdk.Int(187131),
                        Name: sdk.String("Kerry Mayert IV"),
                    },
                },
                VersionCode: sdk.Int(910545),
                VersionName: sdk.String("accusamus"),
            },
        },
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        EditID: "nam",
        Fields: sdk.String("vero"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("quasi"),
        PackageName: "saepe",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.AndroidpublisherEditsApksAddexternallyhostedSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApksAddExternallyHostedResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsApksList

Lists all current APKs of the app and edit.

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
    res, err := s.Edits.AndroidpublisherEditsApksList(ctx, operations.AndroidpublisherEditsApksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("distinctio"),
        EditID: "eligendi",
        Fields: sdk.String("sit"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("tempore"),
        PackageName: "adipisci",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.AndroidpublisherEditsApksListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApksListResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsApksUpload

Uploads an APK and adds to the current edit.

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
    res, err := s.Edits.AndroidpublisherEditsApksUpload(ctx, operations.AndroidpublisherEditsApksUploadRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consectetur"),
        EditID: "esse",
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("a"),
        PackageName: "nulla",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.AndroidpublisherEditsApksUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Apk != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsBundlesList

Lists all current Android App Bundles of the app and edit.

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
    res, err := s.Edits.AndroidpublisherEditsBundlesList(ctx, operations.AndroidpublisherEditsBundlesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("pariatur"),
        EditID: "possimus",
        Fields: sdk.String("quia"),
        Key: sdk.String("eveniet"),
        OauthToken: sdk.String("asperiores"),
        PackageName: "facere",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.AndroidpublisherEditsBundlesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BundlesListResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsBundlesUpload

Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

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
    res, err := s.Edits.AndroidpublisherEditsBundlesUpload(ctx, operations.AndroidpublisherEditsBundlesUploadRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("culpa"),
        AckBundleInstallationWarning: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tenetur"),
        DeviceTierConfigID: sdk.String("quae"),
        EditID: "earum",
        Fields: sdk.String("vel"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("eius"),
        PackageName: "libero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.AndroidpublisherEditsBundlesUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bundle != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsCommit

Commits an app edit.

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
    res, err := s.Edits.AndroidpublisherEditsCommit(ctx, operations.AndroidpublisherEditsCommitRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ullam"),
        ChangesNotSentForReview: sdk.Bool(false),
        EditID: "reprehenderit",
        Fields: sdk.String("ullam"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("aut"),
        PackageName: "voluptatum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("ex"),
    }, operations.AndroidpublisherEditsCommitSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppEdit != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsCountryavailabilityGet

Gets country availability.

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
    res, err := s.Edits.AndroidpublisherEditsCountryavailabilityGet(ctx, operations.AndroidpublisherEditsCountryavailabilityGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        EditID: "omnis",
        Fields: sdk.String("tenetur"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("at"),
        PackageName: "et",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        Track: "ipsa",
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.AndroidpublisherEditsCountryavailabilityGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrackCountryAvailability != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsDelete

Deletes an app edit.

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
    res, err := s.Edits.AndroidpublisherEditsDelete(ctx, operations.AndroidpublisherEditsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("temporibus"),
        EditID: "accusantium",
        Fields: sdk.String("rem"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("laudantium"),
        PackageName: "eum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("corrupti"),
    }, operations.AndroidpublisherEditsDeleteSecurity{
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

## AndroidpublisherEditsDeobfuscationfilesUpload

Uploads a new deobfuscation file and attaches to the specified APK.

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
    res, err := s.Edits.AndroidpublisherEditsDeobfuscationfilesUpload(ctx, operations.AndroidpublisherEditsDeobfuscationfilesUploadRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        ApkVersionCode: 580152,
        Callback: sdk.String("numquam"),
        DeobfuscationFileType: operations.AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnumNativeCode,
        EditID: "explicabo",
        Fields: sdk.String("voluptas"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("dignissimos"),
        PackageName: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("velit"),
    }, operations.AndroidpublisherEditsDeobfuscationfilesUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeobfuscationFilesUploadResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsDetailsGet

Gets details of an app.

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
    res, err := s.Edits.AndroidpublisherEditsDetailsGet(ctx, operations.AndroidpublisherEditsDetailsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aperiam"),
        EditID: "ea",
        Fields: sdk.String("quaerat"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("repellendus"),
        PackageName: "officia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("officia"),
    }, operations.AndroidpublisherEditsDetailsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppDetails != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsDetailsPatch

Patches details of an app.

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
    res, err := s.Edits.AndroidpublisherEditsDetailsPatch(ctx, operations.AndroidpublisherEditsDetailsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AppDetails: &shared.AppDetails{
            ContactEmail: sdk.String("nemo"),
            ContactPhone: sdk.String("quae"),
            ContactWebsite: sdk.String("quaerat"),
            DefaultLanguage: sdk.String("porro"),
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ab"),
        EditID: "adipisci",
        Fields: sdk.String("fuga"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("suscipit"),
        PackageName: "velit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.AndroidpublisherEditsDetailsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppDetails != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsDetailsUpdate

Updates details of an app.

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
    res, err := s.Edits.AndroidpublisherEditsDetailsUpdate(ctx, operations.AndroidpublisherEditsDetailsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AppDetails: &shared.AppDetails{
            ContactEmail: sdk.String("fugiat"),
            ContactPhone: sdk.String("vel"),
            ContactWebsite: sdk.String("ducimus"),
            DefaultLanguage: sdk.String("quos"),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("possimus"),
        EditID: "facilis",
        Fields: sdk.String("cum"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("in"),
        PackageName: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.AndroidpublisherEditsDetailsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppDetails != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsExpansionfilesGet

Fetches the expansion file configuration for the specified APK.

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
    res, err := s.Edits.AndroidpublisherEditsExpansionfilesGet(ctx, operations.AndroidpublisherEditsExpansionfilesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        ApkVersionCode: 738683,
        Callback: sdk.String("consectetur"),
        EditID: "in",
        ExpansionFileType: operations.AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnumMain,
        Fields: sdk.String("earum"),
        Key: sdk.String("facere"),
        OauthToken: sdk.String("numquam"),
        PackageName: "doloribus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.AndroidpublisherEditsExpansionfilesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExpansionFile != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsExpansionfilesPatch

Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.

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
    res, err := s.Edits.AndroidpublisherEditsExpansionfilesPatch(ctx, operations.AndroidpublisherEditsExpansionfilesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ExpansionFile: &shared.ExpansionFile{
            FileSize: sdk.String("necessitatibus"),
            ReferencesVersion: sdk.Int(296556),
        },
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        ApkVersionCode: 241545,
        Callback: sdk.String("non"),
        EditID: "amet",
        ExpansionFileType: operations.AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnumExpansionFileTypeUnspecified,
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("debitis"),
        PackageName: "consectetur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.AndroidpublisherEditsExpansionfilesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExpansionFile != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsExpansionfilesUpdate

Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.

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
    res, err := s.Edits.AndroidpublisherEditsExpansionfilesUpdate(ctx, operations.AndroidpublisherEditsExpansionfilesUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ExpansionFile: &shared.ExpansionFile{
            FileSize: sdk.String("voluptates"),
            ReferencesVersion: sdk.Int(730709),
        },
        AccessToken: sdk.String("vitae"),
        Alt: shared.AltEnumProto.ToPointer(),
        ApkVersionCode: 631126,
        Callback: sdk.String("tempora"),
        EditID: "aspernatur",
        ExpansionFileType: operations.AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnumMain,
        Fields: sdk.String("voluptas"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("minima"),
        PackageName: "nobis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("minus"),
    }, operations.AndroidpublisherEditsExpansionfilesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExpansionFile != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsExpansionfilesUpload

Uploads a new expansion file and attaches to the specified APK.

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
    res, err := s.Edits.AndroidpublisherEditsExpansionfilesUpload(ctx, operations.AndroidpublisherEditsExpansionfilesUploadRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        ApkVersionCode: 296242,
        Callback: sdk.String("aliquam"),
        EditID: "officiis",
        ExpansionFileType: operations.AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnumPatch,
        Fields: sdk.String("ullam"),
        Key: sdk.String("adipisci"),
        OauthToken: sdk.String("cum"),
        PackageName: "blanditiis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("nesciunt"),
    }, operations.AndroidpublisherEditsExpansionfilesUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExpansionFilesUploadResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsGet

Gets an app edit.

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
    res, err := s.Edits.AndroidpublisherEditsGet(ctx, operations.AndroidpublisherEditsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        EditID: "hic",
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("sit"),
        PackageName: "rerum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.AndroidpublisherEditsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppEdit != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsImagesDelete

Deletes the image (specified by id) from the edit.

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
    res, err := s.Edits.AndroidpublisherEditsImagesDelete(ctx, operations.AndroidpublisherEditsImagesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("expedita"),
        EditID: "ab",
        Fields: sdk.String("iste"),
        ImageID: "dolore",
        ImageType: operations.AndroidpublisherEditsImagesDeleteImageTypeEnumIcon,
        Key: sdk.String("sed"),
        Language: "in",
        OauthToken: sdk.String("commodi"),
        PackageName: "quidem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("unde"),
    }, operations.AndroidpublisherEditsImagesDeleteSecurity{
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

## AndroidpublisherEditsImagesDeleteall

Deletes all images for the specified language and image type. Returns an empty response if no images are found.

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
    res, err := s.Edits.AndroidpublisherEditsImagesDeleteall(ctx, operations.AndroidpublisherEditsImagesDeleteallRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        EditID: "illo",
        Fields: sdk.String("reiciendis"),
        ImageType: operations.AndroidpublisherEditsImagesDeleteallImageTypeEnumAppImageTypeUnspecified,
        Key: sdk.String("corrupti"),
        Language: "maiores",
        OauthToken: sdk.String("incidunt"),
        PackageName: "sed",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.AndroidpublisherEditsImagesDeleteallSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagesDeleteAllResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsImagesList

Lists all images. The response may be empty.

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
    res, err := s.Edits.AndroidpublisherEditsImagesList(ctx, operations.AndroidpublisherEditsImagesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        EditID: "voluptatibus",
        Fields: sdk.String("tempora"),
        ImageType: operations.AndroidpublisherEditsImagesListImageTypeEnumSevenInchScreenshots,
        Key: sdk.String("voluptate"),
        Language: "reiciendis",
        OauthToken: sdk.String("ex"),
        PackageName: "sit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.AndroidpublisherEditsImagesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagesListResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsImagesUpload

Uploads an image of the specified language and image type, and adds to the edit.

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
    res, err := s.Edits.AndroidpublisherEditsImagesUpload(ctx, operations.AndroidpublisherEditsImagesUploadRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        EditID: "debitis",
        Fields: sdk.String("rem"),
        ImageType: operations.AndroidpublisherEditsImagesUploadImageTypeEnumAppImageTypeUnspecified,
        Key: sdk.String("nobis"),
        Language: "error",
        OauthToken: sdk.String("veniam"),
        PackageName: "minima",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("nulla"),
    }, operations.AndroidpublisherEditsImagesUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagesUploadResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsInsert

Creates a new edit for an app.

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
    res, err := s.Edits.AndroidpublisherEditsInsert(ctx, operations.AndroidpublisherEditsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("officiis"),
        PackageName: "beatae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laudantium"),
        UploadType: sdk.String("exercitationem"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.AndroidpublisherEditsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppEdit != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsListingsDelete

Deletes a localized store listing.

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
    res, err := s.Edits.AndroidpublisherEditsListingsDelete(ctx, operations.AndroidpublisherEditsListingsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatum"),
        EditID: "error",
        Fields: sdk.String("hic"),
        Key: sdk.String("expedita"),
        Language: "debitis",
        OauthToken: sdk.String("neque"),
        PackageName: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.AndroidpublisherEditsListingsDeleteSecurity{
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

## AndroidpublisherEditsListingsDeleteall

Deletes all store listings.

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
    res, err := s.Edits.AndroidpublisherEditsListingsDeleteall(ctx, operations.AndroidpublisherEditsListingsDeleteallRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("atque"),
        EditID: "fugit",
        Fields: sdk.String("ut"),
        Key: sdk.String("fugiat"),
        OauthToken: sdk.String("voluptatem"),
        PackageName: "culpa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.AndroidpublisherEditsListingsDeleteallSecurity{
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

## AndroidpublisherEditsListingsGet

Gets a localized store listing.

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
    res, err := s.Edits.AndroidpublisherEditsListingsGet(ctx, operations.AndroidpublisherEditsListingsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatum"),
        EditID: "quas",
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("corporis"),
        Language: "et",
        OauthToken: sdk.String("blanditiis"),
        PackageName: "ex",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("vel"),
    }, operations.AndroidpublisherEditsListingsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Listing != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsListingsList

Lists all localized store listings.

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
    res, err := s.Edits.AndroidpublisherEditsListingsList(ctx, operations.AndroidpublisherEditsListingsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consequatur"),
        EditID: "incidunt",
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("harum"),
        PackageName: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("labore"),
    }, operations.AndroidpublisherEditsListingsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListingsListResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsListingsPatch

Patches a localized store listing.

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
    res, err := s.Edits.AndroidpublisherEditsListingsPatch(ctx, operations.AndroidpublisherEditsListingsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Listing: &shared.Listing{
            FullDescription: sdk.String("atque"),
            Language: sdk.String("laborum"),
            ShortDescription: sdk.String("nam"),
            Title: sdk.String("Dr."),
            Video: sdk.String("laboriosam"),
        },
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        EditID: "voluptate",
        Fields: sdk.String("unde"),
        Key: sdk.String("reiciendis"),
        Language: "provident",
        OauthToken: sdk.String("repellendus"),
        PackageName: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("est"),
    }, operations.AndroidpublisherEditsListingsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Listing != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsListingsUpdate

Creates or updates a localized store listing.

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
    res, err := s.Edits.AndroidpublisherEditsListingsUpdate(ctx, operations.AndroidpublisherEditsListingsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Listing: &shared.Listing{
            FullDescription: sdk.String("reprehenderit"),
            Language: sdk.String("facere"),
            ShortDescription: sdk.String("fuga"),
            Title: sdk.String("Ms."),
            Video: sdk.String("mollitia"),
        },
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quisquam"),
        EditID: "repudiandae",
        Fields: sdk.String("quasi"),
        Key: sdk.String("atque"),
        Language: "reprehenderit",
        OauthToken: sdk.String("asperiores"),
        PackageName: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("maxime"),
    }, operations.AndroidpublisherEditsListingsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Listing != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsTestersGet

Gets testers. Note: Testers resource does not support email lists.

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
    res, err := s.Edits.AndroidpublisherEditsTestersGet(ctx, operations.AndroidpublisherEditsTestersGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("assumenda"),
        EditID: "ea",
        Fields: sdk.String("atque"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("officiis"),
        PackageName: "officiis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        Track: "natus",
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.AndroidpublisherEditsTestersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Testers != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsTestersPatch

Patches testers. Note: Testers resource does not support email lists.

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
    res, err := s.Edits.AndroidpublisherEditsTestersPatch(ctx, operations.AndroidpublisherEditsTestersPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Testers: &shared.Testers{
            GoogleGroups: []string{
                "corrupti",
                "at",
                "error",
                "blanditiis",
            },
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("atque"),
        EditID: "atque",
        Fields: sdk.String("sunt"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("dolorum"),
        PackageName: "repellendus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        Track: "reiciendis",
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.AndroidpublisherEditsTestersPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Testers != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsTestersUpdate

Updates testers. Note: Testers resource does not support email lists.

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
    res, err := s.Edits.AndroidpublisherEditsTestersUpdate(ctx, operations.AndroidpublisherEditsTestersUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Testers: &shared.Testers{
            GoogleGroups: []string{
                "beatae",
            },
        },
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laboriosam"),
        EditID: "velit",
        Fields: sdk.String("a"),
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("magnam"),
        PackageName: "saepe",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        Track: "occaecati",
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("perspiciatis"),
    }, operations.AndroidpublisherEditsTestersUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Testers != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsTracksGet

Gets a track.

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
    res, err := s.Edits.AndroidpublisherEditsTracksGet(ctx, operations.AndroidpublisherEditsTracksGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("occaecati"),
        EditID: "consequuntur",
        Fields: sdk.String("fugit"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("quis"),
        PackageName: "reprehenderit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        Track: "illo",
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.AndroidpublisherEditsTracksGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Track != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsTracksList

Lists all tracks.

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
    res, err := s.Edits.AndroidpublisherEditsTracksList(ctx, operations.AndroidpublisherEditsTracksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("doloremque"),
        EditID: "iure",
        Fields: sdk.String("ipsa"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("quae"),
        PackageName: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eveniet"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("cum"),
    }, operations.AndroidpublisherEditsTracksListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TracksListResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsTracksPatch

Patches a track.

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
    res, err := s.Edits.AndroidpublisherEditsTracksPatch(ctx, operations.AndroidpublisherEditsTracksPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Track1: &shared.Track{
            Releases: []shared.TrackRelease{
                shared.TrackRelease{
                    CountryTargeting: &shared.CountryTargeting{
                        Countries: []string{
                            "laborum",
                        },
                        IncludeRestOfWorld: sdk.Bool(false),
                    },
                    InAppUpdatePriority: sdk.Int(715208),
                    Name: sdk.String("Jordan Haag"),
                    ReleaseNotes: []shared.LocalizedText{
                        shared.LocalizedText{
                            Language: sdk.String("corporis"),
                            Text: sdk.String("perspiciatis"),
                        },
                    },
                    Status: shared.TrackReleaseStatusEnumInProgress.ToPointer(),
                    UserFraction: sdk.Float64(6490.78),
                    VersionCodes: []string{
                        "alias",
                        "maiores",
                    },
                },
                shared.TrackRelease{
                    CountryTargeting: &shared.CountryTargeting{
                        Countries: []string{
                            "dolores",
                            "id",
                            "minima",
                            "dolore",
                        },
                        IncludeRestOfWorld: sdk.Bool(false),
                    },
                    InAppUpdatePriority: sdk.Int(680349),
                    Name: sdk.String("Amy Walsh"),
                    ReleaseNotes: []shared.LocalizedText{
                        shared.LocalizedText{
                            Language: sdk.String("ex"),
                            Text: sdk.String("ut"),
                        },
                        shared.LocalizedText{
                            Language: sdk.String("culpa"),
                            Text: sdk.String("adipisci"),
                        },
                    },
                    Status: shared.TrackReleaseStatusEnumCompleted.ToPointer(),
                    UserFraction: sdk.Float64(5145.13),
                    VersionCodes: []string{
                        "nemo",
                        "recusandae",
                    },
                },
                shared.TrackRelease{
                    CountryTargeting: &shared.CountryTargeting{
                        Countries: []string{
                            "provident",
                            "quis",
                        },
                        IncludeRestOfWorld: sdk.Bool(false),
                    },
                    InAppUpdatePriority: sdk.Int(431785),
                    Name: sdk.String("Terrence Collier MD"),
                    ReleaseNotes: []shared.LocalizedText{
                        shared.LocalizedText{
                            Language: sdk.String("mollitia"),
                            Text: sdk.String("provident"),
                        },
                        shared.LocalizedText{
                            Language: sdk.String("possimus"),
                            Text: sdk.String("animi"),
                        },
                    },
                    Status: shared.TrackReleaseStatusEnumInProgress.ToPointer(),
                    UserFraction: sdk.Float64(3972.57),
                    VersionCodes: []string{
                        "repellat",
                    },
                },
                shared.TrackRelease{
                    CountryTargeting: &shared.CountryTargeting{
                        Countries: []string{
                            "ullam",
                            "in",
                            "nam",
                            "earum",
                        },
                        IncludeRestOfWorld: sdk.Bool(false),
                    },
                    InAppUpdatePriority: sdk.Int(637583),
                    Name: sdk.String("Irving Gleichner"),
                    ReleaseNotes: []shared.LocalizedText{
                        shared.LocalizedText{
                            Language: sdk.String("sapiente"),
                            Text: sdk.String("cumque"),
                        },
                        shared.LocalizedText{
                            Language: sdk.String("vitae"),
                            Text: sdk.String("rerum"),
                        },
                        shared.LocalizedText{
                            Language: sdk.String("tempora"),
                            Text: sdk.String("quis"),
                        },
                        shared.LocalizedText{
                            Language: sdk.String("inventore"),
                            Text: sdk.String("fugit"),
                        },
                    },
                    Status: shared.TrackReleaseStatusEnumHalted.ToPointer(),
                    UserFraction: sdk.Float64(626.36),
                    VersionCodes: []string{
                        "velit",
                    },
                },
            },
            Track: sdk.String("aspernatur"),
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rem"),
        EditID: "at",
        Fields: sdk.String("impedit"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("sapiente"),
        PackageName: "eum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        TrackPathParameter: "minima",
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.AndroidpublisherEditsTracksPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Track != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsTracksUpdate

Updates a track.

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
    res, err := s.Edits.AndroidpublisherEditsTracksUpdate(ctx, operations.AndroidpublisherEditsTracksUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Track1: &shared.Track{
            Releases: []shared.TrackRelease{
                shared.TrackRelease{
                    CountryTargeting: &shared.CountryTargeting{
                        Countries: []string{
                            "hic",
                            "illum",
                            "eaque",
                        },
                        IncludeRestOfWorld: sdk.Bool(false),
                    },
                    InAppUpdatePriority: sdk.Int(935833),
                    Name: sdk.String("Cary Toy"),
                    ReleaseNotes: []shared.LocalizedText{
                        shared.LocalizedText{
                            Language: sdk.String("dolorem"),
                            Text: sdk.String("fugit"),
                        },
                        shared.LocalizedText{
                            Language: sdk.String("cumque"),
                            Text: sdk.String("fuga"),
                        },
                    },
                    Status: shared.TrackReleaseStatusEnumStatusUnspecified.ToPointer(),
                    UserFraction: sdk.Float64(6567.62),
                    VersionCodes: []string{
                        "nulla",
                        "consequatur",
                        "quasi",
                        "et",
                    },
                },
                shared.TrackRelease{
                    CountryTargeting: &shared.CountryTargeting{
                        Countries: []string{
                            "natus",
                            "occaecati",
                        },
                        IncludeRestOfWorld: sdk.Bool(false),
                    },
                    InAppUpdatePriority: sdk.Int(382440),
                    Name: sdk.String("Joyce Cummings"),
                    ReleaseNotes: []shared.LocalizedText{
                        shared.LocalizedText{
                            Language: sdk.String("ipsa"),
                            Text: sdk.String("tempora"),
                        },
                        shared.LocalizedText{
                            Language: sdk.String("nihil"),
                            Text: sdk.String("molestiae"),
                        },
                        shared.LocalizedText{
                            Language: sdk.String("dicta"),
                            Text: sdk.String("iusto"),
                        },
                        shared.LocalizedText{
                            Language: sdk.String("esse"),
                            Text: sdk.String("praesentium"),
                        },
                    },
                    Status: shared.TrackReleaseStatusEnumCompleted.ToPointer(),
                    UserFraction: sdk.Float64(9672.6),
                    VersionCodes: []string{
                        "architecto",
                        "fugiat",
                    },
                },
                shared.TrackRelease{
                    CountryTargeting: &shared.CountryTargeting{
                        Countries: []string{
                            "dicta",
                        },
                        IncludeRestOfWorld: sdk.Bool(false),
                    },
                    InAppUpdatePriority: sdk.Int(483706),
                    Name: sdk.String("Joy Jacobson"),
                    ReleaseNotes: []shared.LocalizedText{
                        shared.LocalizedText{
                            Language: sdk.String("laborum"),
                            Text: sdk.String("sunt"),
                        },
                    },
                    Status: shared.TrackReleaseStatusEnumDraft.ToPointer(),
                    UserFraction: sdk.Float64(8567.56),
                    VersionCodes: []string{
                        "aliquid",
                        "officia",
                        "suscipit",
                    },
                },
                shared.TrackRelease{
                    CountryTargeting: &shared.CountryTargeting{
                        Countries: []string{
                            "perferendis",
                            "eum",
                        },
                        IncludeRestOfWorld: sdk.Bool(false),
                    },
                    InAppUpdatePriority: sdk.Int(374753),
                    Name: sdk.String("Alfonso Bernier"),
                    ReleaseNotes: []shared.LocalizedText{
                        shared.LocalizedText{
                            Language: sdk.String("mollitia"),
                            Text: sdk.String("laborum"),
                        },
                        shared.LocalizedText{
                            Language: sdk.String("libero"),
                            Text: sdk.String("ad"),
                        },
                        shared.LocalizedText{
                            Language: sdk.String("deleniti"),
                            Text: sdk.String("enim"),
                        },
                        shared.LocalizedText{
                            Language: sdk.String("vitae"),
                            Text: sdk.String("repellendus"),
                        },
                    },
                    Status: shared.TrackReleaseStatusEnumInProgress.ToPointer(),
                    UserFraction: sdk.Float64(7758.03),
                    VersionCodes: []string{
                        "ut",
                        "ad",
                    },
                },
            },
            Track: sdk.String("expedita"),
        },
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        EditID: "aliquid",
        Fields: sdk.String("beatae"),
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("omnis"),
        PackageName: "veritatis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        TrackPathParameter: "est",
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("voluptatem"),
    }, operations.AndroidpublisherEditsTracksUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Track != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsValidate

Validates an app edit.

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
    res, err := s.Edits.AndroidpublisherEditsValidate(ctx, operations.AndroidpublisherEditsValidateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fuga"),
        EditID: "pariatur",
        Fields: sdk.String("debitis"),
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("alias"),
        PackageName: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.AndroidpublisherEditsValidateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppEdit != nil {
        // handle response
    }
}
```
