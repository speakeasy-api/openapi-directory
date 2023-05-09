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
                            accountId = "quae";
                            accountTax = new AccountTax() {{
                                accountId = "laudantium";
                                kind = "odio";
                                rules = new org.openapis.openapi.models.shared.AccountTaxTaxRule[]{{
                                    add(new AccountTaxTaxRule() {{
                                        country = "Virgin Islands, U.S.";
                                        locationId = "quisquam";
                                        ratePercent = "vero";
                                        shippingTaxed = false;
                                        useGlobalRate = false;
                                    }}),
                                    add(new AccountTaxTaxRule() {{
                                        country = "Mozambique";
                                        locationId = "quis";
                                        ratePercent = "ipsum";
                                        shippingTaxed = false;
                                        useGlobalRate = false;
                                    }}),
                                    add(new AccountTaxTaxRule() {{
                                        country = "Vanuatu";
                                        locationId = "voluptate";
                                        ratePercent = "consectetur";
                                        shippingTaxed = false;
                                        useGlobalRate = false;
                                    }}),
                                }};
                            }};
                            batchId = 878870L;
                            merchantId = "tenetur";
                            method = "dignissimos";
                        }}),
                    }};
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "quod";
                dryRun = false;
                fields = "odio";
                key = "similique";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "ducimus";
                uploadProtocol = "dolore";
            }};            

            ContentAccounttaxCustombatchResponse res = sdk.accounttax.contentAccounttaxCustombatch(req, new ContentAccounttaxCustombatchSecurity("quibusdam", "illum") {{
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

            ContentAccounttaxGetRequest req = new ContentAccounttaxGetRequest("sequi", "natus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "exercitationem";
                fields = "nulla";
                key = "fugit";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "doloribus";
                uploadProtocol = "iusto";
            }};            

            ContentAccounttaxGetResponse res = sdk.accounttax.contentAccounttaxGet(req, new ContentAccounttaxGetSecurity("eligendi", "ducimus") {{
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

            ContentAccounttaxListRequest req = new ContentAccounttaxListRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "ea";
                fields = "aspernatur";
                key = "vel";
                maxResults = 822118L;
                oauthToken = "magnam";
                pageToken = "ratione";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "laudantium";
                uploadProtocol = "dicta";
            }};            

            ContentAccounttaxListResponse res = sdk.accounttax.contentAccounttaxList(req, new ContentAccounttaxListSecurity("dolor", "maiores") {{
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

            ContentAccounttaxUpdateRequest req = new ContentAccounttaxUpdateRequest("quasi", "ex") {{
                dollarXgafv = XgafvEnum.TWO;
                accountTax = new AccountTax() {{
                    accountId = "excepturi";
                    kind = "voluptatibus";
                    rules = new org.openapis.openapi.models.shared.AccountTaxTaxRule[]{{
                        add(new AccountTaxTaxRule() {{
                            country = "Vanuatu";
                            locationId = "quisquam";
                            ratePercent = "saepe";
                            shippingTaxed = false;
                            useGlobalRate = false;
                        }}),
                        add(new AccountTaxTaxRule() {{
                            country = "Iran";
                            locationId = "impedit";
                            ratePercent = "corporis";
                            shippingTaxed = false;
                            useGlobalRate = false;
                        }}),
                    }};
                }};;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "inventore";
                dryRun = false;
                fields = "magnam";
                key = "ea";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "recusandae";
                uploadProtocol = "aspernatur";
            }};            

            ContentAccounttaxUpdateResponse res = sdk.accounttax.contentAccounttaxUpdate(req, new ContentAccounttaxUpdateSecurity("minima", "eaque") {{
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
