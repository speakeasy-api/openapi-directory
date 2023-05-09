# conversion

### Available Operations

* [doubleclicksearchConversionGet](#doubleclicksearchconversionget) - Retrieves a list of conversions from a DoubleClick Search engine account.
* [doubleclicksearchConversionGetByCustomerId](#doubleclicksearchconversiongetbycustomerid) - Retrieves a list of conversions from a DoubleClick Search engine account.
* [doubleclicksearchConversionInsert](#doubleclicksearchconversioninsert) - Inserts a batch of new conversions into DoubleClick Search.
* [doubleclicksearchConversionUpdate](#doubleclicksearchconversionupdate) - Updates a batch of conversions in DoubleClick Search.
* [doubleclicksearchConversionUpdateAvailability](#doubleclicksearchconversionupdateavailability) - Updates the availabilities of a batch of floodlight activities in DoubleClick Search.

## doubleclicksearchConversionGet

Retrieves a list of conversions from a DoubleClick Search engine account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetRequest;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetResponse;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclicksearchConversionGetRequest req = new DoubleclicksearchConversionGetRequest("excepturi", "nisi", 925597L, "temporibus", 71036L, 337396L, 87129L) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                adGroupId = "ipsam";
                adId = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quo";
                campaignId = "odit";
                criterionId = "at";
                customerId = "at";
                fields = "maiores";
                key = "molestiae";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "esse";
                uploadProtocol = "totam";
            }};            

            DoubleclicksearchConversionGetResponse res = sdk.conversion.doubleclicksearchConversionGet(req, new DoubleclicksearchConversionGetSecurity("porro", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.conversionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## doubleclicksearchConversionGetByCustomerId

Retrieves a list of conversions from a DoubleClick Search engine account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetByCustomerIdRequest;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetByCustomerIdResponse;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetByCustomerIdSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclicksearchConversionGetByCustomerIdRequest req = new DoubleclicksearchConversionGetByCustomerIdRequest("dicta", 720633L, 639921L, 582020L, 143353L) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                adGroupId = "optio";
                adId = "totam";
                advertiserId = "beatae";
                agencyId = "commodi";
                alt = AltEnum.MEDIA;
                callback = "modi";
                campaignId = "qui";
                criterionId = "impedit";
                engineAccountId = "cum";
                fields = "esse";
                key = "ipsum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "perferendis";
                uploadProtocol = "ad";
            }};            

            DoubleclicksearchConversionGetByCustomerIdResponse res = sdk.conversion.doubleclicksearchConversionGetByCustomerId(req, new DoubleclicksearchConversionGetByCustomerIdSecurity("natus", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.conversionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## doubleclicksearchConversionInsert

Inserts a batch of new conversions into DoubleClick Search.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionInsertRequest;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionInsertResponse;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Conversion;
import org.openapis.openapi.models.shared.ConversionList;
import org.openapis.openapi.models.shared.CustomDimension;
import org.openapis.openapi.models.shared.CustomMetric;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclicksearchConversionInsertRequest req = new DoubleclicksearchConversionInsertRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                conversionList = new ConversionList() {{
                    conversion = new org.openapis.openapi.models.shared.Conversion[]{{
                        add(new Conversion() {{
                            adGroupId = "natus";
                            adId = "laboriosam";
                            advertiserId = "hic";
                            agencyId = "saepe";
                            attributionModel = "fuga";
                            campaignId = "in";
                            channel = "corporis";
                            clickId = "iste";
                            conversionId = "iure";
                            conversionModifiedTimestamp = "saepe";
                            conversionTimestamp = "quidem";
                            countMillis = "architecto";
                            criterionId = "ipsa";
                            currencyCode = "reiciendis";
                            customDimension = new org.openapis.openapi.models.shared.CustomDimension[]{{
                                add(new CustomDimension() {{
                                    name = "Cameron Dach";
                                    value = "explicabo";
                                }}),
                                add(new CustomDimension() {{
                                    name = "Ronnie Mohr";
                                    value = "excepturi";
                                }}),
                                add(new CustomDimension() {{
                                    name = "Charlene Nicolas";
                                    value = "architecto";
                                }}),
                            }};
                            customMetric = new org.openapis.openapi.models.shared.CustomMetric[]{{
                                add(new CustomMetric() {{
                                    name = "Cecilia Crooks";
                                    value = 5818.5;
                                }}),
                                add(new CustomMetric() {{
                                    name = "Lucy Konopelski";
                                    value = 6235.1;
                                }}),
                                add(new CustomMetric() {{
                                    name = "Beatrice Brown";
                                    value = 3172.02;
                                }}),
                            }};
                            customerId = "odit";
                            deviceType = "quo";
                            dsConversionId = "sequi";
                            engineAccountId = "tenetur";
                            floodlightOrderId = "ipsam";
                            inventoryAccountId = "id";
                            productCountry = "possimus";
                            productGroupId = "aut";
                            productId = "quasi";
                            productLanguage = "error";
                            quantityMillis = "temporibus";
                            revenueMicros = "laborum";
                            segmentationId = "quasi";
                            segmentationName = "reiciendis";
                            segmentationType = "voluptatibus";
                            state = "vero";
                            storeId = "nihil";
                            type = "praesentium";
                        }}),
                    }};
                    kind = "voluptatibus";
                }};;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "cum";
                key = "perferendis";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "ut";
                uploadProtocol = "maiores";
            }};            

            DoubleclicksearchConversionInsertResponse res = sdk.conversion.doubleclicksearchConversionInsert(req, new DoubleclicksearchConversionInsertSecurity("dicta", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.conversionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## doubleclicksearchConversionUpdate

Updates a batch of conversions in DoubleClick Search.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionUpdateRequest;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionUpdateResponse;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Conversion;
import org.openapis.openapi.models.shared.ConversionList;
import org.openapis.openapi.models.shared.CustomDimension;
import org.openapis.openapi.models.shared.CustomMetric;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclicksearchConversionUpdateRequest req = new DoubleclicksearchConversionUpdateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                conversionList = new ConversionList() {{
                    conversion = new org.openapis.openapi.models.shared.Conversion[]{{
                        add(new Conversion() {{
                            adGroupId = "dicta";
                            adId = "harum";
                            advertiserId = "enim";
                            agencyId = "accusamus";
                            attributionModel = "commodi";
                            campaignId = "repudiandae";
                            channel = "quae";
                            clickId = "ipsum";
                            conversionId = "quidem";
                            conversionModifiedTimestamp = "molestias";
                            conversionTimestamp = "excepturi";
                            countMillis = "pariatur";
                            criterionId = "modi";
                            currencyCode = "praesentium";
                            customDimension = new org.openapis.openapi.models.shared.CustomDimension[]{{
                                add(new CustomDimension() {{
                                    name = "Carl Waelchi DVM";
                                    value = "incidunt";
                                }}),
                                add(new CustomDimension() {{
                                    name = "Elizabeth Orn";
                                    value = "deserunt";
                                }}),
                                add(new CustomDimension() {{
                                    name = "Marty Green";
                                    value = "aliquid";
                                }}),
                            }};
                            customMetric = new org.openapis.openapi.models.shared.CustomMetric[]{{
                                add(new CustomMetric() {{
                                    name = "Christopher Cummerata";
                                    value = 46.95;
                                }}),
                                add(new CustomMetric() {{
                                    name = "Sonya Marks";
                                    value = 7351.94;
                                }}),
                                add(new CustomMetric() {{
                                    name = "Lucia Kemmer";
                                    value = 5761.57;
                                }}),
                            }};
                            customerId = "aliquid";
                            deviceType = "provident";
                            dsConversionId = "necessitatibus";
                            engineAccountId = "sint";
                            floodlightOrderId = "officia";
                            inventoryAccountId = "dolor";
                            productCountry = "debitis";
                            productGroupId = "a";
                            productId = "dolorum";
                            productLanguage = "in";
                            quantityMillis = "in";
                            revenueMicros = "illum";
                            segmentationId = "maiores";
                            segmentationName = "rerum";
                            segmentationType = "dicta";
                            state = "magnam";
                            storeId = "cumque";
                            type = "facere";
                        }}),
                        add(new Conversion() {{
                            adGroupId = "ea";
                            adId = "aliquid";
                            advertiserId = "laborum";
                            agencyId = "accusamus";
                            attributionModel = "non";
                            campaignId = "occaecati";
                            channel = "enim";
                            clickId = "accusamus";
                            conversionId = "delectus";
                            conversionModifiedTimestamp = "quidem";
                            conversionTimestamp = "provident";
                            countMillis = "nam";
                            criterionId = "id";
                            currencyCode = "blanditiis";
                            customDimension = new org.openapis.openapi.models.shared.CustomDimension[]{{
                                add(new CustomDimension() {{
                                    name = "Vincent Nolan";
                                    value = "natus";
                                }}),
                                add(new CustomDimension() {{
                                    name = "Fernando Aufderhar";
                                    value = "distinctio";
                                }}),
                                add(new CustomDimension() {{
                                    name = "Leroy Greenfelder";
                                    value = "nobis";
                                }}),
                            }};
                            customMetric = new org.openapis.openapi.models.shared.CustomMetric[]{{
                                add(new CustomMetric() {{
                                    name = "Brandon Brakus V";
                                    value = 3540.47;
                                }}),
                                add(new CustomMetric() {{
                                    name = "Miss Julian Marvin";
                                    value = 6521.03;
                                }}),
                            }};
                            customerId = "ad";
                            deviceType = "eum";
                            dsConversionId = "dolor";
                            engineAccountId = "necessitatibus";
                            floodlightOrderId = "odit";
                            inventoryAccountId = "nemo";
                            productCountry = "quasi";
                            productGroupId = "iure";
                            productId = "doloribus";
                            productLanguage = "debitis";
                            quantityMillis = "eius";
                            revenueMicros = "maxime";
                            segmentationId = "deleniti";
                            segmentationName = "facilis";
                            segmentationType = "in";
                            state = "architecto";
                            storeId = "architecto";
                            type = "repudiandae";
                        }}),
                    }};
                    kind = "ullam";
                }};;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "repellat";
                fields = "quibusdam";
                key = "sed";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "accusantium";
                uploadProtocol = "consequuntur";
            }};            

            DoubleclicksearchConversionUpdateResponse res = sdk.conversion.doubleclicksearchConversionUpdate(req, new DoubleclicksearchConversionUpdateSecurity("praesentium", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.conversionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## doubleclicksearchConversionUpdateAvailability

Updates the availabilities of a batch of floodlight activities in DoubleClick Search.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionUpdateAvailabilityRequest;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionUpdateAvailabilityResponse;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionUpdateAvailabilitySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Availability;
import org.openapis.openapi.models.shared.UpdateAvailabilityRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclicksearchConversionUpdateAvailabilityRequest req = new DoubleclicksearchConversionUpdateAvailabilityRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                updateAvailabilityRequest = new UpdateAvailabilityRequest() {{
                    availabilities = new org.openapis.openapi.models.shared.Availability[]{{
                        add(new Availability() {{
                            advertiserId = "quo";
                            agencyId = "illum";
                            availabilityTimestamp = "pariatur";
                            customerId = "maxime";
                            segmentationId = "ea";
                            segmentationName = "excepturi";
                            segmentationType = "odit";
                        }}),
                    }};
                }};;
                accessToken = "ea";
                alt = AltEnum.JSON;
                callback = "ab";
                fields = "maiores";
                key = "quidem";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "autem";
                uploadProtocol = "nam";
            }};            

            DoubleclicksearchConversionUpdateAvailabilityResponse res = sdk.conversion.doubleclicksearchConversionUpdateAvailability(req, new DoubleclicksearchConversionUpdateAvailabilitySecurity("eaque", "pariatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateAvailabilityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
