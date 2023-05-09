# Edits

### Available Operations

* [AndroidpublisherEditsApklistingsDelete](#androidpublishereditsapklistingsdelete) - Deletes the APK-specific localized listing for a specified APK and language code.
* [AndroidpublisherEditsApklistingsDeleteall](#androidpublishereditsapklistingsdeleteall) - Deletes all the APK-specific localized listings for a specified APK.
* [AndroidpublisherEditsApklistingsGet](#androidpublishereditsapklistingsget) - Fetches the APK-specific localized listing for a specified APK and language code.
* [AndroidpublisherEditsApklistingsList](#androidpublishereditsapklistingslist) - Lists all the APK-specific localized listings for a specified APK.
* [AndroidpublisherEditsApklistingsPatch](#androidpublishereditsapklistingspatch) - Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.
* [AndroidpublisherEditsApklistingsUpdate](#androidpublishereditsapklistingsupdate) - Updates or creates the APK-specific localized listing for a specified APK and language code.
* [AndroidpublisherEditsApksAddexternallyhosted](#androidpublishereditsapksaddexternallyhosted) - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.
* [AndroidpublisherEditsApksList](#androidpublishereditsapkslist)
* [AndroidpublisherEditsApksUpload](#androidpublishereditsapksupload)
* [AndroidpublisherEditsBundlesList](#androidpublishereditsbundleslist)
* [AndroidpublisherEditsBundlesUpload](#androidpublishereditsbundlesupload) - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
* [AndroidpublisherEditsCommit](#androidpublishereditscommit) - Commits/applies the changes made in this edit back to the app.
* [AndroidpublisherEditsDelete](#androidpublishereditsdelete) - Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
* [AndroidpublisherEditsDeobfuscationfilesUpload](#androidpublishereditsdeobfuscationfilesupload) - Uploads the deobfuscation file of the specified APK. If a deobfuscation or symbolication file already exists, it will be replaced. See https://developer.android.com/studio/build/shrink-code to learn more about deobfuscation files.
* [AndroidpublisherEditsDetailsGet](#androidpublishereditsdetailsget) - Fetches app details for this edit. This includes the default language and developer support contact information.
* [AndroidpublisherEditsDetailsPatch](#androidpublishereditsdetailspatch) - Updates app details for this edit. This method supports patch semantics.
* [AndroidpublisherEditsDetailsUpdate](#androidpublishereditsdetailsupdate) - Updates app details for this edit.
* [AndroidpublisherEditsExpansionfilesGet](#androidpublishereditsexpansionfilesget) - Fetches the Expansion File configuration for the APK specified.
* [AndroidpublisherEditsExpansionfilesPatch](#androidpublishereditsexpansionfilespatch) - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
* [AndroidpublisherEditsExpansionfilesUpdate](#androidpublishereditsexpansionfilesupdate) - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
* [AndroidpublisherEditsExpansionfilesUpload](#androidpublishereditsexpansionfilesupload) - Uploads and attaches a new Expansion File to the APK specified.
* [AndroidpublisherEditsGet](#androidpublishereditsget) - Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
* [AndroidpublisherEditsImagesDelete](#androidpublishereditsimagesdelete) - Deletes the image (specified by id) from the edit.
* [AndroidpublisherEditsImagesDeleteall](#androidpublishereditsimagesdeleteall) - Deletes all images for the specified language and image type.
* [AndroidpublisherEditsImagesList](#androidpublishereditsimageslist) - Lists all images for the specified language and image type.
* [AndroidpublisherEditsImagesUpload](#androidpublishereditsimagesupload) - Uploads a new image and adds it to the list of images for the specified language and image type.
* [AndroidpublisherEditsInsert](#androidpublishereditsinsert) - Creates a new edit for an app, populated with the app's current state.
* [AndroidpublisherEditsListingsDelete](#androidpublishereditslistingsdelete) - Deletes the specified localized store listing from an edit.
* [AndroidpublisherEditsListingsDeleteall](#androidpublishereditslistingsdeleteall) - Deletes all localized listings from an edit.
* [AndroidpublisherEditsListingsGet](#androidpublishereditslistingsget) - Fetches information about a localized store listing.
* [AndroidpublisherEditsListingsList](#androidpublishereditslistingslist) - Returns all of the localized store listings attached to this edit.
* [AndroidpublisherEditsListingsPatch](#androidpublishereditslistingspatch) - Creates or updates a localized store listing. This method supports patch semantics.
* [AndroidpublisherEditsListingsUpdate](#androidpublishereditslistingsupdate) - Creates or updates a localized store listing.
* [AndroidpublisherEditsTestersGet](#androidpublishereditstestersget)
* [AndroidpublisherEditsTestersPatch](#androidpublishereditstesterspatch)
* [AndroidpublisherEditsTestersUpdate](#androidpublishereditstestersupdate)
* [AndroidpublisherEditsTracksGet](#androidpublishereditstracksget) - Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
* [AndroidpublisherEditsTracksList](#androidpublishereditstrackslist) - Lists all the track configurations for this edit.
* [AndroidpublisherEditsTracksPatch](#androidpublishereditstrackspatch) - Updates the track configuration for the specified track type. This method supports patch semantics.
* [AndroidpublisherEditsTracksUpdate](#androidpublishereditstracksupdate) - Updates the track configuration for the specified track type.
* [AndroidpublisherEditsValidate](#androidpublishereditsvalidate) - Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.

## AndroidpublisherEditsApklistingsDelete

Deletes the APK-specific localized listing for a specified APK and language code.

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
    res, err := s.Edits.AndroidpublisherEditsApklistingsDelete(ctx, operations.AndroidpublisherEditsApklistingsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        ApkVersionCode: 623564,
        EditID: "deserunt",
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        Language: "magnam",
        OauthToken: sdk.String("debitis"),
        PackageName: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UserIP: sdk.String("tempora"),
    }, operations.AndroidpublisherEditsApklistingsDeleteSecurity{
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

## AndroidpublisherEditsApklistingsDeleteall

Deletes all the APK-specific localized listings for a specified APK.

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
    res, err := s.Edits.AndroidpublisherEditsApklistingsDeleteall(ctx, operations.AndroidpublisherEditsApklistingsDeleteallRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        ApkVersionCode: 383441,
        EditID: "molestiae",
        Fields: sdk.String("minus"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("voluptatum"),
        PackageName: "iusto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UserIP: sdk.String("nisi"),
    }, operations.AndroidpublisherEditsApklistingsDeleteallSecurity{
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

## AndroidpublisherEditsApklistingsGet

Fetches the APK-specific localized listing for a specified APK and language code.

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
    res, err := s.Edits.AndroidpublisherEditsApklistingsGet(ctx, operations.AndroidpublisherEditsApklistingsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        ApkVersionCode: 925597,
        EditID: "temporibus",
        Fields: sdk.String("ab"),
        Key: sdk.String("quis"),
        Language: "veritatis",
        OauthToken: sdk.String("deserunt"),
        PackageName: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UserIP: sdk.String("repellendus"),
    }, operations.AndroidpublisherEditsApklistingsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsApklistingsList

Lists all the APK-specific localized listings for a specified APK.

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
    res, err := s.Edits.AndroidpublisherEditsApklistingsList(ctx, operations.AndroidpublisherEditsApklistingsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        ApkVersionCode: 957156,
        EditID: "quo",
        Fields: sdk.String("odit"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("at"),
        PackageName: "maiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UserIP: sdk.String("quod"),
    }, operations.AndroidpublisherEditsApklistingsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsApklistingsPatch

Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.

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
    res, err := s.Edits.AndroidpublisherEditsApklistingsPatch(ctx, operations.AndroidpublisherEditsApklistingsPatchRequest{
        ApkListing: &shared.ApkListing{
            Language: sdk.String("quod"),
            RecentChanges: sdk.String("esse"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        ApkVersionCode: 520478,
        EditID: "porro",
        Fields: sdk.String("dolorum"),
        Key: sdk.String("dicta"),
        Language: "nam",
        OauthToken: sdk.String("officia"),
        PackageName: "occaecati",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UserIP: sdk.String("deleniti"),
    }, operations.AndroidpublisherEditsApklistingsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsApklistingsUpdate

Updates or creates the APK-specific localized listing for a specified APK and language code.

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
    res, err := s.Edits.AndroidpublisherEditsApklistingsUpdate(ctx, operations.AndroidpublisherEditsApklistingsUpdateRequest{
        ApkListing: &shared.ApkListing{
            Language: sdk.String("hic"),
            RecentChanges: sdk.String("optio"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        ApkVersionCode: 521848,
        EditID: "beatae",
        Fields: sdk.String("commodi"),
        Key: sdk.String("molestiae"),
        Language: "modi",
        OauthToken: sdk.String("qui"),
        PackageName: "impedit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UserIP: sdk.String("esse"),
    }, operations.AndroidpublisherEditsApklistingsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsApksAddexternallyhosted

Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.

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
        ApksAddExternallyHostedRequest: &shared.ApksAddExternallyHostedRequest{
            ExternallyHostedApk: &shared.ExternallyHostedApk{
                ApplicationLabel: sdk.String("ipsum"),
                CertificateBase64s: []string{
                    "aspernatur",
                    "perferendis",
                    "ad",
                },
                ExternallyHostedURL: sdk.String("natus"),
                FileSha1Base64: sdk.String("sed"),
                FileSha256Base64: sdk.String("iste"),
                FileSize: sdk.String("dolor"),
                IconBase64: sdk.String("natus"),
                MaximumSDK: sdk.Int(386489),
                MinimumSDK: sdk.Int(943749),
                NativeCodes: []string{
                    "fuga",
                    "in",
                    "corporis",
                    "iste",
                },
                PackageName: sdk.String("iure"),
                UsesFeatures: []string{
                    "quidem",
                    "architecto",
                    "ipsa",
                    "reiciendis",
                },
                UsesPermissions: []shared.ExternallyHostedApkUsesPermission{
                    shared.ExternallyHostedApkUsesPermission{
                        MaxSDKVersion: sdk.Int(653140),
                        Name: sdk.String("Ernest Ebert"),
                    },
                    shared.ExternallyHostedApkUsesPermission{
                        MaxSDKVersion: sdk.Int(750686),
                        Name: sdk.String("Guadalupe Hickle"),
                    },
                    shared.ExternallyHostedApkUsesPermission{
                        MaxSDKVersion: sdk.Int(38425),
                        Name: sdk.String("Cecilia Yundt MD"),
                    },
                },
                VersionCode: sdk.Int(208876),
                VersionName: sdk.String("culpa"),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "consequuntur",
        Fields: sdk.String("repellat"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("occaecati"),
        PackageName: "numquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UserIP: sdk.String("quam"),
    }, operations.AndroidpublisherEditsApksAddexternallyhostedSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsApksList

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "molestiae",
        Fields: sdk.String("velit"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("quia"),
        PackageName: "quis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UserIP: sdk.String("laborum"),
    }, operations.AndroidpublisherEditsApksListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsApksUpload

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "animi",
        Fields: sdk.String("enim"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("quo"),
        PackageName: "sequi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UserIP: sdk.String("ipsam"),
    }, operations.AndroidpublisherEditsApksUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsBundlesList

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "id",
        Fields: sdk.String("possimus"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("quasi"),
        PackageName: "error",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UserIP: sdk.String("laborum"),
    }, operations.AndroidpublisherEditsBundlesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsBundlesUpload

Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.

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
        AckBundleInstallationWarning: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "quasi",
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("vero"),
        PackageName: "nihil",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UserIP: sdk.String("voluptatibus"),
    }, operations.AndroidpublisherEditsBundlesUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsCommit

Commits/applies the changes made in this edit back to the app.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "ipsa",
        Fields: sdk.String("omnis"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("cum"),
        PackageName: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloremque"),
        UserIP: sdk.String("reprehenderit"),
    }, operations.AndroidpublisherEditsCommitSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsDelete

Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "ut",
        Fields: sdk.String("maiores"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("corporis"),
        PackageName: "dolore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UserIP: sdk.String("dicta"),
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

Uploads the deobfuscation file of the specified APK. If a deobfuscation or symbolication file already exists, it will be replaced. See https://developer.android.com/studio/build/shrink-code to learn more about deobfuscation files.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        ApkVersionCode: 688661,
        DeobfuscationFileType: operations.AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnumNativeCode,
        EditID: "accusamus",
        Fields: sdk.String("commodi"),
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("quae"),
        PackageName: "ipsum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UserIP: sdk.String("molestias"),
    }, operations.AndroidpublisherEditsDeobfuscationfilesUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsDetailsGet

Fetches app details for this edit. This includes the default language and developer support contact information.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "excepturi",
        Fields: sdk.String("pariatur"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("praesentium"),
        PackageName: "rem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UserIP: sdk.String("quasi"),
    }, operations.AndroidpublisherEditsDetailsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsDetailsPatch

Updates app details for this edit. This method supports patch semantics.

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
        AppDetails: &shared.AppDetails{
            ContactEmail: sdk.String("repudiandae"),
            ContactPhone: sdk.String("sint"),
            ContactWebsite: sdk.String("veritatis"),
            DefaultLanguage: sdk.String("itaque"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "incidunt",
        Fields: sdk.String("enim"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("est"),
        PackageName: "quibusdam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UserIP: sdk.String("deserunt"),
    }, operations.AndroidpublisherEditsDetailsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsDetailsUpdate

Updates app details for this edit.

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
        AppDetails: &shared.AppDetails{
            ContactEmail: sdk.String("distinctio"),
            ContactPhone: sdk.String("quibusdam"),
            ContactWebsite: sdk.String("labore"),
            DefaultLanguage: sdk.String("modi"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "qui",
        Fields: sdk.String("aliquid"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("quos"),
        PackageName: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UserIP: sdk.String("assumenda"),
    }, operations.AndroidpublisherEditsDetailsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsExpansionfilesGet

Fetches the Expansion File configuration for the APK specified.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        ApkVersionCode: 369808,
        EditID: "alias",
        ExpansionFileType: operations.AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnumMain,
        Fields: sdk.String("dolorum"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("tempora"),
        PackageName: "facilis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UserIP: sdk.String("labore"),
    }, operations.AndroidpublisherEditsExpansionfilesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsExpansionfilesPatch

Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.

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
        ExpansionFile: &shared.ExpansionFile{
            FileSize: sdk.String("delectus"),
            ReferencesVersion: sdk.Int(433288),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        ApkVersionCode: 248753,
        EditID: "eligendi",
        ExpansionFileType: operations.AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnumPatch,
        Fields: sdk.String("aliquid"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("necessitatibus"),
        PackageName: "sint",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UserIP: sdk.String("dolor"),
    }, operations.AndroidpublisherEditsExpansionfilesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsExpansionfilesUpdate

Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.

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
        ExpansionFile: &shared.ExpansionFile{
            FileSize: sdk.String("debitis"),
            ReferencesVersion: sdk.Int(952749),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        ApkVersionCode: 680056,
        EditID: "in",
        ExpansionFileType: operations.AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnumMain,
        Fields: sdk.String("illum"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("rerum"),
        PackageName: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UserIP: sdk.String("cumque"),
    }, operations.AndroidpublisherEditsExpansionfilesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsExpansionfilesUpload

Uploads and attaches a new Expansion File to the APK specified.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        ApkVersionCode: 813798,
        EditID: "ea",
        ExpansionFileType: operations.AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnumMain,
        Fields: sdk.String("laborum"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("non"),
        PackageName: "occaecati",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UserIP: sdk.String("accusamus"),
    }, operations.AndroidpublisherEditsExpansionfilesUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsGet

Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "delectus",
        Fields: sdk.String("quidem"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("nam"),
        PackageName: "id",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UserIP: sdk.String("deleniti"),
    }, operations.AndroidpublisherEditsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "sapiente",
        Fields: sdk.String("amet"),
        ImageID: "deserunt",
        ImageType: operations.AndroidpublisherEditsImagesDeleteImageTypeEnumPromoGraphic,
        Key: sdk.String("vel"),
        Language: "natus",
        OauthToken: sdk.String("omnis"),
        PackageName: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UserIP: sdk.String("nihil"),
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

Deletes all images for the specified language and image type.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "magnam",
        Fields: sdk.String("distinctio"),
        ImageType: operations.AndroidpublisherEditsImagesDeleteallImageTypeEnumTenInchScreenshots,
        Key: sdk.String("labore"),
        Language: "labore",
        OauthToken: sdk.String("suscipit"),
        PackageName: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UserIP: sdk.String("eum"),
    }, operations.AndroidpublisherEditsImagesDeleteallSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsImagesList

Lists all images for the specified language and image type.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "vero",
        Fields: sdk.String("aspernatur"),
        ImageType: operations.AndroidpublisherEditsImagesListImageTypeEnumFeatureGraphic,
        Key: sdk.String("magnam"),
        Language: "et",
        OauthToken: sdk.String("excepturi"),
        PackageName: "ullam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UserIP: sdk.String("quos"),
    }, operations.AndroidpublisherEditsImagesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsImagesUpload

Uploads a new image and adds it to the list of images for the specified language and image type.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "sint",
        Fields: sdk.String("accusantium"),
        ImageType: operations.AndroidpublisherEditsImagesUploadImageTypeEnumTenInchScreenshots,
        Key: sdk.String("reiciendis"),
        Language: "mollitia",
        OauthToken: sdk.String("ad"),
        PackageName: "eum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UserIP: sdk.String("necessitatibus"),
    }, operations.AndroidpublisherEditsImagesUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsInsert

Creates a new edit for an app, populated with the app's current state.

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
        AppEdit: &shared.AppEdit{
            ExpiryTimeSeconds: sdk.String("odit"),
            ID: sdk.String("516fe4c8-b711-4e5b-bfd2-ed028921cddc"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ea"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("odit"),
        PackageName: "ea",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UserIP: sdk.String("ab"),
    }, operations.AndroidpublisherEditsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsListingsDelete

Deletes the specified localized store listing from an edit.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "maiores",
        Fields: sdk.String("quidem"),
        Key: sdk.String("ipsam"),
        Language: "voluptate",
        OauthToken: sdk.String("autem"),
        PackageName: "nam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UserIP: sdk.String("pariatur"),
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

Deletes all localized listings from an edit.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "nemo",
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("fugiat"),
        PackageName: "amet",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UserIP: sdk.String("cumque"),
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

Fetches information about a localized store listing.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "corporis",
        Fields: sdk.String("hic"),
        Key: sdk.String("libero"),
        Language: "nobis",
        OauthToken: sdk.String("dolores"),
        PackageName: "quis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UserIP: sdk.String("dignissimos"),
    }, operations.AndroidpublisherEditsListingsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsListingsList

Returns all of the localized store listings attached to this edit.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "eaque",
        Fields: sdk.String("quis"),
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("eos"),
        PackageName: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UserIP: sdk.String("minus"),
    }, operations.AndroidpublisherEditsListingsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsListingsPatch

Creates or updates a localized store listing. This method supports patch semantics.

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
        Listing: &shared.Listing{
            FullDescription: sdk.String("quam"),
            Language: sdk.String("dolor"),
            ShortDescription: sdk.String("vero"),
            Title: sdk.String("Mrs."),
            Video: sdk.String("hic"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "recusandae",
        Fields: sdk.String("omnis"),
        Key: sdk.String("facilis"),
        Language: "perspiciatis",
        OauthToken: sdk.String("voluptatem"),
        PackageName: "porro",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UserIP: sdk.String("blanditiis"),
    }, operations.AndroidpublisherEditsListingsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
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
        Listing: &shared.Listing{
            FullDescription: sdk.String("error"),
            Language: sdk.String("eaque"),
            ShortDescription: sdk.String("occaecati"),
            Title: sdk.String("Miss"),
            Video: sdk.String("adipisci"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "asperiores",
        Fields: sdk.String("earum"),
        Key: sdk.String("modi"),
        Language: "iste",
        OauthToken: sdk.String("dolorum"),
        PackageName: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UserIP: sdk.String("provident"),
    }, operations.AndroidpublisherEditsListingsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsTestersGet

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "nobis",
        Fields: sdk.String("libero"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("quaerat"),
        PackageName: "quos",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        Track: "dolorem",
        UserIP: sdk.String("dolorem"),
    }, operations.AndroidpublisherEditsTestersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsTestersPatch

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
        Testers: &shared.Testers{
            GoogleGroups: []string{
                "qui",
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "ipsum",
        Fields: sdk.String("hic"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("cum"),
        PackageName: "voluptate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        Track: "reiciendis",
        UserIP: sdk.String("amet"),
    }, operations.AndroidpublisherEditsTestersPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsTestersUpdate

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
        Testers: &shared.Testers{
            GoogleGroups: []string{
                "numquam",
                "veritatis",
                "ipsa",
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "ipsa",
        Fields: sdk.String("iure"),
        Key: sdk.String("odio"),
        OauthToken: sdk.String("quaerat"),
        PackageName: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        Track: "voluptatibus",
        UserIP: sdk.String("voluptas"),
    }, operations.AndroidpublisherEditsTestersUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsTracksGet

Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "natus",
        Fields: sdk.String("eos"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("sit"),
        PackageName: "fugiat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        Track: "soluta",
        UserIP: sdk.String("dolorum"),
    }, operations.AndroidpublisherEditsTracksGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsTracksList

Lists all the track configurations for this edit.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "iusto",
        Fields: sdk.String("voluptate"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("deleniti"),
        PackageName: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UserIP: sdk.String("distinctio"),
    }, operations.AndroidpublisherEditsTracksListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsTracksPatch

Updates the track configuration for the specified track type. This method supports patch semantics.

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
        Track1: &shared.Track{
            Track: sdk.String("asperiores"),
            UserFraction: sdk.Float64(4694.97),
            VersionCodes: []int{
                456015,
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "id",
        Fields: sdk.String("saepe"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("aspernatur"),
        PackageName: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        TrackPathParameter: "optio",
        UserIP: sdk.String("accusamus"),
    }, operations.AndroidpublisherEditsTracksPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsTracksUpdate

Updates the track configuration for the specified track type.

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
        Track1: &shared.Track{
            Track: sdk.String("ad"),
            UserFraction: sdk.Float64(9044.25),
            VersionCodes: []int{
                645785,
                588317,
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "minima",
        Fields: sdk.String("repellendus"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("similique"),
        PackageName: "alias",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        TrackPathParameter: "quaerat",
        UserIP: sdk.String("tempora"),
    }, operations.AndroidpublisherEditsTracksUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherEditsValidate

Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        EditID: "vel",
        Fields: sdk.String("quod"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("qui"),
        PackageName: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UserIP: sdk.String("esse"),
    }, operations.AndroidpublisherEditsValidateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
