# productdeliverytime

### Available Operations

* [contentProductdeliverytimeCreate](#contentproductdeliverytimecreate) - Creates or updates the delivery time of a product.
* [contentProductdeliverytimeDelete](#contentproductdeliverytimedelete) - Deletes the delivery time of a product.
* [contentProductdeliverytimeGet](#contentproductdeliverytimeget) - Gets `productDeliveryTime` by `productId`.

## contentProductdeliverytimeCreate

Creates or updates the delivery time of a product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentProductdeliverytimeCreateRequest;
import org.openapis.openapi.models.operations.ContentProductdeliverytimeCreateResponse;
import org.openapis.openapi.models.operations.ContentProductdeliverytimeCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeliveryArea;
import org.openapis.openapi.models.shared.DeliveryAreaPostalCodeRange;
import org.openapis.openapi.models.shared.ProductDeliveryTime;
import org.openapis.openapi.models.shared.ProductDeliveryTimeAreaDeliveryTime;
import org.openapis.openapi.models.shared.ProductDeliveryTimeAreaDeliveryTimeDeliveryTime;
import org.openapis.openapi.models.shared.ProductId;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentProductdeliverytimeCreateRequest req = new ContentProductdeliverytimeCreateRequest("pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                productDeliveryTime = new ProductDeliveryTime() {{
                    areaDeliveryTimes = new org.openapis.openapi.models.shared.ProductDeliveryTimeAreaDeliveryTime[]{{
                        add(new ProductDeliveryTimeAreaDeliveryTime() {{
                            deliveryArea = new DeliveryArea() {{
                                countryCode = "GU";
                                postalCodeRange = new DeliveryAreaPostalCodeRange() {{
                                    firstPostalCode = "natus";
                                    lastPostalCode = "nisi";
                                }};
                                regionCode = "provident";
                            }};
                            deliveryTime = new ProductDeliveryTimeAreaDeliveryTimeDeliveryTime() {{
                                maxHandlingTimeDays = 230594;
                                maxTransitTimeDays = 221319;
                                minHandlingTimeDays = 344010;
                                minTransitTimeDays = 184738;
                            }};
                        }}),
                        add(new ProductDeliveryTimeAreaDeliveryTime() {{
                            deliveryArea = new DeliveryArea() {{
                                countryCode = "VC";
                                postalCodeRange = new DeliveryAreaPostalCodeRange() {{
                                    firstPostalCode = "molestiae";
                                    lastPostalCode = "dolore";
                                }};
                                regionCode = "ullam";
                            }};
                            deliveryTime = new ProductDeliveryTimeAreaDeliveryTimeDeliveryTime() {{
                                maxHandlingTimeDays = 245990;
                                maxTransitTimeDays = 240836;
                                minHandlingTimeDays = 583138;
                                minTransitTimeDays = 581269;
                            }};
                        }}),
                        add(new ProductDeliveryTimeAreaDeliveryTime() {{
                            deliveryArea = new DeliveryArea() {{
                                countryCode = "EG";
                                postalCodeRange = new DeliveryAreaPostalCodeRange() {{
                                    firstPostalCode = "fugiat";
                                    lastPostalCode = "molestiae";
                                }};
                                regionCode = "quas";
                            }};
                            deliveryTime = new ProductDeliveryTimeAreaDeliveryTimeDeliveryTime() {{
                                maxHandlingTimeDays = 834177;
                                maxTransitTimeDays = 906524;
                                minHandlingTimeDays = 230400;
                                minTransitTimeDays = 716795;
                            }};
                        }}),
                    }};
                    productId = new ProductId() {{
                        productId = "vel";
                    }};;
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.MEDIA;
                callback = "nesciunt";
                fields = "corrupti";
                key = "cupiditate";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "dolorum";
                uploadProtocol = "soluta";
            }};            

            ContentProductdeliverytimeCreateResponse res = sdk.productdeliverytime.contentProductdeliverytimeCreate(req, new ContentProductdeliverytimeCreateSecurity("cum", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productDeliveryTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentProductdeliverytimeDelete

Deletes the delivery time of a product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentProductdeliverytimeDeleteRequest;
import org.openapis.openapi.models.operations.ContentProductdeliverytimeDeleteResponse;
import org.openapis.openapi.models.operations.ContentProductdeliverytimeDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentProductdeliverytimeDeleteRequest req = new ContentProductdeliverytimeDeleteRequest("delectus", "commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugit";
                alt = AltEnum.MEDIA;
                callback = "ullam";
                fields = "doloremque";
                key = "est";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "adipisci";
                uploadProtocol = "totam";
            }};            

            ContentProductdeliverytimeDeleteResponse res = sdk.productdeliverytime.contentProductdeliverytimeDelete(req, new ContentProductdeliverytimeDeleteSecurity("qui", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentProductdeliverytimeGet

Gets `productDeliveryTime` by `productId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentProductdeliverytimeGetRequest;
import org.openapis.openapi.models.operations.ContentProductdeliverytimeGetResponse;
import org.openapis.openapi.models.operations.ContentProductdeliverytimeGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentProductdeliverytimeGetRequest req = new ContentProductdeliverytimeGetRequest("eligendi", "incidunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "reiciendis";
                fields = "possimus";
                key = "odit";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "minima";
                uploadProtocol = "facilis";
            }};            

            ContentProductdeliverytimeGetResponse res = sdk.productdeliverytime.contentProductdeliverytimeGet(req, new ContentProductdeliverytimeGetSecurity("facilis", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productDeliveryTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
