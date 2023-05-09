# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/androidpublisher/v3/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Applications.AndroidpublisherApplicationsDeviceTierConfigsCreate(ctx, operations.AndroidpublisherApplicationsDeviceTierConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DeviceTierConfigInput: &shared.DeviceTierConfigInput{
            DeviceGroups: []shared.DeviceGroup{
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("quibusdam"),
                                MinBytes: sdk.String("unde"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("corrupti"),
                                    BuildDevice: sdk.String("illum"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("vel"),
                                    BuildDevice: sdk.String("error"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("deserunt"),
                                    BuildDevice: sdk.String("suscipit"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("iure"),
                                    BuildDevice: sdk.String("magnam"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Lucia Goldner"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Irving Lehner"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Mrs. Sophie Smith MD"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Roberta Sipes"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("at"),
                                    BuildDevice: sdk.String("at"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Bernadette Schmidt"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Omar Carroll"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Wayne Lind"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Jack Johns"),
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("qui"),
                                MinBytes: sdk.String("impedit"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("esse"),
                                    BuildDevice: sdk.String("ipsum"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("excepturi"),
                                    BuildDevice: sdk.String("aspernatur"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("perferendis"),
                                    BuildDevice: sdk.String("ad"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Sheryl Fadel"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Elias Parker"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Brad Turcotte Jr."),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("est"),
                                    BuildDevice: sdk.String("mollitia"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("laborum"),
                                    BuildDevice: sdk.String("dolores"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("dolorem"),
                                    BuildDevice: sdk.String("corporis"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("explicabo"),
                                    BuildDevice: sdk.String("nobis"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Corey Hane III"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Miss Aubrey Williamson"),
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("culpa"),
                                MinBytes: sdk.String("consequuntur"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("mollitia"),
                                    BuildDevice: sdk.String("occaecati"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("numquam"),
                                    BuildDevice: sdk.String("commodi"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("quam"),
                                    BuildDevice: sdk.String("molestiae"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("velit"),
                                    BuildDevice: sdk.String("error"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Gloria Padberg"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("quo"),
                                    BuildDevice: sdk.String("sequi"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Mr. Alberta Schuster"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Neal Boyer"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Jessie Langosh V"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Ms. Karla Aufderhar"),
                                },
                            },
                        },
                    },
                    Name: sdk.String("Willie Hessel"),
                },
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("harum"),
                                MinBytes: sdk.String("enim"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("commodi"),
                                    BuildDevice: sdk.String("repudiandae"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("quae"),
                                    BuildDevice: sdk.String("ipsum"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("quidem"),
                                    BuildDevice: sdk.String("molestias"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("excepturi"),
                                    BuildDevice: sdk.String("pariatur"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Dr. Jordan Von"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Patti Gottlieb MD"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("explicabo"),
                                    BuildDevice: sdk.String("deserunt"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("distinctio"),
                                    BuildDevice: sdk.String("quibusdam"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("labore"),
                                    BuildDevice: sdk.String("modi"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("qui"),
                                    BuildDevice: sdk.String("aliquid"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Christopher Cummerata"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Denise Pagac"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Geoffrey Green"),
                                },
                            },
                        },
                    },
                    Name: sdk.String("Sheri Mayer"),
                },
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("sint"),
                                MinBytes: sdk.String("officia"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("debitis"),
                                    BuildDevice: sdk.String("a"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Arlene Stamm"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Valerie Runolfsson"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Kayla Thompson"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("accusamus"),
                                    BuildDevice: sdk.String("delectus"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("quidem"),
                                    BuildDevice: sdk.String("provident"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Nelson Lesch"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Tyler Kassulke"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Dorothy Kovacek"),
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("id"),
                                MinBytes: sdk.String("labore"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("suscipit"),
                                    BuildDevice: sdk.String("natus"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("nobis"),
                                    BuildDevice: sdk.String("eum"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Ms. Julie Gusikowski"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Miss Julian Marvin"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Tommy Kemmer"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Vivian Boyle"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("eius"),
                                    BuildDevice: sdk.String("maxime"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("deleniti"),
                                    BuildDevice: sdk.String("facilis"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("in"),
                                    BuildDevice: sdk.String("architecto"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("architecto"),
                                    BuildDevice: sdk.String("repudiandae"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Jessie Zulauf"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Al Bashirian"),
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("natus"),
                                MinBytes: sdk.String("magni"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("quo"),
                                    BuildDevice: sdk.String("illum"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Nathaniel Marks"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Virginia Wunsch"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Dr. Stacey Reichert"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Joseph Steuber DDS"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("hic"),
                                    BuildDevice: sdk.String("libero"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("nobis"),
                                    BuildDevice: sdk.String("dolores"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Lance Becker"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Dorothy Dach"),
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("dolor"),
                                MinBytes: sdk.String("vero"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("hic"),
                                    BuildDevice: sdk.String("recusandae"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("omnis"),
                                    BuildDevice: sdk.String("facilis"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Robyn Cruickshank"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Violet Price"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Edwin Morar"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("provident"),
                                    BuildDevice: sdk.String("nobis"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("libero"),
                                    BuildDevice: sdk.String("delectus"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("quaerat"),
                                    BuildDevice: sdk.String("quos"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("aliquid"),
                                    BuildDevice: sdk.String("dolorem"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Norma Erdman"),
                                },
                            },
                        },
                    },
                    Name: sdk.String("Adrian Kuhn"),
                },
            },
            DeviceTierSet: &shared.DeviceTierSet{
                DeviceTiers: []shared.DeviceTier{
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "veritatis",
                            "ipsa",
                        },
                        Level: sdk.Int(56418),
                    },
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "odio",
                            "quaerat",
                        },
                        Level: sdk.Int(881005),
                    },
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "voluptatibus",
                            "voluptas",
                            "natus",
                        },
                        Level: sdk.Int(179603),
                    },
                },
            },
            UserCountrySets: []shared.UserCountrySet{
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "fugiat",
                    },
                    Name: sdk.String("Latoya Parisian"),
                },
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "deleniti",
                        "omnis",
                        "necessitatibus",
                    },
                    Name: sdk.String("Emmett Kovacek"),
                },
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "saepe",
                        "eius",
                        "aspernatur",
                    },
                    Name: sdk.String("Wendy Rosenbaum"),
                },
            },
        },
        AccessToken: sdk.String("saepe"),
        AllowUnknownDevices: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("provident"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("repellendus"),
        PackageName: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("similique"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("at"),
    }, operations.AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceTierConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Applications](docs/applications/README.md)

* [AndroidpublisherApplicationsDeviceTierConfigsCreate](docs/applications/README.md#androidpublisherapplicationsdevicetierconfigscreate) - Creates a new device tier config for an app.
* [AndroidpublisherApplicationsDeviceTierConfigsGet](docs/applications/README.md#androidpublisherapplicationsdevicetierconfigsget) - Returns a particular device tier config.
* [AndroidpublisherApplicationsDeviceTierConfigsList](docs/applications/README.md#androidpublisherapplicationsdevicetierconfigslist) - Returns created device tier configs, ordered by descending creation time.

### [Edits](docs/edits/README.md)

* [AndroidpublisherEditsApksAddexternallyhosted](docs/edits/README.md#androidpublishereditsapksaddexternallyhosted) - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
* [AndroidpublisherEditsApksList](docs/edits/README.md#androidpublishereditsapkslist) - Lists all current APKs of the app and edit.
* [AndroidpublisherEditsApksUpload](docs/edits/README.md#androidpublishereditsapksupload) - Uploads an APK and adds to the current edit.
* [AndroidpublisherEditsBundlesList](docs/edits/README.md#androidpublishereditsbundleslist) - Lists all current Android App Bundles of the app and edit.
* [AndroidpublisherEditsBundlesUpload](docs/edits/README.md#androidpublishereditsbundlesupload) - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* [AndroidpublisherEditsCommit](docs/edits/README.md#androidpublishereditscommit) - Commits an app edit.
* [AndroidpublisherEditsCountryavailabilityGet](docs/edits/README.md#androidpublishereditscountryavailabilityget) - Gets country availability.
* [AndroidpublisherEditsDelete](docs/edits/README.md#androidpublishereditsdelete) - Deletes an app edit.
* [AndroidpublisherEditsDeobfuscationfilesUpload](docs/edits/README.md#androidpublishereditsdeobfuscationfilesupload) - Uploads a new deobfuscation file and attaches to the specified APK.
* [AndroidpublisherEditsDetailsGet](docs/edits/README.md#androidpublishereditsdetailsget) - Gets details of an app.
* [AndroidpublisherEditsDetailsPatch](docs/edits/README.md#androidpublishereditsdetailspatch) - Patches details of an app.
* [AndroidpublisherEditsDetailsUpdate](docs/edits/README.md#androidpublishereditsdetailsupdate) - Updates details of an app.
* [AndroidpublisherEditsExpansionfilesGet](docs/edits/README.md#androidpublishereditsexpansionfilesget) - Fetches the expansion file configuration for the specified APK.
* [AndroidpublisherEditsExpansionfilesPatch](docs/edits/README.md#androidpublishereditsexpansionfilespatch) - Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* [AndroidpublisherEditsExpansionfilesUpdate](docs/edits/README.md#androidpublishereditsexpansionfilesupdate) - Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* [AndroidpublisherEditsExpansionfilesUpload](docs/edits/README.md#androidpublishereditsexpansionfilesupload) - Uploads a new expansion file and attaches to the specified APK.
* [AndroidpublisherEditsGet](docs/edits/README.md#androidpublishereditsget) - Gets an app edit.
* [AndroidpublisherEditsImagesDelete](docs/edits/README.md#androidpublishereditsimagesdelete) - Deletes the image (specified by id) from the edit.
* [AndroidpublisherEditsImagesDeleteall](docs/edits/README.md#androidpublishereditsimagesdeleteall) - Deletes all images for the specified language and image type. Returns an empty response if no images are found.
* [AndroidpublisherEditsImagesList](docs/edits/README.md#androidpublishereditsimageslist) - Lists all images. The response may be empty.
* [AndroidpublisherEditsImagesUpload](docs/edits/README.md#androidpublishereditsimagesupload) - Uploads an image of the specified language and image type, and adds to the edit.
* [AndroidpublisherEditsInsert](docs/edits/README.md#androidpublishereditsinsert) - Creates a new edit for an app.
* [AndroidpublisherEditsListingsDelete](docs/edits/README.md#androidpublishereditslistingsdelete) - Deletes a localized store listing.
* [AndroidpublisherEditsListingsDeleteall](docs/edits/README.md#androidpublishereditslistingsdeleteall) - Deletes all store listings.
* [AndroidpublisherEditsListingsGet](docs/edits/README.md#androidpublishereditslistingsget) - Gets a localized store listing.
* [AndroidpublisherEditsListingsList](docs/edits/README.md#androidpublishereditslistingslist) - Lists all localized store listings.
* [AndroidpublisherEditsListingsPatch](docs/edits/README.md#androidpublishereditslistingspatch) - Patches a localized store listing.
* [AndroidpublisherEditsListingsUpdate](docs/edits/README.md#androidpublishereditslistingsupdate) - Creates or updates a localized store listing.
* [AndroidpublisherEditsTestersGet](docs/edits/README.md#androidpublishereditstestersget) - Gets testers. Note: Testers resource does not support email lists.
* [AndroidpublisherEditsTestersPatch](docs/edits/README.md#androidpublishereditstesterspatch) - Patches testers. Note: Testers resource does not support email lists.
* [AndroidpublisherEditsTestersUpdate](docs/edits/README.md#androidpublishereditstestersupdate) - Updates testers. Note: Testers resource does not support email lists.
* [AndroidpublisherEditsTracksGet](docs/edits/README.md#androidpublishereditstracksget) - Gets a track.
* [AndroidpublisherEditsTracksList](docs/edits/README.md#androidpublishereditstrackslist) - Lists all tracks.
* [AndroidpublisherEditsTracksPatch](docs/edits/README.md#androidpublishereditstrackspatch) - Patches a track.
* [AndroidpublisherEditsTracksUpdate](docs/edits/README.md#androidpublishereditstracksupdate) - Updates a track.
* [AndroidpublisherEditsValidate](docs/edits/README.md#androidpublishereditsvalidate) - Validates an app edit.

### [Externaltransactions](docs/externaltransactions/README.md)

* [AndroidpublisherExternaltransactionsCreateexternaltransaction](docs/externaltransactions/README.md#androidpublisherexternaltransactionscreateexternaltransaction) - Creates a new external transaction.
* [AndroidpublisherExternaltransactionsGetexternaltransaction](docs/externaltransactions/README.md#androidpublisherexternaltransactionsgetexternaltransaction) - Gets an existing external transaction.
* [AndroidpublisherExternaltransactionsRefundexternaltransaction](docs/externaltransactions/README.md#androidpublisherexternaltransactionsrefundexternaltransaction) - Refunds or partially refunds an existing external transaction.

### [Generatedapks](docs/generatedapks/README.md)

* [AndroidpublisherGeneratedapksDownload](docs/generatedapks/README.md#androidpublishergeneratedapksdownload) - Downloads a single signed APK generated from an app bundle.
* [AndroidpublisherGeneratedapksList](docs/generatedapks/README.md#androidpublishergeneratedapkslist) - Returns download metadata for all APKs that were generated from a given app bundle.

### [Grants](docs/grants/README.md)

* [AndroidpublisherGrantsCreate](docs/grants/README.md#androidpublishergrantscreate) - Grant access for a user to the given package.

### [Inappproducts](docs/inappproducts/README.md)

* [AndroidpublisherInappproductsDelete](docs/inappproducts/README.md#androidpublisherinappproductsdelete) - Deletes an in-app product (i.e. a managed product or a subscription).
* [AndroidpublisherInappproductsGet](docs/inappproducts/README.md#androidpublisherinappproductsget) - Gets an in-app product, which can be a managed product or a subscription.
* [AndroidpublisherInappproductsInsert](docs/inappproducts/README.md#androidpublisherinappproductsinsert) - Creates an in-app product (i.e. a managed product or a subscription).
* [AndroidpublisherInappproductsList](docs/inappproducts/README.md#androidpublisherinappproductslist) - Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.
* [AndroidpublisherInappproductsPatch](docs/inappproducts/README.md#androidpublisherinappproductspatch) - Patches an in-app product (i.e. a managed product or a subscription).
* [AndroidpublisherInappproductsUpdate](docs/inappproducts/README.md#androidpublisherinappproductsupdate) - Updates an in-app product (i.e. a managed product or a subscription).

### [Internalappsharingartifacts](docs/internalappsharingartifacts/README.md)

* [AndroidpublisherInternalappsharingartifactsUploadapk](docs/internalappsharingartifacts/README.md#androidpublisherinternalappsharingartifactsuploadapk) - Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* [AndroidpublisherInternalappsharingartifactsUploadbundle](docs/internalappsharingartifacts/README.md#androidpublisherinternalappsharingartifactsuploadbundle) - Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

### [Monetization](docs/monetization/README.md)

* [AndroidpublisherMonetizationConvertRegionPrices](docs/monetization/README.md#androidpublishermonetizationconvertregionprices) - Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
* [AndroidpublisherMonetizationSubscriptionsArchive](docs/monetization/README.md#androidpublishermonetizationsubscriptionsarchive) - Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.
* [AndroidpublisherMonetizationSubscriptionsBasePlansActivate](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansactivate) - Activates a base plan. Once activated, base plans will be available to new subscribers.
* [AndroidpublisherMonetizationSubscriptionsBasePlansDeactivate](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansdeactivate) - Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
* [AndroidpublisherMonetizationSubscriptionsBasePlansDelete](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansdelete) - Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
* [AndroidpublisherMonetizationSubscriptionsBasePlansMigratePrices](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansmigrateprices) - Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
* [AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivate](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansoffersactivate) - Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
* [AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreate](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansofferscreate) - Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
* [AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansoffersdeactivate) - Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
* [AndroidpublisherMonetizationSubscriptionsBasePlansOffersDelete](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansoffersdelete) - Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
* [AndroidpublisherMonetizationSubscriptionsBasePlansOffersGet](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansoffersget) - Reads a single offer
* [AndroidpublisherMonetizationSubscriptionsBasePlansOffersList](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansofferslist) - Lists all offers under a given subscription.
* [AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatch](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansofferspatch) - Updates an existing subscription offer.
* [AndroidpublisherMonetizationSubscriptionsCreate](docs/monetization/README.md#androidpublishermonetizationsubscriptionscreate) - Creates a new subscription. Newly added base plans will remain in draft state until activated.
* [AndroidpublisherMonetizationSubscriptionsDelete](docs/monetization/README.md#androidpublishermonetizationsubscriptionsdelete) - Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
* [AndroidpublisherMonetizationSubscriptionsGet](docs/monetization/README.md#androidpublishermonetizationsubscriptionsget) - Reads a single subscription.
* [AndroidpublisherMonetizationSubscriptionsList](docs/monetization/README.md#androidpublishermonetizationsubscriptionslist) - Lists all subscriptions under a given app.
* [AndroidpublisherMonetizationSubscriptionsPatch](docs/monetization/README.md#androidpublishermonetizationsubscriptionspatch) - Updates an existing subscription.

### [Orders](docs/orders/README.md)

* [AndroidpublisherOrdersRefund](docs/orders/README.md#androidpublisherordersrefund) - Refunds a user's subscription or in-app purchase order. Orders older than 1 year cannot be refunded.

### [Purchases](docs/purchases/README.md)

* [AndroidpublisherPurchasesProductsAcknowledge](docs/purchases/README.md#androidpublisherpurchasesproductsacknowledge) - Acknowledges a purchase of an inapp item.
* [AndroidpublisherPurchasesProductsConsume](docs/purchases/README.md#androidpublisherpurchasesproductsconsume) - Consumes a purchase for an inapp item.
* [AndroidpublisherPurchasesProductsGet](docs/purchases/README.md#androidpublisherpurchasesproductsget) - Checks the purchase and consumption status of an inapp item.
* [AndroidpublisherPurchasesSubscriptionsAcknowledge](docs/purchases/README.md#androidpublisherpurchasessubscriptionsacknowledge) - Acknowledges a subscription purchase.
* [AndroidpublisherPurchasesSubscriptionsCancel](docs/purchases/README.md#androidpublisherpurchasessubscriptionscancel) - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* [AndroidpublisherPurchasesSubscriptionsDefer](docs/purchases/README.md#androidpublisherpurchasessubscriptionsdefer) - Defers a user's subscription purchase until a specified future expiration time.
* [AndroidpublisherPurchasesSubscriptionsGet](docs/purchases/README.md#androidpublisherpurchasessubscriptionsget) - Checks whether a user's subscription purchase is valid and returns its expiry time.
* [AndroidpublisherPurchasesSubscriptionsRefund](docs/purchases/README.md#androidpublisherpurchasessubscriptionsrefund) - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* [AndroidpublisherPurchasesSubscriptionsRevoke](docs/purchases/README.md#androidpublisherpurchasessubscriptionsrevoke) - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* [AndroidpublisherPurchasesSubscriptionsv2Get](docs/purchases/README.md#androidpublisherpurchasessubscriptionsv2get) - Get metadata about a subscription
* [AndroidpublisherPurchasesVoidedpurchasesList](docs/purchases/README.md#androidpublisherpurchasesvoidedpurchaseslist) - Lists the purchases that were canceled, refunded or charged-back.

### [Reviews](docs/reviews/README.md)

* [AndroidpublisherReviewsGet](docs/reviews/README.md#androidpublisherreviewsget) - Gets a single review.
* [AndroidpublisherReviewsList](docs/reviews/README.md#androidpublisherreviewslist) - Lists all reviews.
* [AndroidpublisherReviewsReply](docs/reviews/README.md#androidpublisherreviewsreply) - Replies to a single review, or updates an existing reply.

### [Systemapks](docs/systemapks/README.md)

* [AndroidpublisherSystemapksVariantsCreate](docs/systemapks/README.md#androidpublishersystemapksvariantscreate) - Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
* [AndroidpublisherSystemapksVariantsDownload](docs/systemapks/README.md#androidpublishersystemapksvariantsdownload) - Downloads a previously created system APK which is suitable for inclusion in a system image.
* [AndroidpublisherSystemapksVariantsGet](docs/systemapks/README.md#androidpublishersystemapksvariantsget) - Returns a previously created system APK variant.
* [AndroidpublisherSystemapksVariantsList](docs/systemapks/README.md#androidpublishersystemapksvariantslist) - Returns the list of previously created system APK variants.

### [Users](docs/users/README.md)

* [AndroidpublisherUsersCreate](docs/users/README.md#androidpublisheruserscreate) - Grant access for a user to the given developer account.
* [AndroidpublisherUsersDelete](docs/users/README.md#androidpublisherusersdelete) - Removes all access for the user to the given developer account.
* [AndroidpublisherUsersList](docs/users/README.md#androidpublisheruserslist) - Lists all users with access to a developer account.
* [AndroidpublisherUsersPatch](docs/users/README.md#androidpublisheruserspatch) - Updates access for the user to the developer account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
