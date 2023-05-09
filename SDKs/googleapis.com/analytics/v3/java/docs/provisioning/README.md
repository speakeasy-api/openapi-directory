# provisioning

### Available Operations

* [analyticsProvisioningCreateAccountTicket](#analyticsprovisioningcreateaccountticket) - Creates an account ticket.
* [analyticsProvisioningCreateAccountTree](#analyticsprovisioningcreateaccounttree) - Provision account.

## analyticsProvisioningCreateAccountTicket

Creates an account ticket.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsProvisioningCreateAccountTicketRequest;
import org.openapis.openapi.models.operations.AnalyticsProvisioningCreateAccountTicketResponse;
import org.openapis.openapi.models.operations.AnalyticsProvisioningCreateAccountTicketSecurity;
import org.openapis.openapi.models.shared.AccountChildLink;
import org.openapis.openapi.models.shared.AccountInput;
import org.openapis.openapi.models.shared.AccountTicketInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ProfileChildLink;
import org.openapis.openapi.models.shared.ProfileInput;
import org.openapis.openapi.models.shared.ProfileParentLink;
import org.openapis.openapi.models.shared.WebpropertyChildLink;
import org.openapis.openapi.models.shared.WebpropertyInput;
import org.openapis.openapi.models.shared.WebpropertyParentLink;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsProvisioningCreateAccountTicketRequest req = new AnalyticsProvisioningCreateAccountTicketRequest() {{
                accountTicketInput = new AccountTicketInput() {{
                    account = new AccountInput() {{
                        childLink = new AccountChildLink() {{
                            href = "cupiditate";
                            type = "adipisci";
                        }};;
                        created = OffsetDateTime.parse("2022-12-05T19:27:10.992Z");
                        id = "52ed7e25-3f4c-4157-9eaa-7170f445accf";
                        kind = "laboriosam";
                        name = "Lillie Pfannerstill";
                        selfLink = "cupiditate";
                        starred = false;
                        updated = OffsetDateTime.parse("2021-07-14T17:52:57.722Z");
                    }};;
                    id = "ad185fe4-31d6-4bf5-8838-fbb8c20cb67f";
                    kind = "minus";
                    profile = new ProfileInput() {{
                        accountId = "ut";
                        botFilteringEnabled = false;
                        childLink = new ProfileChildLink() {{
                            href = "distinctio";
                            type = "eius";
                        }};;
                        currency = "eos";
                        defaultPage = "veniam";
                        eCommerceTracking = false;
                        enhancedECommerceTracking = false;
                        excludeQueryParameters = "repudiandae";
                        id = "99e6234c-9f7b-479d-beb7-7a5c38d4baf9";
                        name = "Ms. Gwen Haley";
                        parentLink = new ProfileParentLink() {{
                            href = "delectus";
                            type = "deleniti";
                        }};;
                        siteSearchCategoryParameters = "provident";
                        siteSearchQueryParameters = "aut";
                        starred = false;
                        stripSiteSearchCategoryParameters = false;
                        stripSiteSearchQueryParameters = false;
                        timezone = "dolorum";
                        type = "nostrum";
                        websiteUrl = "tempora";
                    }};;
                    redirectUri = "nam";
                    webproperty = new WebpropertyInput() {{
                        accountId = "numquam";
                        childLink = new WebpropertyChildLink() {{
                            href = "odio";
                            type = "nostrum";
                        }};;
                        dataRetentionResetOnNewActivity = false;
                        dataRetentionTtl = "maiores";
                        defaultProfileId = "veritatis";
                        id = "6f56d385-a3c4-4ac6-b1b9-9e26ced8f9fd";
                        industryVertical = "facilis";
                        name = "Dr. Marcus Bosco";
                        parentLink = new WebpropertyParentLink() {{
                            href = "velit";
                            type = "tempore";
                        }};;
                        starred = false;
                        websiteUrl = "expedita";
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "hic";
                key = "blanditiis";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "iusto";
                userIp = "atque";
            }};            

            AnalyticsProvisioningCreateAccountTicketResponse res = sdk.provisioning.analyticsProvisioningCreateAccountTicket(req, new AnalyticsProvisioningCreateAccountTicketSecurity("velit", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountTicket != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsProvisioningCreateAccountTree

Provision account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsProvisioningCreateAccountTreeRequest;
import org.openapis.openapi.models.operations.AnalyticsProvisioningCreateAccountTreeResponse;
import org.openapis.openapi.models.operations.AnalyticsProvisioningCreateAccountTreeSecurity;
import org.openapis.openapi.models.shared.AccountTreeRequest;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsProvisioningCreateAccountTreeRequest req = new AnalyticsProvisioningCreateAccountTreeRequest() {{
                accountTreeRequest = new AccountTreeRequest() {{
                    accountName = "nam";
                    kind = "aperiam";
                    profileName = "vitae";
                    timezone = "mollitia";
                    webpropertyName = "asperiores";
                    websiteUrl = "at";
                }};;
                alt = AltEnum.JSON;
                fields = "quibusdam";
                key = "quam";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "rem";
                userIp = "vel";
            }};            

            AnalyticsProvisioningCreateAccountTreeResponse res = sdk.provisioning.analyticsProvisioningCreateAccountTree(req, new AnalyticsProvisioningCreateAccountTreeSecurity("eos", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountTreeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
