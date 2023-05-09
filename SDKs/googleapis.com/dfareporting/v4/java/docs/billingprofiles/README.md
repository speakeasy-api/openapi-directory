# billingProfiles

### Available Operations

* [dfareportingBillingProfilesGet](#dfareportingbillingprofilesget) - Gets one billing profile by ID.
* [dfareportingBillingProfilesList](#dfareportingbillingprofileslist) - Retrieves a list of billing profiles, possibly filtered. This method supports paging.
* [dfareportingBillingProfilesUpdate](#dfareportingbillingprofilesupdate) - Updates an existing billing profile.

## dfareportingBillingProfilesGet

Gets one billing profile by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingBillingProfilesGetRequest;
import org.openapis.openapi.models.operations.DfareportingBillingProfilesGetResponse;
import org.openapis.openapi.models.operations.DfareportingBillingProfilesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingBillingProfilesGetRequest req = new DfareportingBillingProfilesGetRequest("non", "recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "occaecati";
                key = "quibusdam";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "consequuntur";
                uploadProtocol = "eius";
            }};            

            DfareportingBillingProfilesGetResponse res = sdk.billingProfiles.dfareportingBillingProfilesGet(req, new DfareportingBillingProfilesGetSecurity("commodi", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.billingProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingBillingProfilesList

Retrieves a list of billing profiles, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingBillingProfilesListRequest;
import org.openapis.openapi.models.operations.DfareportingBillingProfilesListResponse;
import org.openapis.openapi.models.operations.DfareportingBillingProfilesListSecurity;
import org.openapis.openapi.models.operations.DfareportingBillingProfilesListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingBillingProfilesListSortOrderEnum;
import org.openapis.openapi.models.operations.DfareportingBillingProfilesListStatusEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingBillingProfilesListRequest req = new DfareportingBillingProfilesListRequest("vel") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                currencyCode = "modi";
                fields = "doloremque";
                ids = new String[]{{
                    add("sit"),
                    add("voluptatum"),
                }};
                key = "tempora";
                maxResults = 962411L;
                name = "Kayla Reinger";
                oauthToken = "optio";
                onlySuggestion = false;
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "maiores";
                sortField = DfareportingBillingProfilesListSortFieldEnum.ID;
                sortOrder = DfareportingBillingProfilesListSortOrderEnum.ASCENDING;
                status = new org.openapis.openapi.models.operations.DfareportingBillingProfilesListStatusEnum[]{{
                    add(DfareportingBillingProfilesListStatusEnum.UNDER_REVIEW),
                }};
                subaccountIds = new String[]{{
                    add("vitae"),
                    add("occaecati"),
                }};
                uploadType = "labore";
                uploadProtocol = "fugiat";
            }};            

            DfareportingBillingProfilesListResponse res = sdk.billingProfiles.dfareportingBillingProfilesList(req, new DfareportingBillingProfilesListSecurity("quidem", "exercitationem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.billingProfilesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingBillingProfilesUpdate

Updates an existing billing profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingBillingProfilesUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingBillingProfilesUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingBillingProfilesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BillingProfile;
import org.openapis.openapi.models.shared.BillingProfileInvoiceLevelEnum;
import org.openapis.openapi.models.shared.BillingProfileStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingBillingProfilesUpdateRequest req = new DfareportingBillingProfilesUpdateRequest("veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                billingProfile = new BillingProfile() {{
                    consolidatedInvoice = false;
                    countryCode = "BI";
                    currencyCode = "quae";
                    id = "similique";
                    invoiceLevel = BillingProfileInvoiceLevelEnum.CAMPAIGN_LEVEL;
                    isDefault = false;
                    kind = "quo";
                    name = "Tara Marquardt";
                    paymentsAccountId = "provident";
                    paymentsCustomerId = "alias";
                    purchaseOrder = "deserunt";
                    secondaryPaymentsCustomerId = "fugit";
                    status = BillingProfileStatusEnum.ACTIVE;
                }};;
                accessToken = "quo";
                alt = AltEnum.MEDIA;
                callback = "maxime";
                fields = "facere";
                key = "impedit";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "quasi";
                uploadProtocol = "maiores";
            }};            

            DfareportingBillingProfilesUpdateResponse res = sdk.billingProfiles.dfareportingBillingProfilesUpdate(req, new DfareportingBillingProfilesUpdateSecurity("voluptatem", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.billingProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
