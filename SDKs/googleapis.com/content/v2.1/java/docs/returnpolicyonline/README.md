# returnpolicyonline

### Available Operations

* [contentReturnpolicyonlineCreate](#contentreturnpolicyonlinecreate) - Creates a new return policy.
* [contentReturnpolicyonlineDelete](#contentreturnpolicyonlinedelete) - Deletes an existing return policy.
* [contentReturnpolicyonlineGet](#contentreturnpolicyonlineget) - Gets an existing return policy.
* [contentReturnpolicyonlineList](#contentreturnpolicyonlinelist) - Lists all existing return policies.
* [contentReturnpolicyonlinePatch](#contentreturnpolicyonlinepatch) - Updates an existing return policy.

## contentReturnpolicyonlineCreate

Creates a new return policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentReturnpolicyonlineCreateRequest;
import org.openapis.openapi.models.operations.ContentReturnpolicyonlineCreateResponse;
import org.openapis.openapi.models.operations.ContentReturnpolicyonlineCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PriceAmount;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineInput;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineItemConditionsEnum;
import org.openapis.openapi.models.shared.ReturnPolicyOnlinePolicy;
import org.openapis.openapi.models.shared.ReturnPolicyOnlinePolicyTypeEnum;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineRestockingFee;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineReturnMethodsEnum;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineReturnReasonCategoryInfo;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineReturnShippingFee;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineReturnShippingFeeTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentReturnpolicyonlineCreateRequest req = new ContentReturnpolicyonlineCreateRequest("ex") {{
                dollarXgafv = XgafvEnum.ONE;
                returnPolicyOnlineInput = new ReturnPolicyOnlineInput() {{
                    countries = new String[]{{
                        add("quisquam"),
                        add("rem"),
                        add("eveniet"),
                    }};
                    itemConditions = new org.openapis.openapi.models.shared.ReturnPolicyOnlineItemConditionsEnum[]{{
                        add(ReturnPolicyOnlineItemConditionsEnum.ITEM_CONDITION_UNSPECIFIED),
                        add(ReturnPolicyOnlineItemConditionsEnum.USED),
                        add(ReturnPolicyOnlineItemConditionsEnum.ITEM_CONDITION_UNSPECIFIED),
                        add(ReturnPolicyOnlineItemConditionsEnum.USED),
                    }};
                    label = "sapiente";
                    name = "Sherri Harris";
                    policy = new ReturnPolicyOnlinePolicy() {{
                        days = "facere";
                        type = ReturnPolicyOnlinePolicyTypeEnum.NUMBER_OF_DAYS_AFTER_DELIVERY;
                    }};;
                    restockingFee = new ReturnPolicyOnlineRestockingFee() {{
                        fixedFee = new PriceAmount() {{
                            currency = "doloremque";
                            value = "vero";
                        }};;
                        microPercent = 13836;
                    }};;
                    returnMethods = new org.openapis.openapi.models.shared.ReturnPolicyOnlineReturnMethodsEnum[]{{
                        add(ReturnPolicyOnlineReturnMethodsEnum.AT_A_KIOSK),
                    }};
                    returnPolicyUri = "neque";
                    returnReasonCategoryInfo = new org.openapis.openapi.models.shared.ReturnPolicyOnlineReturnReasonCategoryInfo[]{{
                        add(new ReturnPolicyOnlineReturnReasonCategoryInfo() {{
                            returnLabelSource = ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum.CUSTOMER_RESPONSIBILITY;
                            returnReasonCategory = ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum.ITEM_DEFECT;
                            returnShippingFee = new ReturnPolicyOnlineReturnShippingFee() {{
                                fixedFee = new PriceAmount() {{
                                    currency = "est";
                                    value = "quia";
                                }};
                                type = ReturnPolicyOnlineReturnShippingFeeTypeEnum.FIXED;
                            }};
                        }}),
                        add(new ReturnPolicyOnlineReturnReasonCategoryInfo() {{
                            returnLabelSource = ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum.DOWNLOAD_AND_PRINT;
                            returnReasonCategory = ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum.ITEM_DEFECT;
                            returnShippingFee = new ReturnPolicyOnlineReturnShippingFee() {{
                                fixedFee = new PriceAmount() {{
                                    currency = "earum";
                                    value = "ipsum";
                                }};
                                type = ReturnPolicyOnlineReturnShippingFeeTypeEnum.CUSTOMER_PAYING_ACTUAL_FEE;
                            }};
                        }}),
                        add(new ReturnPolicyOnlineReturnReasonCategoryInfo() {{
                            returnLabelSource = ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum.IN_THE_BOX;
                            returnReasonCategory = ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum.RETURN_REASON_CATEGORY_UNSPECIFIED;
                            returnShippingFee = new ReturnPolicyOnlineReturnShippingFee() {{
                                fixedFee = new PriceAmount() {{
                                    currency = "harum";
                                    value = "nobis";
                                }};
                                type = ReturnPolicyOnlineReturnShippingFeeTypeEnum.TYPE_UNSPECIFIED;
                            }};
                        }}),
                        add(new ReturnPolicyOnlineReturnReasonCategoryInfo() {{
                            returnLabelSource = ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum.RETURN_LABEL_SOURCE_UNSPECIFIED;
                            returnReasonCategory = ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum.ITEM_DEFECT;
                            returnShippingFee = new ReturnPolicyOnlineReturnShippingFee() {{
                                fixedFee = new PriceAmount() {{
                                    currency = "doloribus";
                                    value = "quos";
                                }};
                                type = ReturnPolicyOnlineReturnShippingFeeTypeEnum.FIXED;
                            }};
                        }}),
                    }};
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "nemo";
                key = "ratione";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "enim";
                uploadProtocol = "impedit";
            }};            

            ContentReturnpolicyonlineCreateResponse res = sdk.returnpolicyonline.contentReturnpolicyonlineCreate(req, new ContentReturnpolicyonlineCreateSecurity("libero", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.returnPolicyOnline != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentReturnpolicyonlineDelete

Deletes an existing return policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentReturnpolicyonlineDeleteRequest;
import org.openapis.openapi.models.operations.ContentReturnpolicyonlineDeleteResponse;
import org.openapis.openapi.models.operations.ContentReturnpolicyonlineDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentReturnpolicyonlineDeleteRequest req = new ContentReturnpolicyonlineDeleteRequest("nesciunt", "vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "numquam";
                alt = AltEnum.MEDIA;
                callback = "quia";
                fields = "reiciendis";
                key = "modi";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "qui";
                uploadProtocol = "iusto";
            }};            

            ContentReturnpolicyonlineDeleteResponse res = sdk.returnpolicyonline.contentReturnpolicyonlineDelete(req, new ContentReturnpolicyonlineDeleteSecurity("a", "quidem") {{
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

## contentReturnpolicyonlineGet

Gets an existing return policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentReturnpolicyonlineGetRequest;
import org.openapis.openapi.models.operations.ContentReturnpolicyonlineGetResponse;
import org.openapis.openapi.models.operations.ContentReturnpolicyonlineGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentReturnpolicyonlineGetRequest req = new ContentReturnpolicyonlineGetRequest("aperiam", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "beatae";
                fields = "delectus";
                key = "deleniti";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "reprehenderit";
                uploadProtocol = "sint";
            }};            

            ContentReturnpolicyonlineGetResponse res = sdk.returnpolicyonline.contentReturnpolicyonlineGet(req, new ContentReturnpolicyonlineGetSecurity("dignissimos", "voluptatum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.returnPolicyOnline != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentReturnpolicyonlineList

Lists all existing return policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentReturnpolicyonlineListRequest;
import org.openapis.openapi.models.operations.ContentReturnpolicyonlineListResponse;
import org.openapis.openapi.models.operations.ContentReturnpolicyonlineListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentReturnpolicyonlineListRequest req = new ContentReturnpolicyonlineListRequest("nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "similique";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "officia";
                key = "odio";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "repudiandae";
                uploadProtocol = "tempore";
            }};            

            ContentReturnpolicyonlineListResponse res = sdk.returnpolicyonline.contentReturnpolicyonlineList(req, new ContentReturnpolicyonlineListSecurity("voluptate", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listReturnPolicyOnlineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentReturnpolicyonlinePatch

Updates an existing return policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentReturnpolicyonlinePatchRequest;
import org.openapis.openapi.models.operations.ContentReturnpolicyonlinePatchResponse;
import org.openapis.openapi.models.operations.ContentReturnpolicyonlinePatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PriceAmount;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineInput;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineItemConditionsEnum;
import org.openapis.openapi.models.shared.ReturnPolicyOnlinePolicy;
import org.openapis.openapi.models.shared.ReturnPolicyOnlinePolicyTypeEnum;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineRestockingFee;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineReturnMethodsEnum;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineReturnReasonCategoryInfo;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineReturnShippingFee;
import org.openapis.openapi.models.shared.ReturnPolicyOnlineReturnShippingFeeTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentReturnpolicyonlinePatchRequest req = new ContentReturnpolicyonlinePatchRequest("esse", "alias") {{
                dollarXgafv = XgafvEnum.ONE;
                returnPolicyOnlineInput = new ReturnPolicyOnlineInput() {{
                    countries = new String[]{{
                        add("est"),
                    }};
                    itemConditions = new org.openapis.openapi.models.shared.ReturnPolicyOnlineItemConditionsEnum[]{{
                        add(ReturnPolicyOnlineItemConditionsEnum.ITEM_CONDITION_UNSPECIFIED),
                        add(ReturnPolicyOnlineItemConditionsEnum.ITEM_CONDITION_UNSPECIFIED),
                    }};
                    label = "quaerat";
                    name = "Luz Hudson";
                    policy = new ReturnPolicyOnlinePolicy() {{
                        days = "unde";
                        type = ReturnPolicyOnlinePolicyTypeEnum.NO_RETURNS;
                    }};;
                    restockingFee = new ReturnPolicyOnlineRestockingFee() {{
                        fixedFee = new PriceAmount() {{
                            currency = "voluptatibus";
                            value = "facilis";
                        }};;
                        microPercent = 43118;
                    }};;
                    returnMethods = new org.openapis.openapi.models.shared.ReturnPolicyOnlineReturnMethodsEnum[]{{
                        add(ReturnPolicyOnlineReturnMethodsEnum.BY_MAIL),
                        add(ReturnPolicyOnlineReturnMethodsEnum.BY_MAIL),
                        add(ReturnPolicyOnlineReturnMethodsEnum.AT_A_KIOSK),
                        add(ReturnPolicyOnlineReturnMethodsEnum.RETURN_METHOD_UNSPECIFIED),
                    }};
                    returnPolicyUri = "provident";
                    returnReasonCategoryInfo = new org.openapis.openapi.models.shared.ReturnPolicyOnlineReturnReasonCategoryInfo[]{{
                        add(new ReturnPolicyOnlineReturnReasonCategoryInfo() {{
                            returnLabelSource = ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum.CUSTOMER_RESPONSIBILITY;
                            returnReasonCategory = ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum.ITEM_DEFECT;
                            returnShippingFee = new ReturnPolicyOnlineReturnShippingFee() {{
                                fixedFee = new PriceAmount() {{
                                    currency = "tenetur";
                                    value = "saepe";
                                }};
                                type = ReturnPolicyOnlineReturnShippingFeeTypeEnum.CUSTOMER_PAYING_ACTUAL_FEE;
                            }};
                        }}),
                        add(new ReturnPolicyOnlineReturnReasonCategoryInfo() {{
                            returnLabelSource = ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum.DOWNLOAD_AND_PRINT;
                            returnReasonCategory = ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum.BUYER_REMORSE;
                            returnShippingFee = new ReturnPolicyOnlineReturnShippingFee() {{
                                fixedFee = new PriceAmount() {{
                                    currency = "dolore";
                                    value = "sit";
                                }};
                                type = ReturnPolicyOnlineReturnShippingFeeTypeEnum.CUSTOMER_PAYING_ACTUAL_FEE;
                            }};
                        }}),
                    }};
                }};;
                accessToken = "a";
                alt = AltEnum.MEDIA;
                callback = "neque";
                fields = "mollitia";
                key = "velit";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "quasi";
                uploadProtocol = "rerum";
            }};            

            ContentReturnpolicyonlinePatchResponse res = sdk.returnpolicyonline.contentReturnpolicyonlinePatch(req, new ContentReturnpolicyonlinePatchSecurity("blanditiis", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.returnPolicyOnline != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
