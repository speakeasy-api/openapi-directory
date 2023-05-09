# accounts

### Available Operations

* [analyticsadminAccountsList](#analyticsadminaccountslist) - Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
* [analyticsadminAccountsProvisionAccountTicket](#analyticsadminaccountsprovisionaccountticket) - Requests a ticket for creating an account.
* [analyticsadminAccountsSearchChangeHistoryEvents](#analyticsadminaccountssearchchangehistoryevents) - Searches through all changes to an account or its children given the specified set of filters.

## analyticsadminAccountsList

Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminAccountsListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminAccountsListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminAccountsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminAccountsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminAccountsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminAccountsListRequest req = new AnalyticsadminAccountsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                pageSize = 957156L;
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                showDeleted = false;
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            AnalyticsadminAccountsListResponse res = sdk.accounts.analyticsadminAccountsList(req, new AnalyticsadminAccountsListSecurity() {{
                option1 = new AnalyticsadminAccountsListSecurityOption1("maiores", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminAccountsProvisionAccountTicket

Requests a ticket for creating an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminAccountsProvisionAccountTicketRequest;
import org.openapis.openapi.models.operations.AnalyticsadminAccountsProvisionAccountTicketResponse;
import org.openapis.openapi.models.operations.AnalyticsadminAccountsProvisionAccountTicketSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaAccountInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminAccountsProvisionAccountTicketRequest req = new AnalyticsadminAccountsProvisionAccountTicketRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput = new GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput() {{
                    account = new GoogleAnalyticsAdminV1alphaAccountInput() {{
                        displayName = "quod";
                        regionCode = "esse";
                    }};;
                    redirectUri = "totam";
                }};;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "nam";
                key = "officia";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "deleniti";
                uploadProtocol = "hic";
            }};            

            AnalyticsadminAccountsProvisionAccountTicketResponse res = sdk.accounts.analyticsadminAccountsProvisionAccountTicket(req, new AnalyticsadminAccountsProvisionAccountTicketSecurity("optio", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaProvisionAccountTicketResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsadminAccountsSearchChangeHistoryEvents

Searches through all changes to an account or its children given the specified set of filters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminAccountsSearchChangeHistoryEventsRequest;
import org.openapis.openapi.models.operations.AnalyticsadminAccountsSearchChangeHistoryEventsResponse;
import org.openapis.openapi.models.operations.AnalyticsadminAccountsSearchChangeHistoryEventsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum;
import org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminAccountsSearchChangeHistoryEventsRequest req = new AnalyticsadminAccountsSearchChangeHistoryEventsRequest("beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest = new GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest() {{
                    action = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum[]{{
                        add(GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum.CREATED),
                        add(GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum.ACTION_TYPE_UNSPECIFIED),
                    }};
                    actorEmail = new String[]{{
                        add("cum"),
                        add("esse"),
                        add("ipsum"),
                        add("excepturi"),
                    }};
                    earliestChangeTime = "aspernatur";
                    latestChangeTime = "perferendis";
                    pageSize = 324141;
                    pageToken = "natus";
                    property = "sed";
                    resourceType = new org.openapis.openapi.models.shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum[]{{
                        add(GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum.GOOGLE_ADS_LINK),
                        add(GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum.DISPLAY_VIDEO360_ADVERTISER_LINK_PROPOSAL),
                        add(GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum.CUSTOM_DIMENSION),
                    }};
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "fuga";
                fields = "in";
                key = "corporis";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "saepe";
                uploadProtocol = "quidem";
            }};            

            AnalyticsadminAccountsSearchChangeHistoryEventsResponse res = sdk.accounts.analyticsadminAccountsSearchChangeHistoryEvents(req, new AnalyticsadminAccountsSearchChangeHistoryEventsSecurity("architecto", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
