# regionalinventory

### Available Operations

* [contentRegionalinventoryCustombatch](#contentregionalinventorycustombatch) - Updates regional inventory for multiple products or regions in a single request.
* [contentRegionalinventoryInsert](#contentregionalinventoryinsert) - Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.

## contentRegionalinventoryCustombatch

Updates regional inventory for multiple products or regions in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentRegionalinventoryCustombatchRequest;
import org.openapis.openapi.models.operations.ContentRegionalinventoryCustombatchResponse;
import org.openapis.openapi.models.operations.ContentRegionalinventoryCustombatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.RegionalInventory;
import org.openapis.openapi.models.shared.RegionalinventoryCustomBatchRequest;
import org.openapis.openapi.models.shared.RegionalinventoryCustomBatchRequestEntry;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentRegionalinventoryCustombatchRequest req = new ContentRegionalinventoryCustombatchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                regionalinventoryCustomBatchRequest = new RegionalinventoryCustomBatchRequest() {{
                    entries = new org.openapis.openapi.models.shared.RegionalinventoryCustomBatchRequestEntry[]{{
                        add(new RegionalinventoryCustomBatchRequestEntry() {{
                            batchId = 301768L;
                            merchantId = "voluptate";
                            method = "magni";
                            productId = "excepturi";
                            regionalInventory = new RegionalInventory() {{
                                availability = "esse";
                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Susie Bins";
                                        value = "amet";
                                    }}),
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Myron VonRueden";
                                        value = "nihil";
                                    }}),
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Vicki Labadie";
                                        value = "reiciendis";
                                    }}),
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Sandra Brekke";
                                        value = "temporibus";
                                    }}),
                                }};
                                kind = "in";
                                price = new Price() {{
                                    currency = "veritatis";
                                    value = "nobis";
                                }};
                                regionId = "voluptatibus";
                                salePrice = new Price() {{
                                    currency = "tenetur";
                                    value = "facilis";
                                }};
                                salePriceEffectiveDate = "facere";
                            }};
                        }}),
                        add(new RegionalinventoryCustomBatchRequestEntry() {{
                            batchId = 11392L;
                            merchantId = "itaque";
                            method = "rerum";
                            productId = "molestiae";
                            regionalInventory = new RegionalInventory() {{
                                availability = "quaerat";
                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Christina Bernhard";
                                        value = "dolorem";
                                    }}),
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Hazel Predovic";
                                        value = "quisquam";
                                    }}),
                                    add(new CustomAttribute() {{
                                        groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute() {{}}),
                                            add(new CustomAttribute() {{}}),
                                        }};
                                        name = "Marie Harris";
                                        value = "adipisci";
                                    }}),
                                }};
                                kind = "velit";
                                price = new Price() {{
                                    currency = "accusamus";
                                    value = "veniam";
                                }};
                                regionId = "provident";
                                salePrice = new Price() {{
                                    currency = "nostrum";
                                    value = "dolor";
                                }};
                                salePriceEffectiveDate = "quod";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "dicta";
                fields = "illo";
                key = "amet";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "aliquid";
                uploadProtocol = "sequi";
            }};            

            ContentRegionalinventoryCustombatchResponse res = sdk.regionalinventory.contentRegionalinventoryCustombatch(req, new ContentRegionalinventoryCustombatchSecurity("culpa", "fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.regionalinventoryCustomBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentRegionalinventoryInsert

Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentRegionalinventoryInsertRequest;
import org.openapis.openapi.models.operations.ContentRegionalinventoryInsertResponse;
import org.openapis.openapi.models.operations.ContentRegionalinventoryInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.RegionalInventory;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentRegionalinventoryInsertRequest req = new ContentRegionalinventoryInsertRequest("modi", "et") {{
                dollarXgafv = XgafvEnum.TWO;
                regionalInventory = new RegionalInventory() {{
                    availability = "aliquid";
                    customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                        add(new CustomAttribute() {{
                            groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                add(new CustomAttribute() {{}}),
                            }};
                            name = "Dr. Jody Sawayn DVM";
                            value = "porro";
                        }}),
                        add(new CustomAttribute() {{
                            groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                add(new CustomAttribute() {{}}),
                                add(new CustomAttribute() {{}}),
                                add(new CustomAttribute() {{}}),
                            }};
                            name = "Joan Schaefer";
                            value = "ut";
                        }}),
                        add(new CustomAttribute() {{
                            groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                add(new CustomAttribute() {{}}),
                            }};
                            name = "Dominick Raynor";
                            value = "quod";
                        }}),
                        add(new CustomAttribute() {{
                            groupValues = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                add(new CustomAttribute() {{}}),
                                add(new CustomAttribute() {{}}),
                                add(new CustomAttribute() {{}}),
                            }};
                            name = "Brad Mraz";
                            value = "earum";
                        }}),
                    }};
                    kind = "commodi";
                    price = new Price() {{
                        currency = "veniam";
                        value = "debitis";
                    }};;
                    regionId = "doloremque";
                    salePrice = new Price() {{
                        currency = "esse";
                        value = "aliquid";
                    }};;
                    salePriceEffectiveDate = "porro";
                }};;
                accessToken = "quisquam";
                alt = AltEnum.MEDIA;
                callback = "mollitia";
                fields = "quidem";
                key = "delectus";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "suscipit";
                uploadProtocol = "eveniet";
            }};            

            ContentRegionalinventoryInsertResponse res = sdk.regionalinventory.contentRegionalinventoryInsert(req, new ContentRegionalinventoryInsertSecurity("mollitia", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.regionalInventory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
