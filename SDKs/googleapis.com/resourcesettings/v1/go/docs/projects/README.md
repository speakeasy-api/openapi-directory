# Projects

### Available Operations

* [ResourcesettingsProjectsSettingsGet](#resourcesettingsprojectssettingsget) - Returns a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist.
* [ResourcesettingsProjectsSettingsList](#resourcesettingsprojectssettingslist) - Lists all the settings that are available on the Cloud resource `parent`.
* [ResourcesettingsProjectsSettingsPatch](#resourcesettingsprojectssettingspatch) - Updates a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.FAILED_PRECONDITION` if the setting is flagged as read only. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the setting value. On success, the response will contain only `name`, `local_value` and `etag`. The `metadata` and `effective_value` cannot be updated through this API. Note: the supplied setting will perform a full overwrite of the `local_value` field.

## ResourcesettingsProjectsSettingsGet

Returns a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist.

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
    res, err := s.Projects.ResourcesettingsProjectsSettingsGet(ctx, operations.ResourcesettingsProjectsSettingsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("minus"),
        Key: sdk.String("placeat"),
        Name: "Ted Mante",
        OauthToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("veritatis"),
        View: operations.ResourcesettingsProjectsSettingsGetViewEnumSettingViewEffectiveValue.ToPointer(),
    }, operations.ResourcesettingsProjectsSettingsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudResourcesettingsV1Setting != nil {
        // handle response
    }
}
```

## ResourcesettingsProjectsSettingsList

Lists all the settings that are available on the Cloud resource `parent`.

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
    res, err := s.Projects.ResourcesettingsProjectsSettingsList(ctx, operations.ResourcesettingsProjectsSettingsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("quo"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("at"),
        PageSize: sdk.Int64(870088),
        PageToken: sdk.String("maiores"),
        Parent: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("esse"),
        View: operations.ResourcesettingsProjectsSettingsListViewEnumSettingViewEffectiveValue.ToPointer(),
    }, operations.ResourcesettingsProjectsSettingsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudResourcesettingsV1ListSettingsResponse != nil {
        // handle response
    }
}
```

## ResourcesettingsProjectsSettingsPatch

Updates a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.FAILED_PRECONDITION` if the setting is flagged as read only. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the setting value. On success, the response will contain only `name`, `local_value` and `etag`. The `metadata` and `effective_value` cannot be updated through this API. Note: the supplied setting will perform a full overwrite of the `local_value` field.

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
    res, err := s.Projects.ResourcesettingsProjectsSettingsPatch(ctx, operations.ResourcesettingsProjectsSettingsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudResourcesettingsV1Setting: &shared.GoogleCloudResourcesettingsV1Setting{
            EffectiveValue: &shared.GoogleCloudResourcesettingsV1Value{
                BooleanValue: sdk.Bool(false),
                DurationValue: sdk.String("dolorum"),
                EnumValue: &shared.GoogleCloudResourcesettingsV1ValueEnumValue{
                    Value: sdk.String("dicta"),
                },
                StringMapValue: &shared.GoogleCloudResourcesettingsV1ValueStringMap{
                    Mappings: map[string]string{
                        "officia": "occaecati",
                        "fugit": "deleniti",
                        "hic": "optio",
                    },
                },
                StringSetValue: &shared.GoogleCloudResourcesettingsV1ValueStringSet{
                    Values: []string{
                        "beatae",
                        "commodi",
                        "molestiae",
                    },
                },
                StringValue: sdk.String("modi"),
            },
            Etag: sdk.String("qui"),
            LocalValue: &shared.GoogleCloudResourcesettingsV1Value{
                BooleanValue: sdk.Bool(false),
                DurationValue: sdk.String("impedit"),
                EnumValue: &shared.GoogleCloudResourcesettingsV1ValueEnumValue{
                    Value: sdk.String("cum"),
                },
                StringMapValue: &shared.GoogleCloudResourcesettingsV1ValueStringMap{
                    Mappings: map[string]string{
                        "ipsum": "excepturi",
                        "aspernatur": "perferendis",
                    },
                },
                StringSetValue: &shared.GoogleCloudResourcesettingsV1ValueStringSet{
                    Values: []string{
                        "natus",
                        "sed",
                    },
                },
                StringValue: sdk.String("iste"),
            },
            Metadata: &shared.GoogleCloudResourcesettingsV1SettingMetadata{
                DataType: shared.GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnumBoolean.ToPointer(),
                DefaultValue: &shared.GoogleCloudResourcesettingsV1Value{
                    BooleanValue: sdk.Bool(false),
                    DurationValue: sdk.String("natus"),
                    EnumValue: &shared.GoogleCloudResourcesettingsV1ValueEnumValue{
                        Value: sdk.String("laboriosam"),
                    },
                    StringMapValue: &shared.GoogleCloudResourcesettingsV1ValueStringMap{
                        Mappings: map[string]string{
                            "saepe": "fuga",
                            "in": "corporis",
                            "iste": "iure",
                            "saepe": "quidem",
                        },
                    },
                    StringSetValue: &shared.GoogleCloudResourcesettingsV1ValueStringSet{
                        Values: []string{
                            "ipsa",
                        },
                    },
                    StringValue: sdk.String("reiciendis"),
                },
                Description: sdk.String("est"),
                DisplayName: sdk.String("mollitia"),
                ReadOnly: sdk.Bool(false),
            },
            Name: sdk.String("Ernest Ebert"),
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("minima"),
        Name: "Brian Kessler",
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.ResourcesettingsProjectsSettingsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudResourcesettingsV1Setting != nil {
        // handle response
    }
}
```
