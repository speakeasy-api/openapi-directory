# returnpolicy

### Available Operations

* [contentReturnpolicyCustombatch](#contentreturnpolicycustombatch) - Batches multiple return policy related calls in a single request.
* [contentReturnpolicyDelete](#contentreturnpolicydelete) - Deletes a return policy for the given Merchant Center account.
* [contentReturnpolicyGet](#contentreturnpolicyget) - Gets a return policy of the Merchant Center account.
* [contentReturnpolicyInsert](#contentreturnpolicyinsert) - Inserts a return policy for the Merchant Center account.
* [contentReturnpolicyList](#contentreturnpolicylist) - Lists the return policies of the Merchant Center account.

## contentReturnpolicyCustombatch

Batches multiple return policy related calls in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentReturnpolicyCustombatchRequest;
import org.openapis.openapi.models.operations.ContentReturnpolicyCustombatchResponse;
import org.openapis.openapi.models.operations.ContentReturnpolicyCustombatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.ReturnPolicy;
import org.openapis.openapi.models.shared.ReturnPolicyPolicy;
import org.openapis.openapi.models.shared.ReturnPolicySeasonalOverride;
import org.openapis.openapi.models.shared.ReturnpolicyCustomBatchRequest;
import org.openapis.openapi.models.shared.ReturnpolicyCustomBatchRequestEntry;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentReturnpolicyCustombatchRequest req = new ContentReturnpolicyCustombatchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                returnpolicyCustomBatchRequest = new ReturnpolicyCustomBatchRequest() {{
                    entries = new org.openapis.openapi.models.shared.ReturnpolicyCustomBatchRequestEntry[]{{
                        add(new ReturnpolicyCustomBatchRequestEntry() {{
                            batchId = 339503L;
                            merchantId = "nobis";
                            method = "beatae";
                            returnPolicy = new ReturnPolicy() {{
                                country = "South Georgia and the South Sandwich Islands";
                                kind = "ex";
                                label = "consequuntur";
                                name = "Loren Schuster";
                                nonFreeReturnReasons = new String[]{{
                                    add("architecto"),
                                    add("reiciendis"),
                                    add("consequatur"),
                                    add("sunt"),
                                }};
                                policy = new ReturnPolicyPolicy() {{
                                    lastReturnDate = "odit";
                                    numberOfDays = "inventore";
                                    type = "laboriosam";
                                }};
                                returnPolicyId = "quod";
                                returnShippingFee = new Price() {{
                                    currency = "repudiandae";
                                    value = "consequuntur";
                                }};
                                seasonalOverrides = new org.openapis.openapi.models.shared.ReturnPolicySeasonalOverride[]{{
                                    add(new ReturnPolicySeasonalOverride() {{
                                        endDate = "sequi";
                                        name = "Sheldon Leuschke";
                                        policy = new ReturnPolicyPolicy() {{
                                            lastReturnDate = "enim";
                                            numberOfDays = "minus";
                                            type = "quibusdam";
                                        }};
                                        startDate = "accusantium";
                                    }}),
                                }};
                            }};
                            returnPolicyId = "nulla";
                        }}),
                        add(new ReturnpolicyCustomBatchRequestEntry() {{
                            batchId = 78734L;
                            merchantId = "omnis";
                            method = "quibusdam";
                            returnPolicy = new ReturnPolicy() {{
                                country = "Mayotte";
                                kind = "nostrum";
                                label = "sint";
                                name = "Oscar Feil";
                                nonFreeReturnReasons = new String[]{{
                                    add("sint"),
                                }};
                                policy = new ReturnPolicyPolicy() {{
                                    lastReturnDate = "eos";
                                    numberOfDays = "nisi";
                                    type = "commodi";
                                }};
                                returnPolicyId = "impedit";
                                returnShippingFee = new Price() {{
                                    currency = "facilis";
                                    value = "temporibus";
                                }};
                                seasonalOverrides = new org.openapis.openapi.models.shared.ReturnPolicySeasonalOverride[]{{
                                    add(new ReturnPolicySeasonalOverride() {{
                                        endDate = "quaerat";
                                        name = "Clinton Oberbrunner";
                                        policy = new ReturnPolicyPolicy() {{
                                            lastReturnDate = "rerum";
                                            numberOfDays = "consequuntur";
                                            type = "magnam";
                                        }};
                                        startDate = "et";
                                    }}),
                                    add(new ReturnPolicySeasonalOverride() {{
                                        endDate = "et";
                                        name = "Alma Metz";
                                        policy = new ReturnPolicyPolicy() {{
                                            lastReturnDate = "et";
                                            numberOfDays = "debitis";
                                            type = "nisi";
                                        }};
                                        startDate = "aliquid";
                                    }}),
                                    add(new ReturnPolicySeasonalOverride() {{
                                        endDate = "excepturi";
                                        name = "Jerald Schowalter";
                                        policy = new ReturnPolicyPolicy() {{
                                            lastReturnDate = "veniam";
                                            numberOfDays = "perspiciatis";
                                            type = "commodi";
                                        }};
                                        startDate = "dolores";
                                    }}),
                                }};
                            }};
                            returnPolicyId = "dicta";
                        }}),
                    }};
                }};;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "molestias";
                key = "quam";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "voluptate";
                uploadProtocol = "eum";
            }};            

            ContentReturnpolicyCustombatchResponse res = sdk.returnpolicy.contentReturnpolicyCustombatch(req, new ContentReturnpolicyCustombatchSecurity("consectetur", "velit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.returnpolicyCustomBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentReturnpolicyDelete

Deletes a return policy for the given Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentReturnpolicyDeleteRequest;
import org.openapis.openapi.models.operations.ContentReturnpolicyDeleteResponse;
import org.openapis.openapi.models.operations.ContentReturnpolicyDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentReturnpolicyDeleteRequest req = new ContentReturnpolicyDeleteRequest("tempora", "aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "adipisci";
                fields = "atque";
                key = "tempore";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "minima";
                uploadProtocol = "cupiditate";
            }};            

            ContentReturnpolicyDeleteResponse res = sdk.returnpolicy.contentReturnpolicyDelete(req, new ContentReturnpolicyDeleteSecurity("molestiae", "et") {{
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

## contentReturnpolicyGet

Gets a return policy of the Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentReturnpolicyGetRequest;
import org.openapis.openapi.models.operations.ContentReturnpolicyGetResponse;
import org.openapis.openapi.models.operations.ContentReturnpolicyGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentReturnpolicyGetRequest req = new ContentReturnpolicyGetRequest("accusamus", "excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "inventore";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "corporis";
                key = "ullam";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "totam";
                uploadProtocol = "perspiciatis";
            }};            

            ContentReturnpolicyGetResponse res = sdk.returnpolicy.contentReturnpolicyGet(req, new ContentReturnpolicyGetSecurity("optio", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.returnPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentReturnpolicyInsert

Inserts a return policy for the Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentReturnpolicyInsertRequest;
import org.openapis.openapi.models.operations.ContentReturnpolicyInsertResponse;
import org.openapis.openapi.models.operations.ContentReturnpolicyInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.ReturnPolicy;
import org.openapis.openapi.models.shared.ReturnPolicyPolicy;
import org.openapis.openapi.models.shared.ReturnPolicySeasonalOverride;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentReturnpolicyInsertRequest req = new ContentReturnpolicyInsertRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                returnPolicy = new ReturnPolicy() {{
                    country = "Northern Mariana Islands";
                    kind = "cumque";
                    label = "in";
                    name = "Ellis Nader";
                    nonFreeReturnReasons = new String[]{{
                        add("unde"),
                        add("labore"),
                    }};
                    policy = new ReturnPolicyPolicy() {{
                        lastReturnDate = "pariatur";
                        numberOfDays = "vel";
                        type = "laboriosam";
                    }};;
                    returnPolicyId = "soluta";
                    returnShippingFee = new Price() {{
                        currency = "minus";
                        value = "magni";
                    }};;
                    seasonalOverrides = new org.openapis.openapi.models.shared.ReturnPolicySeasonalOverride[]{{
                        add(new ReturnPolicySeasonalOverride() {{
                            endDate = "officiis";
                            name = "Tracey Ankunding";
                            policy = new ReturnPolicyPolicy() {{
                                lastReturnDate = "explicabo";
                                numberOfDays = "rerum";
                                type = "iste";
                            }};
                            startDate = "occaecati";
                        }}),
                        add(new ReturnPolicySeasonalOverride() {{
                            endDate = "enim";
                            name = "Kelli Kerluke";
                            policy = new ReturnPolicyPolicy() {{
                                lastReturnDate = "qui";
                                numberOfDays = "explicabo";
                                type = "accusantium";
                            }};
                            startDate = "eum";
                        }}),
                        add(new ReturnPolicySeasonalOverride() {{
                            endDate = "nesciunt";
                            name = "Felicia Littel";
                            policy = new ReturnPolicyPolicy() {{
                                lastReturnDate = "ipsam";
                                numberOfDays = "nemo";
                                type = "sequi";
                            }};
                            startDate = "optio";
                        }}),
                    }};
                }};;
                accessToken = "libero";
                alt = AltEnum.JSON;
                callback = "alias";
                fields = "accusantium";
                key = "doloremque";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "necessitatibus";
                uploadProtocol = "reiciendis";
            }};            

            ContentReturnpolicyInsertResponse res = sdk.returnpolicy.contentReturnpolicyInsert(req, new ContentReturnpolicyInsertSecurity("incidunt", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.returnPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentReturnpolicyList

Lists the return policies of the Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentReturnpolicyListRequest;
import org.openapis.openapi.models.operations.ContentReturnpolicyListResponse;
import org.openapis.openapi.models.operations.ContentReturnpolicyListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentReturnpolicyListRequest req = new ContentReturnpolicyListRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "recusandae";
                alt = AltEnum.PROTO;
                callback = "magni";
                fields = "sit";
                key = "voluptas";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "molestiae";
                uploadProtocol = "eius";
            }};            

            ContentReturnpolicyListResponse res = sdk.returnpolicy.contentReturnpolicyList(req, new ContentReturnpolicyListSecurity("perspiciatis", "amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.returnpolicyListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
