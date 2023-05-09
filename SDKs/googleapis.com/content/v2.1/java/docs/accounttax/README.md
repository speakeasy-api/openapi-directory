# accounttax

### Available Operations

* [contentAccounttaxCustombatch](#contentaccounttaxcustombatch) - Retrieves and updates tax settings of multiple accounts in a single request.
* [contentAccounttaxGet](#contentaccounttaxget) - Retrieves the tax settings of the account.
* [contentAccounttaxList](#contentaccounttaxlist) - Lists the tax settings of the sub-accounts in your Merchant Center account.
* [contentAccounttaxUpdate](#contentaccounttaxupdate) - Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

## contentAccounttaxCustombatch

Retrieves and updates tax settings of multiple accounts in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccounttaxCustombatchRequest;
import org.openapis.openapi.models.operations.ContentAccounttaxCustombatchResponse;
import org.openapis.openapi.models.operations.ContentAccounttaxCustombatchSecurity;
import org.openapis.openapi.models.shared.AccountTax;
import org.openapis.openapi.models.shared.AccountTaxTaxRule;
import org.openapis.openapi.models.shared.AccounttaxCustomBatchRequest;
import org.openapis.openapi.models.shared.AccounttaxCustomBatchRequestEntry;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccounttaxCustombatchRequest req = new ContentAccounttaxCustombatchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accounttaxCustomBatchRequest = new AccounttaxCustomBatchRequest() {{
                    entries = new org.openapis.openapi.models.shared.AccounttaxCustomBatchRequestEntry[]{{
                        add(new AccounttaxCustomBatchRequestEntry() {{
                            accountId = "asperiores";
                            accountTax = new AccountTax() {{
                                accountId = "aperiam";
                                kind = "ea";
                                rules = new org.openapis.openapi.models.shared.AccountTaxTaxRule[]{{
                                    add(new AccountTaxTaxRule() {{
                                        country = "Cayman Islands";
                                        locationId = "repellendus";
                                        ratePercent = "officia";
                                        shippingTaxed = false;
                                        useGlobalRate = false;
                                    }}),
                                    add(new AccountTaxTaxRule() {{
                                        country = "Singapore";
                                        locationId = "dignissimos";
                                        ratePercent = "officia";
                                        shippingTaxed = false;
                                        useGlobalRate = false;
                                    }}),
                                }};
                            }};
                            batchId = 989410L;
                            merchantId = "nemo";
                            method = "quae";
                        }}),
                        add(new AccounttaxCustomBatchRequestEntry() {{
                            accountId = "quaerat";
                            accountTax = new AccountTax() {{
                                accountId = "porro";
                                kind = "quod";
                                rules = new org.openapis.openapi.models.shared.AccountTaxTaxRule[]{{
                                    add(new AccountTaxTaxRule() {{
                                        country = "Bangladesh";
                                        locationId = "adipisci";
                                        ratePercent = "fuga";
                                        shippingTaxed = false;
                                        useGlobalRate = false;
                                    }}),
                                    add(new AccountTaxTaxRule() {{
                                        country = "Northern Mariana Islands";
                                        locationId = "suscipit";
                                        ratePercent = "velit";
                                        shippingTaxed = false;
                                        useGlobalRate = false;
                                    }}),
                                }};
                            }};
                            batchId = 633931L;
                            merchantId = "est";
                            method = "recusandae";
                        }}),
                    }};
                }};;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "ducimus";
                key = "quos";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "possimus";
                uploadProtocol = "facilis";
            }};            

            ContentAccounttaxCustombatchResponse res = sdk.accounttax.contentAccounttaxCustombatch(req, new ContentAccounttaxCustombatchSecurity("cum", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accounttaxCustomBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccounttaxGet

Retrieves the tax settings of the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccounttaxGetRequest;
import org.openapis.openapi.models.operations.ContentAccounttaxGetResponse;
import org.openapis.openapi.models.operations.ContentAccounttaxGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccounttaxGetRequest req = new ContentAccounttaxGetRequest("in", "corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "aliquid";
                key = "aperiam";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "in";
                uploadProtocol = "exercitationem";
            }};            

            ContentAccounttaxGetResponse res = sdk.accounttax.contentAccounttaxGet(req, new ContentAccounttaxGetSecurity("earum", "facere") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountTax != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccounttaxList

Lists the tax settings of the sub-accounts in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccounttaxListRequest;
import org.openapis.openapi.models.operations.ContentAccounttaxListResponse;
import org.openapis.openapi.models.operations.ContentAccounttaxListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccounttaxListRequest req = new ContentAccounttaxListRequest("numquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "suscipit";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "saepe";
                key = "necessitatibus";
                maxResults = 296556L;
                oauthToken = "sunt";
                pageToken = "asperiores";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "non";
                uploadProtocol = "amet";
            }};            

            ContentAccounttaxListResponse res = sdk.accounttax.contentAccounttaxList(req, new ContentAccounttaxListSecurity("beatae", "dignissimos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accounttaxListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccounttaxUpdate

Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccounttaxUpdateRequest;
import org.openapis.openapi.models.operations.ContentAccounttaxUpdateResponse;
import org.openapis.openapi.models.operations.ContentAccounttaxUpdateSecurity;
import org.openapis.openapi.models.shared.AccountTax;
import org.openapis.openapi.models.shared.AccountTaxTaxRule;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccounttaxUpdateRequest req = new ContentAccounttaxUpdateRequest("a", "debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accountTax = new AccountTax() {{
                    accountId = "corporis";
                    kind = "harum";
                    rules = new org.openapis.openapi.models.shared.AccountTaxTaxRule[]{{
                        add(new AccountTaxTaxRule() {{
                            country = "Azerbaijan";
                            locationId = "voluptates";
                            ratePercent = "libero";
                            shippingTaxed = false;
                            useGlobalRate = false;
                        }}),
                        add(new AccountTaxTaxRule() {{
                            country = "Botswana";
                            locationId = "accusamus";
                            ratePercent = "similique";
                            shippingTaxed = false;
                            useGlobalRate = false;
                        }}),
                    }};
                }};;
                accessToken = "tempora";
                alt = AltEnum.JSON;
                callback = "voluptas";
                fields = "voluptas";
                key = "voluptas";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "dolorum";
                uploadProtocol = "adipisci";
            }};            

            ContentAccounttaxUpdateResponse res = sdk.accounttax.contentAccounttaxUpdate(req, new ContentAccounttaxUpdateSecurity("minus", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountTax != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
