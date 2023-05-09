# properties

### Available Operations

* [analyticsadminPropertiesAcknowledgeUserDataCollection](#analyticsadminpropertiesacknowledgeuserdatacollection) - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
* [analyticsadminPropertiesConversionEventsCreate](#analyticsadminpropertiesconversioneventscreate) - Creates a conversion event with the specified attributes.
* [analyticsadminPropertiesConversionEventsList](#analyticsadminpropertiesconversioneventslist) - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* [analyticsadminPropertiesCreate](#analyticsadminpropertiescreate) - Creates an "GA4" property with the specified location and attributes.
* [analyticsadminPropertiesCustomDimensionsCreate](#analyticsadminpropertiescustomdimensionscreate) - Creates a CustomDimension.
* [analyticsadminPropertiesCustomDimensionsList](#analyticsadminpropertiescustomdimensionslist) - Lists CustomDimensions on a property.
* [analyticsadminPropertiesCustomMetricsArchive](#analyticsadminpropertiescustommetricsarchive) - Archives a CustomMetric on a property.
* [analyticsadminPropertiesCustomMetricsCreate](#analyticsadminpropertiescustommetricscreate) - Creates a CustomMetric.
* [analyticsadminPropertiesCustomMetricsList](#analyticsadminpropertiescustommetricslist) - Lists CustomMetrics on a property.
* [analyticsadminPropertiesDataStreamsCreate](#analyticsadminpropertiesdatastreamscreate) - Creates a DataStream.
* [analyticsadminPropertiesDataStreamsList](#analyticsadminpropertiesdatastreamslist) - Lists DataStreams on a property.
* [analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate](#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretscreate) - Creates a measurement protocol secret.
* [analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet](#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretsget) - Lookup for a single "GA4" MeasurementProtocolSecret.
* [analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList](#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretslist) - Returns child MeasurementProtocolSecrets under the specified parent Property.
* [analyticsadminPropertiesFirebaseLinksCreate](#analyticsadminpropertiesfirebaselinkscreate) - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* [analyticsadminPropertiesFirebaseLinksList](#analyticsadminpropertiesfirebaselinkslist) - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* [analyticsadminPropertiesGoogleAdsLinksCreate](#analyticsadminpropertiesgoogleadslinkscreate) - Creates a GoogleAdsLink.
* [analyticsadminPropertiesGoogleAdsLinksDelete](#analyticsadminpropertiesgoogleadslinksdelete) - Deletes a GoogleAdsLink on a property
* [analyticsadminPropertiesGoogleAdsLinksList](#analyticsadminpropertiesgoogleadslinkslist) - Lists GoogleAdsLinks on a property.
* [analyticsadminPropertiesGoogleAdsLinksPatch](#analyticsadminpropertiesgoogleadslinkspatch) - Updates a GoogleAdsLink on a property
* [analyticsadminPropertiesList](#analyticsadminpropertieslist) - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
* [analyticsadminPropertiesRunAccessReport](#analyticsadminpropertiesrunaccessreport) - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).

## analyticsadminPropertiesAcknowledgeUserDataCollection

Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest req = new AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest = new GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest() {{
                    acknowledgement = "mollitia";
                }};;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "corporis";
                key = "explicabo";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "omnis";
                uploadProtocol = "nemo";
            }};            

            AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse res = sdk.properties.analyticsadminPropertiesAcknowledgeUserDataCollection(req, new AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity("minima", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesConversionEventsCreate

Creates a conversion event with the specified attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesConversionEventsCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesConversionEventsCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesConversionEventsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaConversionEventInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesConversionEventsCreateRequest req = new AnalyticsadminPropertiesConversionEventsCreateRequest("accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1betaConversionEventInput = new GoogleAnalyticsAdminV1betaConversionEventInput() {{
                    eventName = "culpa";
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "mollitia";
                key = "dolorem";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellat";
                uploadProtocol = "mollitia";
            }};            

            AnalyticsadminPropertiesConversionEventsCreateResponse res = sdk.properties.analyticsadminPropertiesConversionEventsCreate(req, new AnalyticsadminPropertiesConversionEventsCreateSecurity("occaecati", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1betaConversionEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesConversionEventsList

Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesConversionEventsListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesConversionEventsListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesConversionEventsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesConversionEventsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesConversionEventsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesConversionEventsListRequest req = new AnalyticsadminPropertiesConversionEventsListRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "quia";
                key = "quis";
                oauthToken = "vitae";
                pageSize = 674752L;
                pageToken = "animi";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "odit";
                uploadProtocol = "quo";
            }};            

            AnalyticsadminPropertiesConversionEventsListResponse res = sdk.properties.analyticsadminPropertiesConversionEventsList(req, new AnalyticsadminPropertiesConversionEventsListSecurity() {{
                option1 = new AnalyticsadminPropertiesConversionEventsListSecurityOption1("sequi", "tenetur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1betaListConversionEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesCreate

Creates an "GA4" property with the specified location and attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaPropertyInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesCreateRequest req = new AnalyticsadminPropertiesCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1betaPropertyInput = new GoogleAnalyticsAdminV1betaPropertyInput() {{
                    account = "id";
                    currencyCode = "possimus";
                    displayName = "aut";
                    industryCategory = GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum.BUSINESS_AND_INDUSTRIAL_MARKETS;
                    parent = "error";
                    propertyType = GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum.PROPERTY_TYPE_ROLLUP;
                    timeZone = "laborum";
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "vero";
                key = "nihil";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "ipsa";
                uploadProtocol = "omnis";
            }};            

            AnalyticsadminPropertiesCreateResponse res = sdk.properties.analyticsadminPropertiesCreate(req, new AnalyticsadminPropertiesCreateSecurity("voluptate", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1betaProperty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesCustomDimensionsCreate

Creates a CustomDimension.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomDimensionsCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomDimensionsCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomDimensionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaCustomDimensionInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesCustomDimensionsCreateRequest req = new AnalyticsadminPropertiesCustomDimensionsCreateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1betaCustomDimensionInput = new GoogleAnalyticsAdminV1betaCustomDimensionInput() {{
                    description = "reprehenderit";
                    disallowAdsPersonalization = false;
                    displayName = "ut";
                    parameterName = "maiores";
                    scope = GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum.DIMENSION_SCOPE_UNSPECIFIED;
                }};;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "iusto";
                fields = "dicta";
                key = "harum";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "commodi";
                uploadProtocol = "repudiandae";
            }};            

            AnalyticsadminPropertiesCustomDimensionsCreateResponse res = sdk.properties.analyticsadminPropertiesCustomDimensionsCreate(req, new AnalyticsadminPropertiesCustomDimensionsCreateSecurity("quae", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1betaCustomDimension != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesCustomDimensionsList

Lists CustomDimensions on a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomDimensionsListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomDimensionsListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomDimensionsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomDimensionsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomDimensionsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesCustomDimensionsListRequest req = new AnalyticsadminPropertiesCustomDimensionsListRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "praesentium";
                key = "rem";
                oauthToken = "voluptates";
                pageSize = 93940L;
                pageToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "veritatis";
                uploadProtocol = "itaque";
            }};            

            AnalyticsadminPropertiesCustomDimensionsListResponse res = sdk.properties.analyticsadminPropertiesCustomDimensionsList(req, new AnalyticsadminPropertiesCustomDimensionsListSecurity() {{
                option1 = new AnalyticsadminPropertiesCustomDimensionsListSecurityOption1("incidunt", "enim") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1betaListCustomDimensionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesCustomMetricsArchive

Archives a CustomMetric on a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsArchiveRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsArchiveResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsArchiveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesCustomMetricsArchiveRequest req = new AnalyticsadminPropertiesCustomMetricsArchiveRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("explicabo", "deserunt");
                    put("distinctio", "quibusdam");
                    put("labore", "modi");
                    put("qui", "aliquid");
                }};
                accessToken = "cupiditate";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "magni";
                key = "assumenda";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "fugit";
                uploadProtocol = "dolorum";
            }};            

            AnalyticsadminPropertiesCustomMetricsArchiveResponse res = sdk.properties.analyticsadminPropertiesCustomMetricsArchive(req, new AnalyticsadminPropertiesCustomMetricsArchiveSecurity("excepturi", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesCustomMetricsCreate

Creates a CustomMetric.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaCustomMetricInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaCustomMetricScopeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesCustomMetricsCreateRequest req = new AnalyticsadminPropertiesCustomMetricsCreateRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1betaCustomMetricInput = new GoogleAnalyticsAdminV1betaCustomMetricInput() {{
                    description = "labore";
                    displayName = "delectus";
                    measurementUnit = GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum.METERS;
                    parameterName = "non";
                    restrictedMetricType = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum[]{{
                        add(GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum.COST_DATA),
                        add(GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum.COST_DATA),
                        add(GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum.COST_DATA),
                        add(GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum.REVENUE_DATA),
                    }};
                    scope = GoogleAnalyticsAdminV1betaCustomMetricScopeEnum.EVENT;
                }};;
                accessToken = "officia";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "a";
                key = "dolorum";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "illum";
                uploadProtocol = "maiores";
            }};            

            AnalyticsadminPropertiesCustomMetricsCreateResponse res = sdk.properties.analyticsadminPropertiesCustomMetricsCreate(req, new AnalyticsadminPropertiesCustomMetricsCreateSecurity("rerum", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1betaCustomMetric != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesCustomMetricsList

Lists CustomMetrics on a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesCustomMetricsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesCustomMetricsListRequest req = new AnalyticsadminPropertiesCustomMetricsListRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facere";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "laborum";
                key = "accusamus";
                oauthToken = "non";
                pageSize = 581273L;
                pageToken = "enim";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "delectus";
                uploadProtocol = "quidem";
            }};            

            AnalyticsadminPropertiesCustomMetricsListResponse res = sdk.properties.analyticsadminPropertiesCustomMetricsList(req, new AnalyticsadminPropertiesCustomMetricsListSecurity() {{
                option1 = new AnalyticsadminPropertiesCustomMetricsListSecurityOption1("provident", "nam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1betaListCustomMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDataStreamsCreate

Creates a DataStream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaDataStreamInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaDataStreamTypeEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDataStreamsCreateRequest req = new AnalyticsadminPropertiesDataStreamsCreateRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1betaDataStreamInput = new GoogleAnalyticsAdminV1betaDataStreamInput() {{
                    androidAppStreamData = new GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput() {{
                        packageName = "deleniti";
                    }};;
                    displayName = "sapiente";
                    iosAppStreamData = new GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput() {{
                        bundleId = "amet";
                    }};;
                    type = GoogleAnalyticsAdminV1betaDataStreamTypeEnum.ANDROID_APP_DATA_STREAM;
                    webStreamData = new GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput() {{
                        defaultUri = "nisi";
                    }};;
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "molestiae";
                key = "perferendis";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "distinctio";
                uploadProtocol = "id";
            }};            

            AnalyticsadminPropertiesDataStreamsCreateResponse res = sdk.properties.analyticsadminPropertiesDataStreamsCreate(req, new AnalyticsadminPropertiesDataStreamsCreateSecurity("labore", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1betaDataStream != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDataStreamsList

Lists DataStreams on a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDataStreamsListRequest req = new AnalyticsadminPropertiesDataStreamsListRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "vero";
                fields = "aspernatur";
                key = "architecto";
                oauthToken = "magnam";
                pageSize = 92373L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "provident";
                uploadProtocol = "quos";
            }};            

            AnalyticsadminPropertiesDataStreamsListResponse res = sdk.properties.analyticsadminPropertiesDataStreamsList(req, new AnalyticsadminPropertiesDataStreamsListSecurity() {{
                option1 = new AnalyticsadminPropertiesDataStreamsListSecurityOption1("sint", "accusantium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1betaListDataStreamsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate

Creates a measurement protocol secret.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest req = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1betaMeasurementProtocolSecretInput = new GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput() {{
                    displayName = "mollitia";
                }};;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "necessitatibus";
                key = "odit";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "iure";
                uploadProtocol = "doloribus";
            }};            

            AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse res = sdk.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(req, new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity("debitis", "eius") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1betaMeasurementProtocolSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet

Lookup for a single "GA4" MeasurementProtocolSecret.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest req = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest("maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "architecto";
                fields = "architecto";
                key = "repudiandae";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "nihil";
                uploadProtocol = "repellat";
            }};            

            AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetResponse res = sdk.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet(req, new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurity() {{
                option1 = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurityOption1("quibusdam", "sed") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1betaMeasurementProtocolSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList

Returns child MeasurementProtocolSecrets under the specified parent Property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest req = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "natus";
                key = "magni";
                oauthToken = "sunt";
                pageSize = 779051L;
                pageToken = "illum";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "maxime";
                uploadProtocol = "ea";
            }};            

            AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse res = sdk.properties.analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(req, new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity() {{
                option1 = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1("excepturi", "odit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesFirebaseLinksCreate

Creates a FirebaseLink. Properties can have at most one FirebaseLink.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFirebaseLinksCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFirebaseLinksCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFirebaseLinksCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaFirebaseLinkInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesFirebaseLinksCreateRequest req = new AnalyticsadminPropertiesFirebaseLinksCreateRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1betaFirebaseLinkInput = new GoogleAnalyticsAdminV1betaFirebaseLinkInput() {{
                    project = "ab";
                }};;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                fields = "voluptate";
                key = "autem";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "pariatur";
                uploadProtocol = "nemo";
            }};            

            AnalyticsadminPropertiesFirebaseLinksCreateResponse res = sdk.properties.analyticsadminPropertiesFirebaseLinksCreate(req, new AnalyticsadminPropertiesFirebaseLinksCreateSecurity("voluptatibus", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1betaFirebaseLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesFirebaseLinksList

Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFirebaseLinksListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFirebaseLinksListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFirebaseLinksListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFirebaseLinksListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesFirebaseLinksListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesFirebaseLinksListRequest req = new AnalyticsadminPropertiesFirebaseLinksListRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "corporis";
                fields = "hic";
                key = "libero";
                oauthToken = "nobis";
                pageSize = 171629L;
                pageToken = "quis";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "dignissimos";
                uploadProtocol = "eaque";
            }};            

            AnalyticsadminPropertiesFirebaseLinksListResponse res = sdk.properties.analyticsadminPropertiesFirebaseLinksList(req, new AnalyticsadminPropertiesFirebaseLinksListSecurity() {{
                option1 = new AnalyticsadminPropertiesFirebaseLinksListSecurityOption1("quis", "nesciunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1betaListFirebaseLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesGoogleAdsLinksCreate

Creates a GoogleAdsLink.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksCreateRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksCreateResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaGoogleAdsLinkInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesGoogleAdsLinksCreateRequest req = new AnalyticsadminPropertiesGoogleAdsLinksCreateRequest("eos") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1betaGoogleAdsLinkInput = new GoogleAnalyticsAdminV1betaGoogleAdsLinkInput() {{
                    adsPersonalizationEnabled = false;
                    customerId = "dolores";
                }};;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "vero";
                key = "nostrum";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "omnis";
                uploadProtocol = "facilis";
            }};            

            AnalyticsadminPropertiesGoogleAdsLinksCreateResponse res = sdk.properties.analyticsadminPropertiesGoogleAdsLinksCreate(req, new AnalyticsadminPropertiesGoogleAdsLinksCreateSecurity("perspiciatis", "voluptatem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1betaGoogleAdsLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesGoogleAdsLinksDelete

Deletes a GoogleAdsLink on a property

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest req = new AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest("porro") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "occaecati";
                key = "rerum";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "earum";
                uploadProtocol = "modi";
            }};            

            AnalyticsadminPropertiesGoogleAdsLinksDeleteResponse res = sdk.properties.analyticsadminPropertiesGoogleAdsLinksDelete(req, new AnalyticsadminPropertiesGoogleAdsLinksDeleteSecurity("iste", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesGoogleAdsLinksList

Lists GoogleAdsLinks on a property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesGoogleAdsLinksListRequest req = new AnalyticsadminPropertiesGoogleAdsLinksListRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "delectus";
                key = "quaerat";
                oauthToken = "quos";
                pageSize = 398221L;
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "dolor";
                uploadProtocol = "qui";
            }};            

            AnalyticsadminPropertiesGoogleAdsLinksListResponse res = sdk.properties.analyticsadminPropertiesGoogleAdsLinksList(req, new AnalyticsadminPropertiesGoogleAdsLinksListSecurity() {{
                option1 = new AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1("ipsum", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1betaListGoogleAdsLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesGoogleAdsLinksPatch

Updates a GoogleAdsLink on a property

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksPatchRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksPatchResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesGoogleAdsLinksPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaGoogleAdsLinkInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesGoogleAdsLinksPatchRequest req = new AnalyticsadminPropertiesGoogleAdsLinksPatchRequest("excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1betaGoogleAdsLinkInput = new GoogleAnalyticsAdminV1betaGoogleAdsLinkInput() {{
                    adsPersonalizationEnabled = false;
                    customerId = "voluptate";
                }};;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "dolorum";
                key = "numquam";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "ipsa";
                updateMask = "ipsa";
                uploadType = "iure";
                uploadProtocol = "odio";
            }};            

            AnalyticsadminPropertiesGoogleAdsLinksPatchResponse res = sdk.properties.analyticsadminPropertiesGoogleAdsLinksPatch(req, new AnalyticsadminPropertiesGoogleAdsLinksPatchSecurity("quaerat", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1betaGoogleAdsLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesList

Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesListRequest req = new AnalyticsadminPropertiesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "eos";
                filter = "atque";
                key = "sit";
                oauthToken = "fugiat";
                pageSize = 67249L;
                pageToken = "soluta";
                prettyPrint = false;
                quotaUser = "dolorum";
                showDeleted = false;
                uploadType = "iusto";
                uploadProtocol = "voluptate";
            }};            

            AnalyticsadminPropertiesListResponse res = sdk.properties.analyticsadminPropertiesList(req, new AnalyticsadminPropertiesListSecurity() {{
                option1 = new AnalyticsadminPropertiesListSecurityOption1("dolorum", "deleniti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1betaListPropertiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminPropertiesRunAccessReport

Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesRunAccessReportRequest;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesRunAccessReportResponse;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesRunAccessReportSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesRunAccessReportSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminPropertiesRunAccessReportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessBetweenFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessDateRange;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessDimension;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessFilterExpression;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessFilterExpressionList;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessInListFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessMetric;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessNumericFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessNumericFilterOperationEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessOrderBy;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderByOrderTypeEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessStringFilter;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessStringFilterMatchTypeEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaNumericValue;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaRunAccessReportRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminPropertiesRunAccessReportRequest req = new AnalyticsadminPropertiesRunAccessReportRequest("omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1betaRunAccessReportRequest = new GoogleAnalyticsAdminV1betaRunAccessReportRequest() {{
                    dateRanges = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessDateRange[]{{
                        add(new GoogleAnalyticsAdminV1betaAccessDateRange() {{
                            endDate = "asperiores";
                            startDate = "nihil";
                        }}),
                        add(new GoogleAnalyticsAdminV1betaAccessDateRange() {{
                            endDate = "ipsum";
                            startDate = "voluptate";
                        }}),
                        add(new GoogleAnalyticsAdminV1betaAccessDateRange() {{
                            endDate = "id";
                            startDate = "saepe";
                        }}),
                    }};
                    dimensionFilter = new GoogleAnalyticsAdminV1betaAccessFilterExpression() {{
                        accessFilter = new GoogleAnalyticsAdminV1betaAccessFilter() {{
                            betweenFilter = new GoogleAnalyticsAdminV1betaAccessBetweenFilter() {{
                                fromValue = new GoogleAnalyticsAdminV1betaNumericValue() {{
                                    doubleValue = 2633.22;
                                    int64Value = "aspernatur";
                                }};;
                                toValue = new GoogleAnalyticsAdminV1betaNumericValue() {{
                                    doubleValue = 206.51;
                                    int64Value = "amet";
                                }};;
                            }};;
                            fieldName = "optio";
                            inListFilter = new GoogleAnalyticsAdminV1betaAccessInListFilter() {{
                                caseSensitive = false;
                                values = new String[]{{
                                    add("ad"),
                                    add("saepe"),
                                    add("suscipit"),
                                    add("deserunt"),
                                }};
                            }};;
                            numericFilter = new GoogleAnalyticsAdminV1betaAccessNumericFilter() {{
                                operation = GoogleAnalyticsAdminV1betaAccessNumericFilterOperationEnum.LESS_THAN_OR_EQUAL;
                                value = new GoogleAnalyticsAdminV1betaNumericValue() {{
                                    doubleValue = 3246.83;
                                    int64Value = "repellendus";
                                }};;
                            }};;
                            stringFilter = new GoogleAnalyticsAdminV1betaAccessStringFilter() {{
                                caseSensitive = false;
                                matchType = GoogleAnalyticsAdminV1betaAccessStringFilterMatchTypeEnum.ENDS_WITH;
                                value = "similique";
                            }};;
                        }};;
                        andGroup = new GoogleAnalyticsAdminV1betaAccessFilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessFilterExpression[]{{
                                add(new GoogleAnalyticsAdminV1betaAccessFilterExpression() {{}}),
                            }};
                        }};;
                        notExpression = new GoogleAnalyticsAdminV1betaAccessFilterExpression();;
                        orGroup = new GoogleAnalyticsAdminV1betaAccessFilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessFilterExpression[]{{
                                add(new GoogleAnalyticsAdminV1betaAccessFilterExpression() {{}}),
                                add(new GoogleAnalyticsAdminV1betaAccessFilterExpression() {{}}),
                                add(new GoogleAnalyticsAdminV1betaAccessFilterExpression() {{}}),
                                add(new GoogleAnalyticsAdminV1betaAccessFilterExpression() {{}}),
                            }};
                        }};;
                    }};;
                    dimensions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessDimension[]{{
                        add(new GoogleAnalyticsAdminV1betaAccessDimension() {{
                            dimensionName = "tempora";
                        }}),
                        add(new GoogleAnalyticsAdminV1betaAccessDimension() {{
                            dimensionName = "vel";
                        }}),
                    }};
                    limit = "quod";
                    metricFilter = new GoogleAnalyticsAdminV1betaAccessFilterExpression() {{
                        accessFilter = new GoogleAnalyticsAdminV1betaAccessFilter() {{
                            betweenFilter = new GoogleAnalyticsAdminV1betaAccessBetweenFilter() {{
                                fromValue = new GoogleAnalyticsAdminV1betaNumericValue() {{
                                    doubleValue = 8853.38;
                                    int64Value = "qui";
                                }};;
                                toValue = new GoogleAnalyticsAdminV1betaNumericValue() {{
                                    doubleValue = 6798.8;
                                    int64Value = "a";
                                }};;
                            }};;
                            fieldName = "esse";
                            inListFilter = new GoogleAnalyticsAdminV1betaAccessInListFilter() {{
                                caseSensitive = false;
                                values = new String[]{{
                                    add("iusto"),
                                    add("ipsum"),
                                    add("quisquam"),
                                }};
                            }};;
                            numericFilter = new GoogleAnalyticsAdminV1betaAccessNumericFilter() {{
                                operation = GoogleAnalyticsAdminV1betaAccessNumericFilterOperationEnum.GREATER_THAN_OR_EQUAL;
                                value = new GoogleAnalyticsAdminV1betaNumericValue() {{
                                    doubleValue = 2294.42;
                                    int64Value = "tempore";
                                }};;
                            }};;
                            stringFilter = new GoogleAnalyticsAdminV1betaAccessStringFilter() {{
                                caseSensitive = false;
                                matchType = GoogleAnalyticsAdminV1betaAccessStringFilterMatchTypeEnum.PARTIAL_REGEXP;
                                value = "numquam";
                            }};;
                        }};;
                        andGroup = new GoogleAnalyticsAdminV1betaAccessFilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessFilterExpression[]{{
                                add(new GoogleAnalyticsAdminV1betaAccessFilterExpression() {{}}),
                                add(new GoogleAnalyticsAdminV1betaAccessFilterExpression() {{}}),
                            }};
                        }};;
                        notExpression = new GoogleAnalyticsAdminV1betaAccessFilterExpression();;
                        orGroup = new GoogleAnalyticsAdminV1betaAccessFilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessFilterExpression[]{{
                                add(new GoogleAnalyticsAdminV1betaAccessFilterExpression() {{}}),
                            }};
                        }};;
                    }};;
                    metrics = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessMetric[]{{
                        add(new GoogleAnalyticsAdminV1betaAccessMetric() {{
                            metricName = "totam";
                        }}),
                        add(new GoogleAnalyticsAdminV1betaAccessMetric() {{
                            metricName = "nihil";
                        }}),
                        add(new GoogleAnalyticsAdminV1betaAccessMetric() {{
                            metricName = "sit";
                        }}),
                        add(new GoogleAnalyticsAdminV1betaAccessMetric() {{
                            metricName = "expedita";
                        }}),
                    }};
                    offset = "neque";
                    orderBys = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1betaAccessOrderBy[]{{
                        add(new GoogleAnalyticsAdminV1betaAccessOrderBy() {{
                            desc = false;
                            dimension = new GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy() {{
                                dimensionName = "vel";
                                orderType = GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderByOrderTypeEnum.CASE_INSENSITIVE_ALPHANUMERIC;
                            }};
                            metric = new GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy() {{
                                metricName = "voluptas";
                            }};
                        }}),
                    }};
                    returnEntityQuota = false;
                    timeZone = "deserunt";
                }};;
                accessToken = "quam";
                alt = AltEnum.JSON;
                callback = "incidunt";
                fields = "qui";
                key = "cupiditate";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "soluta";
                uploadProtocol = "dicta";
            }};            

            AnalyticsadminPropertiesRunAccessReportResponse res = sdk.properties.analyticsadminPropertiesRunAccessReport(req, new AnalyticsadminPropertiesRunAccessReportSecurity() {{
                option1 = new AnalyticsadminPropertiesRunAccessReportSecurityOption1("laborum", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1betaRunAccessReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
