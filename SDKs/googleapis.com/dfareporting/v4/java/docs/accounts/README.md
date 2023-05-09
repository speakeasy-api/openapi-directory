# accounts

### Available Operations

* [dfareportingAccountsGet](#dfareportingaccountsget) - Gets one account by ID.
* [dfareportingAccountsList](#dfareportingaccountslist) - Retrieves the list of accounts, possibly filtered. This method supports paging.
* [dfareportingAccountsPatch](#dfareportingaccountspatch) - Updates an existing account. This method supports patch semantics.
* [dfareportingAccountsUpdate](#dfareportingaccountsupdate) - Updates an existing account.

## dfareportingAccountsGet

Gets one account by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAccountsGetRequest;
import org.openapis.openapi.models.operations.DfareportingAccountsGetResponse;
import org.openapis.openapi.models.operations.DfareportingAccountsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAccountsGetRequest req = new DfareportingAccountsGetRequest("nemo", "quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "maxime";
                key = "deleniti";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "architecto";
                uploadProtocol = "architecto";
            }};            

            DfareportingAccountsGetResponse res = sdk.accounts.dfareportingAccountsGet(req, new DfareportingAccountsGetSecurity("repudiandae", "ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAccountsList

Retrieves the list of accounts, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAccountsListRequest;
import org.openapis.openapi.models.operations.DfareportingAccountsListResponse;
import org.openapis.openapi.models.operations.DfareportingAccountsListSecurity;
import org.openapis.openapi.models.operations.DfareportingAccountsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingAccountsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAccountsListRequest req = new DfareportingAccountsListRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                active = false;
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "saepe";
                ids = new String[]{{
                    add("accusantium"),
                    add("consequuntur"),
                    add("praesentium"),
                    add("natus"),
                }};
                key = "magni";
                maxResults = 123820L;
                oauthToken = "quo";
                pageToken = "illum";
                prettyPrint = false;
                quotaUser = "pariatur";
                searchString = "maxime";
                sortField = DfareportingAccountsListSortFieldEnum.ID;
                sortOrder = DfareportingAccountsListSortOrderEnum.DESCENDING;
                uploadType = "odit";
                uploadProtocol = "ea";
            }};            

            DfareportingAccountsListResponse res = sdk.accounts.dfareportingAccountsList(req, new DfareportingAccountsListSecurity("accusantium", "ab") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAccountsPatch

Updates an existing account. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAccountsPatchRequest;
import org.openapis.openapi.models.operations.DfareportingAccountsPatchResponse;
import org.openapis.openapi.models.operations.DfareportingAccountsPatchSecurity;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.AccountAccountProfileEnum;
import org.openapis.openapi.models.shared.AccountActiveAdsLimitTierEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LookbackConfiguration;
import org.openapis.openapi.models.shared.ReportsConfiguration;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAccountsPatchRequest req = new DfareportingAccountsPatchRequest("maiores", "quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                account = new Account() {{
                    accountPermissionIds = new String[]{{
                        add("autem"),
                        add("nam"),
                    }};
                    accountProfile = AccountAccountProfileEnum.ACCOUNT_PROFILE_BASIC;
                    active = false;
                    activeAdsLimitTier = AccountActiveAdsLimitTierEnum.ACTIVE_ADS_TIER750_K;
                    activeViewOptOut = false;
                    availablePermissionIds = new String[]{{
                        add("voluptatibus"),
                        add("perferendis"),
                    }};
                    countryId = "fugiat";
                    currencyId = "amet";
                    defaultCreativeSizeId = "aut";
                    description = "cumque";
                    id = "corporis";
                    kind = "hic";
                    locale = "libero";
                    maximumImageSize = "nobis";
                    name = "Beatrice Lebsack II";
                    nielsenOcrEnabled = false;
                    reportsConfiguration = new ReportsConfiguration() {{
                        exposureToConversionEnabled = false;
                        lookbackConfiguration = new LookbackConfiguration() {{
                            clickDuration = 199996;
                            postImpressionActivitiesDuration = 179490;
                        }};;
                        reportGenerationTimeZoneId = "perferendis";
                    }};;
                    shareReportsWithTwitter = false;
                    teaserSizeLimit = "dolores";
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

            DfareportingAccountsPatchResponse res = sdk.accounts.dfareportingAccountsPatch(req, new DfareportingAccountsPatchSecurity("perspiciatis", "voluptatem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAccountsUpdate

Updates an existing account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAccountsUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingAccountsUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingAccountsUpdateSecurity;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.AccountAccountProfileEnum;
import org.openapis.openapi.models.shared.AccountActiveAdsLimitTierEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LookbackConfiguration;
import org.openapis.openapi.models.shared.ReportsConfiguration;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAccountsUpdateRequest req = new DfareportingAccountsUpdateRequest("porro") {{
                dollarXgafv = XgafvEnum.ONE;
                account = new Account() {{
                    accountPermissionIds = new String[]{{
                        add("error"),
                        add("eaque"),
                        add("occaecati"),
                    }};
                    accountProfile = AccountAccountProfileEnum.ACCOUNT_PROFILE_STANDARD;
                    active = false;
                    activeAdsLimitTier = AccountActiveAdsLimitTierEnum.ACTIVE_ADS_TIER75_K;
                    activeViewOptOut = false;
                    availablePermissionIds = new String[]{{
                        add("earum"),
                        add("modi"),
                        add("iste"),
                        add("dolorum"),
                    }};
                    countryId = "deleniti";
                    currencyId = "pariatur";
                    defaultCreativeSizeId = "provident";
                    description = "nobis";
                    id = "libero";
                    kind = "delectus";
                    locale = "quaerat";
                    maximumImageSize = "quos";
                    name = "Florence Ebert";
                    nielsenOcrEnabled = false;
                    reportsConfiguration = new ReportsConfiguration() {{
                        exposureToConversionEnabled = false;
                        lookbackConfiguration = new LookbackConfiguration() {{
                            clickDuration = 218749;
                            postImpressionActivitiesDuration = 944373;
                        }};;
                        reportGenerationTimeZoneId = "excepturi";
                    }};;
                    shareReportsWithTwitter = false;
                    teaserSizeLimit = "cum";
                }};;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "amet";
                key = "dolorum";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "ipsa";
                uploadProtocol = "ipsa";
            }};            

            DfareportingAccountsUpdateResponse res = sdk.accounts.dfareportingAccountsUpdate(req, new DfareportingAccountsUpdateSecurity("iure", "odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
