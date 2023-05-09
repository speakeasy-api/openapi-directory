# localinventory

### Available Operations

* [contentLocalinventoryCustombatch](#contentlocalinventorycustombatch) - Updates local inventory for multiple products or stores in a single request.
* [contentLocalinventoryInsert](#contentlocalinventoryinsert) - Updates the local inventory of a product in your Merchant Center account.

## contentLocalinventoryCustombatch

Updates local inventory for multiple products or stores in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentLocalinventoryCustombatchRequest;
import org.openapis.openapi.models.operations.ContentLocalinventoryCustombatchResponse;
import org.openapis.openapi.models.operations.ContentLocalinventoryCustombatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.LocalInventory;
import org.openapis.openapi.models.shared.LocalinventoryCustomBatchRequest;
import org.openapis.openapi.models.shared.LocalinventoryCustomBatchRequestEntry;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentLocalinventoryCustombatchRequest req = new ContentLocalinventoryCustombatchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                localinventoryCustomBatchRequest = new LocalinventoryCustomBatchRequest() {{
                    entries = new org.openapis.openapi.models.shared.LocalinventoryCustomBatchRequestEntry[]{{
                        add(new LocalinventoryCustomBatchRequestEntry() {{
                            batchId = 711991L;
                            localInventory = new LocalInventory() {{
                                availability = "quas";
                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Julio Hessel";
                                        value = "repellendus";
                                    }}),
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Gertrude Russel Jr.";
                                        value = "ad";
                                    }}),
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Desiree Lakin";
                                        value = "amet";
                                    }}),
                                }};
                                instoreProductLocation = "quasi";
                                kind = "dicta";
                                pickupMethod = "laudantium";
                                pickupSla = "doloremque";
                                price = new Price() {{
                                    currency = "earum";
                                    value = "iusto";
                                }};
                                quantity = 228646L;
                                salePrice = new Price() {{
                                    currency = "provident";
                                    value = "dolorum";
                                }};
                                salePriceEffectiveDate = "necessitatibus";
                                storeCode = "provident";
                            }};
                            merchantId = "repudiandae";
                            method = "consequatur";
                            productId = "nemo";
                        }}),
                        add(new LocalinventoryCustomBatchRequestEntry() {{
                            batchId = 475826L;
                            localInventory = new LocalInventory() {{
                                availability = "itaque";
                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Bobbie Thompson";
                                        value = "dicta";
                                    }}),
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Cindy Casper";
                                        value = "occaecati";
                                    }}),
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Lynette Green";
                                        value = "voluptatem";
                                    }}),
                                }};
                                instoreProductLocation = "perferendis";
                                kind = "rerum";
                                pickupMethod = "ea";
                                pickupSla = "aperiam";
                                price = new Price() {{
                                    currency = "dignissimos";
                                    value = "repellat";
                                }};
                                quantity = 243678L;
                                salePrice = new Price() {{
                                    currency = "porro";
                                    value = "provident";
                                }};
                                salePriceEffectiveDate = "consectetur";
                                storeCode = "eligendi";
                            }};
                            merchantId = "dignissimos";
                            method = "consectetur";
                            productId = "soluta";
                        }}),
                        add(new LocalinventoryCustomBatchRequestEntry() {{
                            batchId = 620500L;
                            localInventory = new LocalInventory() {{
                                availability = "temporibus";
                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Bruce Satterfield";
                                        value = "laborum";
                                    }}),
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Clarence Feeney Sr.";
                                        value = "exercitationem";
                                    }}),
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Virginia Bins";
                                        value = "delectus";
                                    }}),
                                }};
                                instoreProductLocation = "non";
                                kind = "distinctio";
                                pickupMethod = "in";
                                pickupSla = "exercitationem";
                                price = new Price() {{
                                    currency = "labore";
                                    value = "numquam";
                                }};
                                quantity = 921193L;
                                salePrice = new Price() {{
                                    currency = "modi";
                                    value = "in";
                                }};
                                salePriceEffectiveDate = "explicabo";
                                storeCode = "accusamus";
                            }};
                            merchantId = "rem";
                            method = "aperiam";
                            productId = "odit";
                        }}),
                    }};
                }};;
                accessToken = "deleniti";
                alt = AltEnum.JSON;
                callback = "voluptate";
                fields = "similique";
                key = "minima";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "sit";
                uploadProtocol = "modi";
            }};            

            ContentLocalinventoryCustombatchResponse res = sdk.localinventory.contentLocalinventoryCustombatch(req, new ContentLocalinventoryCustombatchSecurity("eum", "nesciunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.localinventoryCustomBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentLocalinventoryInsert

Updates the local inventory of a product in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentLocalinventoryInsertRequest;
import org.openapis.openapi.models.operations.ContentLocalinventoryInsertResponse;
import org.openapis.openapi.models.operations.ContentLocalinventoryInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.LocalInventory;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentLocalinventoryInsertRequest req = new ContentLocalinventoryInsertRequest("mollitia", "dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                localInventory = new LocalInventory() {{
                    availability = "nostrum";
                    customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                        add(new CustomAttribute() {{
                            groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                add(new CustomAttribute() {{}}),
                                add(new CustomAttribute() {{}}),
                            }};
                            name = "Mr. Stephen Gleason";
                            value = "odio";
                        }}),
                        add(new CustomAttribute() {{
                            groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                add(new CustomAttribute() {{}}),
                                add(new CustomAttribute() {{}}),
                            }};
                            name = "Sonya Senger";
                            value = "nesciunt";
                        }}),
                    }};
                    instoreProductLocation = "quaerat";
                    kind = "itaque";
                    pickupMethod = "minus";
                    pickupSla = "sunt";
                    price = new Price() {{
                        currency = "distinctio";
                        value = "iusto";
                    }};;
                    quantity = 558051L;
                    salePrice = new Price() {{
                        currency = "et";
                        value = "facilis";
                    }};;
                    salePriceEffectiveDate = "amet";
                    storeCode = "autem";
                }};;
                accessToken = "fuga";
                alt = AltEnum.JSON;
                callback = "rem";
                fields = "aut";
                key = "quos";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "veritatis";
                uploadProtocol = "quae";
            }};            

            ContentLocalinventoryInsertResponse res = sdk.localinventory.contentLocalinventoryInsert(req, new ContentLocalinventoryInsertSecurity("eaque", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.localInventory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
