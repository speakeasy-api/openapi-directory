# Properties

### Available Operations

* [AnalyticsadminPropertiesAcknowledgeUserDataCollection](#analyticsadminpropertiesacknowledgeuserdatacollection) - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
* [AnalyticsadminPropertiesConversionEventsCreate](#analyticsadminpropertiesconversioneventscreate) - Creates a conversion event with the specified attributes.
* [AnalyticsadminPropertiesConversionEventsList](#analyticsadminpropertiesconversioneventslist) - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* [AnalyticsadminPropertiesCreate](#analyticsadminpropertiescreate) - Creates an "GA4" property with the specified location and attributes.
* [AnalyticsadminPropertiesCustomDimensionsCreate](#analyticsadminpropertiescustomdimensionscreate) - Creates a CustomDimension.
* [AnalyticsadminPropertiesCustomDimensionsList](#analyticsadminpropertiescustomdimensionslist) - Lists CustomDimensions on a property.
* [AnalyticsadminPropertiesCustomMetricsArchive](#analyticsadminpropertiescustommetricsarchive) - Archives a CustomMetric on a property.
* [AnalyticsadminPropertiesCustomMetricsCreate](#analyticsadminpropertiescustommetricscreate) - Creates a CustomMetric.
* [AnalyticsadminPropertiesCustomMetricsList](#analyticsadminpropertiescustommetricslist) - Lists CustomMetrics on a property.
* [AnalyticsadminPropertiesDataStreamsCreate](#analyticsadminpropertiesdatastreamscreate) - Creates a DataStream.
* [AnalyticsadminPropertiesDataStreamsList](#analyticsadminpropertiesdatastreamslist) - Lists DataStreams on a property.
* [AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate](#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretscreate) - Creates a measurement protocol secret.
* [AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet](#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretsget) - Lookup for a single "GA4" MeasurementProtocolSecret.
* [AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList](#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretslist) - Returns child MeasurementProtocolSecrets under the specified parent Property.
* [AnalyticsadminPropertiesFirebaseLinksCreate](#analyticsadminpropertiesfirebaselinkscreate) - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* [AnalyticsadminPropertiesFirebaseLinksList](#analyticsadminpropertiesfirebaselinkslist) - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* [AnalyticsadminPropertiesGoogleAdsLinksCreate](#analyticsadminpropertiesgoogleadslinkscreate) - Creates a GoogleAdsLink.
* [AnalyticsadminPropertiesGoogleAdsLinksDelete](#analyticsadminpropertiesgoogleadslinksdelete) - Deletes a GoogleAdsLink on a property
* [AnalyticsadminPropertiesGoogleAdsLinksList](#analyticsadminpropertiesgoogleadslinkslist) - Lists GoogleAdsLinks on a property.
* [AnalyticsadminPropertiesGoogleAdsLinksPatch](#analyticsadminpropertiesgoogleadslinkspatch) - Updates a GoogleAdsLink on a property
* [AnalyticsadminPropertiesList](#analyticsadminpropertieslist) - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
* [AnalyticsadminPropertiesRunAccessReport](#analyticsadminpropertiesrunaccessreport) - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).

## AnalyticsadminPropertiesAcknowledgeUserDataCollection

Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.

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
    res, err := s.Properties.AnalyticsadminPropertiesAcknowledgeUserDataCollection(ctx, operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest: &shared.GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest{
            Acknowledgement: sdk.String("fuga"),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("iure"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        Property: "architecto",
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("est"),
    }, operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesConversionEventsCreate

Creates a conversion event with the specified attributes.

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
    res, err := s.Properties.AnalyticsadminPropertiesConversionEventsCreate(ctx, operations.AnalyticsadminPropertiesConversionEventsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1betaConversionEventInput: &shared.GoogleAnalyticsAdminV1betaConversionEventInput{
            EventName: sdk.String("laborum"),
        },
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("enim"),
        Parent: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.AnalyticsadminPropertiesConversionEventsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaConversionEvent != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesConversionEventsList

Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.

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
    res, err := s.Properties.AnalyticsadminPropertiesConversionEventsList(ctx, operations.AnalyticsadminPropertiesConversionEventsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("mollitia"),
        PageSize: sdk.Int64(208876),
        PageToken: sdk.String("culpa"),
        Parent: "consequuntur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.AnalyticsadminPropertiesConversionEventsListSecurity{
        Option1: &operations.AnalyticsadminPropertiesConversionEventsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaListConversionEventsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesCreate

Creates an "GA4" property with the specified location and attributes.

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
    res, err := s.Properties.AnalyticsadminPropertiesCreate(ctx, operations.AnalyticsadminPropertiesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1betaPropertyInput: &shared.GoogleAnalyticsAdminV1betaPropertyInput{
            Account: sdk.String("commodi"),
            CurrencyCode: sdk.String("quam"),
            DisplayName: sdk.String("molestiae"),
            IndustryCategory: shared.GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnumTravel.ToPointer(),
            Parent: sdk.String("error"),
            PropertyType: shared.GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnumPropertyTypeUnspecified.ToPointer(),
            TimeZone: sdk.String("quis"),
        },
        AccessToken: sdk.String("vitae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("animi"),
        Fields: sdk.String("enim"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.AnalyticsadminPropertiesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaProperty != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesCustomDimensionsCreate

Creates a CustomDimension.

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
    res, err := s.Properties.AnalyticsadminPropertiesCustomDimensionsCreate(ctx, operations.AnalyticsadminPropertiesCustomDimensionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1betaCustomDimensionInput: &shared.GoogleAnalyticsAdminV1betaCustomDimensionInput{
            Description: sdk.String("possimus"),
            DisallowAdsPersonalization: sdk.Bool(false),
            DisplayName: sdk.String("aut"),
            ParameterName: sdk.String("quasi"),
            Scope: shared.GoogleAnalyticsAdminV1betaCustomDimensionScopeEnumUser.ToPointer(),
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("vero"),
        Parent: "nihil",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.AnalyticsadminPropertiesCustomDimensionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaCustomDimension != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesCustomDimensionsList

Lists CustomDimensions on a property.

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
    res, err := s.Properties.AnalyticsadminPropertiesCustomDimensionsList(ctx, operations.AnalyticsadminPropertiesCustomDimensionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("doloremque"),
        Key: sdk.String("reprehenderit"),
        OauthToken: sdk.String("ut"),
        PageSize: sdk.Int64(979587),
        PageToken: sdk.String("dicta"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.AnalyticsadminPropertiesCustomDimensionsListSecurity{
        Option1: &operations.AnalyticsadminPropertiesCustomDimensionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaListCustomDimensionsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesCustomMetricsArchive

Archives a CustomMetric on a property.

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
    res, err := s.Properties.AnalyticsadminPropertiesCustomMetricsArchive(ctx, operations.AnalyticsadminPropertiesCustomMetricsArchiveRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "accusamus": "commodi",
            "repudiandae": "quae",
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestias"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("pariatur"),
        Name: "Irma Ledner DVM",
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.AnalyticsadminPropertiesCustomMetricsArchiveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesCustomMetricsCreate

Creates a CustomMetric.

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
    res, err := s.Properties.AnalyticsadminPropertiesCustomMetricsCreate(ctx, operations.AnalyticsadminPropertiesCustomMetricsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1betaCustomMetricInput: &shared.GoogleAnalyticsAdminV1betaCustomMetricInput{
            Description: sdk.String("consequatur"),
            DisplayName: sdk.String("est"),
            MeasurementUnit: shared.GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnumMinutes.ToPointer(),
            ParameterName: sdk.String("explicabo"),
            RestrictedMetricType: []shared.GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum{
                shared.GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnumRevenueData,
                shared.GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnumRevenueData,
                shared.GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnumRestrictedMetricTypeUnspecified,
            },
            Scope: shared.GoogleAnalyticsAdminV1betaCustomMetricScopeEnumMetricScopeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("quos"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("magni"),
        Parent: "assumenda",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.AnalyticsadminPropertiesCustomMetricsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaCustomMetric != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesCustomMetricsList

Lists CustomMetrics on a property.

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
    res, err := s.Properties.AnalyticsadminPropertiesCustomMetricsList(ctx, operations.AnalyticsadminPropertiesCustomMetricsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("tempore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("delectus"),
        PageSize: sdk.Int64(433288),
        PageToken: sdk.String("non"),
        Parent: "eligendi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("provident"),
    }, operations.AnalyticsadminPropertiesCustomMetricsListSecurity{
        Option1: &operations.AnalyticsadminPropertiesCustomMetricsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaListCustomMetricsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDataStreamsCreate

Creates a DataStream.

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
    res, err := s.Properties.AnalyticsadminPropertiesDataStreamsCreate(ctx, operations.AnalyticsadminPropertiesDataStreamsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1betaDataStreamInput: &shared.GoogleAnalyticsAdminV1betaDataStreamInput{
            AndroidAppStreamData: &shared.GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput{
                PackageName: sdk.String("sint"),
            },
            DisplayName: sdk.String("officia"),
            IosAppStreamData: &shared.GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput{
                BundleID: sdk.String("dolor"),
            },
            Type: shared.GoogleAnalyticsAdminV1betaDataStreamTypeEnumIosAppDataStream.ToPointer(),
            WebStreamData: &shared.GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput{
                DefaultURI: sdk.String("a"),
            },
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("illum"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("rerum"),
        Parent: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("facere"),
    }, operations.AnalyticsadminPropertiesDataStreamsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaDataStream != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDataStreamsList

Lists DataStreams on a property.

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
    res, err := s.Properties.AnalyticsadminPropertiesDataStreamsList(ctx, operations.AnalyticsadminPropertiesDataStreamsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("non"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("enim"),
        PageSize: sdk.Int64(881736),
        PageToken: sdk.String("delectus"),
        Parent: "quidem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("id"),
    }, operations.AnalyticsadminPropertiesDataStreamsListSecurity{
        Option1: &operations.AnalyticsadminPropertiesDataStreamsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaListDataStreamsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate

Creates a measurement protocol secret.

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
    res, err := s.Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(ctx, operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput: &shared.GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput{
            DisplayName: sdk.String("deleniti"),
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("natus"),
        Parent: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet

Lookup for a single "GA4" MeasurementProtocolSecret.

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
    res, err := s.Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet(ctx, operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("labore"),
        Key: sdk.String("suscipit"),
        Name: "Robin Keebler",
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurity{
        Option1: &operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList

Returns child MeasurementProtocolSecrets under the specified parent Property.

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
    res, err := s.Properties.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(ctx, operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("reiciendis"),
        PageSize: sdk.Int64(652103),
        PageToken: sdk.String("ad"),
        Parent: "eum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("odit"),
    }, operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity{
        Option1: &operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesFirebaseLinksCreate

Creates a FirebaseLink. Properties can have at most one FirebaseLink.

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
    res, err := s.Properties.AnalyticsadminPropertiesFirebaseLinksCreate(ctx, operations.AnalyticsadminPropertiesFirebaseLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1betaFirebaseLinkInput: &shared.GoogleAnalyticsAdminV1betaFirebaseLinkInput{
            Project: sdk.String("quasi"),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("eius"),
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("deleniti"),
        Parent: "facilis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.AnalyticsadminPropertiesFirebaseLinksCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaFirebaseLink != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesFirebaseLinksList

Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.

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
    res, err := s.Properties.AnalyticsadminPropertiesFirebaseLinksList(ctx, operations.AnalyticsadminPropertiesFirebaseLinksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("sed"),
        PageSize: sdk.Int64(904648),
        PageToken: sdk.String("pariatur"),
        Parent: "accusantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("natus"),
    }, operations.AnalyticsadminPropertiesFirebaseLinksListSecurity{
        Option1: &operations.AnalyticsadminPropertiesFirebaseLinksListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaListFirebaseLinksResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesGoogleAdsLinksCreate

Creates a GoogleAdsLink.

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
    res, err := s.Properties.AnalyticsadminPropertiesGoogleAdsLinksCreate(ctx, operations.AnalyticsadminPropertiesGoogleAdsLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAnalyticsAdminV1betaGoogleAdsLinkInput: &shared.GoogleAnalyticsAdminV1betaGoogleAdsLinkInput{
            AdsPersonalizationEnabled: sdk.Bool(false),
            CustomerID: sdk.String("sunt"),
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("excepturi"),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("ab"),
    }, operations.AnalyticsadminPropertiesGoogleAdsLinksCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaGoogleAdsLink != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesGoogleAdsLinksDelete

Deletes a GoogleAdsLink on a property

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
    res, err := s.Properties.AnalyticsadminPropertiesGoogleAdsLinksDelete(ctx, operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("autem"),
        Key: sdk.String("nam"),
        Name: "Meredith Hickle PhD",
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesGoogleAdsLinksList

Lists GoogleAdsLinks on a property.

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
    res, err := s.Properties.AnalyticsadminPropertiesGoogleAdsLinksList(ctx, operations.AnalyticsadminPropertiesGoogleAdsLinksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("quis"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("dignissimos"),
        PageSize: sdk.Int64(54338),
        PageToken: sdk.String("quis"),
        Parent: "nesciunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.AnalyticsadminPropertiesGoogleAdsLinksListSecurity{
        Option1: &operations.AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesGoogleAdsLinksPatch

Updates a GoogleAdsLink on a property

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
    res, err := s.Properties.AnalyticsadminPropertiesGoogleAdsLinksPatch(ctx, operations.AnalyticsadminPropertiesGoogleAdsLinksPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1betaGoogleAdsLinkInput: &shared.GoogleAnalyticsAdminV1betaGoogleAdsLinkInput{
            AdsPersonalizationEnabled: sdk.Bool(false),
            CustomerID: sdk.String("quam"),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("hic"),
        Key: sdk.String("recusandae"),
        Name: "Miss Cesar Metz",
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UpdateMask: sdk.String("eaque"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("rerum"),
    }, operations.AnalyticsadminPropertiesGoogleAdsLinksPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaGoogleAdsLink != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesList

Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.

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
    res, err := s.Properties.AnalyticsadminPropertiesList(ctx, operations.AnalyticsadminPropertiesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("iste"),
        Filter: sdk.String("dolorum"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("pariatur"),
        PageSize: sdk.Int64(589910),
        PageToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        ShowDeleted: sdk.Bool(false),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.AnalyticsadminPropertiesListSecurity{
        Option1: &operations.AnalyticsadminPropertiesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaListPropertiesResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminPropertiesRunAccessReport

Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).

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
    res, err := s.Properties.AnalyticsadminPropertiesRunAccessReport(ctx, operations.AnalyticsadminPropertiesRunAccessReportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1betaRunAccessReportRequest: &shared.GoogleAnalyticsAdminV1betaRunAccessReportRequest{
            DateRanges: []shared.GoogleAnalyticsAdminV1betaAccessDateRange{
                shared.GoogleAnalyticsAdminV1betaAccessDateRange{
                    EndDate: sdk.String("dolorem"),
                    StartDate: sdk.String("dolorem"),
                },
                shared.GoogleAnalyticsAdminV1betaAccessDateRange{
                    EndDate: sdk.String("dolor"),
                    StartDate: sdk.String("qui"),
                },
            },
            DimensionFilter: &shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{
                AccessFilter: &shared.GoogleAnalyticsAdminV1betaAccessFilter{
                    BetweenFilter: &shared.GoogleAnalyticsAdminV1betaAccessBetweenFilter{
                        FromValue: &shared.GoogleAnalyticsAdminV1betaNumericValue{
                            DoubleValue: sdk.Float64(2187.49),
                            Int64Value: sdk.String("hic"),
                        },
                        ToValue: &shared.GoogleAnalyticsAdminV1betaNumericValue{
                            DoubleValue: sdk.Float64(5695.74),
                            Int64Value: sdk.String("cum"),
                        },
                    },
                    FieldName: sdk.String("voluptate"),
                    InListFilter: &shared.GoogleAnalyticsAdminV1betaAccessInListFilter{
                        CaseSensitive: sdk.Bool(false),
                        Values: []string{
                            "reiciendis",
                            "amet",
                        },
                    },
                    NumericFilter: &shared.GoogleAnalyticsAdminV1betaAccessNumericFilter{
                        Operation: shared.GoogleAnalyticsAdminV1betaAccessNumericFilterOperationEnumGreaterThan.ToPointer(),
                        Value: &shared.GoogleAnalyticsAdminV1betaNumericValue{
                            DoubleValue: sdk.Float64(2543.56),
                            Int64Value: sdk.String("veritatis"),
                        },
                    },
                    StringFilter: &shared.GoogleAnalyticsAdminV1betaAccessStringFilter{
                        CaseSensitive: sdk.Bool(false),
                        MatchType: shared.GoogleAnalyticsAdminV1betaAccessStringFilterMatchTypeEnumMatchTypeUnspecified.ToPointer(),
                        Value: sdk.String("ipsa"),
                    },
                },
                AndGroup: &shared.GoogleAnalyticsAdminV1betaAccessFilterExpressionList{
                    Expressions: []shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{
                        shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{},
                        shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{},
                    },
                },
                NotExpression: &shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{},
                OrGroup: &shared.GoogleAnalyticsAdminV1betaAccessFilterExpressionList{
                    Expressions: []shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{
                        shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{},
                        shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{},
                    },
                },
            },
            Dimensions: []shared.GoogleAnalyticsAdminV1betaAccessDimension{
                shared.GoogleAnalyticsAdminV1betaAccessDimension{
                    DimensionName: sdk.String("accusamus"),
                },
                shared.GoogleAnalyticsAdminV1betaAccessDimension{
                    DimensionName: sdk.String("quidem"),
                },
            },
            Limit: sdk.String("voluptatibus"),
            MetricFilter: &shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{
                AccessFilter: &shared.GoogleAnalyticsAdminV1betaAccessFilter{
                    BetweenFilter: &shared.GoogleAnalyticsAdminV1betaAccessBetweenFilter{
                        FromValue: &shared.GoogleAnalyticsAdminV1betaNumericValue{
                            DoubleValue: sdk.Float64(3777.52),
                            Int64Value: sdk.String("natus"),
                        },
                        ToValue: &shared.GoogleAnalyticsAdminV1betaNumericValue{
                            DoubleValue: sdk.Float64(1796.03),
                            Int64Value: sdk.String("atque"),
                        },
                    },
                    FieldName: sdk.String("sit"),
                    InListFilter: &shared.GoogleAnalyticsAdminV1betaAccessInListFilter{
                        CaseSensitive: sdk.Bool(false),
                        Values: []string{
                            "ab",
                            "soluta",
                            "dolorum",
                            "iusto",
                        },
                    },
                    NumericFilter: &shared.GoogleAnalyticsAdminV1betaAccessNumericFilter{
                        Operation: shared.GoogleAnalyticsAdminV1betaAccessNumericFilterOperationEnumLessThan.ToPointer(),
                        Value: &shared.GoogleAnalyticsAdminV1betaNumericValue{
                            DoubleValue: sdk.Float64(6770.82),
                            Int64Value: sdk.String("deleniti"),
                        },
                    },
                    StringFilter: &shared.GoogleAnalyticsAdminV1betaAccessStringFilter{
                        CaseSensitive: sdk.Bool(false),
                        MatchType: shared.GoogleAnalyticsAdminV1betaAccessStringFilterMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("necessitatibus"),
                    },
                },
                AndGroup: &shared.GoogleAnalyticsAdminV1betaAccessFilterExpressionList{
                    Expressions: []shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{
                        shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{},
                        shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{},
                        shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{},
                    },
                },
                NotExpression: &shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{},
                OrGroup: &shared.GoogleAnalyticsAdminV1betaAccessFilterExpressionList{
                    Expressions: []shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{
                        shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{},
                        shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{},
                        shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{},
                        shared.GoogleAnalyticsAdminV1betaAccessFilterExpression{},
                    },
                },
            },
            Metrics: []shared.GoogleAnalyticsAdminV1betaAccessMetric{
                shared.GoogleAnalyticsAdminV1betaAccessMetric{
                    MetricName: sdk.String("ipsum"),
                },
                shared.GoogleAnalyticsAdminV1betaAccessMetric{
                    MetricName: sdk.String("voluptate"),
                },
            },
            Offset: sdk.String("id"),
            OrderBys: []shared.GoogleAnalyticsAdminV1betaAccessOrderBy{
                shared.GoogleAnalyticsAdminV1betaAccessOrderBy{
                    Desc: sdk.Bool(false),
                    Dimension: &shared.GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy{
                        DimensionName: sdk.String("eius"),
                        OrderType: shared.GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderByOrderTypeEnumOrderTypeUnspecified.ToPointer(),
                    },
                    Metric: &shared.GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy{
                        MetricName: sdk.String("perferendis"),
                    },
                },
                shared.GoogleAnalyticsAdminV1betaAccessOrderBy{
                    Desc: sdk.Bool(false),
                    Dimension: &shared.GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy{
                        DimensionName: sdk.String("amet"),
                        OrderType: shared.GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderByOrderTypeEnumNumeric.ToPointer(),
                    },
                    Metric: &shared.GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy{
                        MetricName: sdk.String("accusamus"),
                    },
                },
                shared.GoogleAnalyticsAdminV1betaAccessOrderBy{
                    Desc: sdk.Bool(false),
                    Dimension: &shared.GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy{
                        DimensionName: sdk.String("ad"),
                        OrderType: shared.GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderByOrderTypeEnumNumeric.ToPointer(),
                    },
                    Metric: &shared.GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy{
                        MetricName: sdk.String("suscipit"),
                    },
                },
                shared.GoogleAnalyticsAdminV1betaAccessOrderBy{
                    Desc: sdk.Bool(false),
                    Dimension: &shared.GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy{
                        DimensionName: sdk.String("deserunt"),
                        OrderType: shared.GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderByOrderTypeEnumCaseInsensitiveAlphanumeric.ToPointer(),
                    },
                    Metric: &shared.GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy{
                        MetricName: sdk.String("minima"),
                    },
                },
            },
            ReturnEntityQuota: sdk.Bool(false),
            TimeZone: sdk.String("repellendus"),
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Entity: "at",
        Fields: sdk.String("quaerat"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("qui"),
    }, operations.AnalyticsadminPropertiesRunAccessReportSecurity{
        Option1: &operations.AnalyticsadminPropertiesRunAccessReportSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1betaRunAccessReportResponse != nil {
        // handle response
    }
}
```
