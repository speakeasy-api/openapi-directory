# campaignCreativeAssociations

### Available Operations

* [dfareportingCampaignCreativeAssociationsInsert](#dfareportingcampaigncreativeassociationsinsert) - Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
* [dfareportingCampaignCreativeAssociationsList](#dfareportingcampaigncreativeassociationslist) - Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.

## dfareportingCampaignCreativeAssociationsInsert

Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCampaignCreativeAssociationsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingCampaignCreativeAssociationsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingCampaignCreativeAssociationsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CampaignCreativeAssociation;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCampaignCreativeAssociationsInsertRequest req = new DfareportingCampaignCreativeAssociationsInsertRequest("maiores", "voluptatem") {{
                dollarXgafv = XgafvEnum.ONE;
                campaignCreativeAssociation = new CampaignCreativeAssociation() {{
                    creativeId = "laudantium";
                    kind = "unde";
                }};;
                accessToken = "corrupti";
                alt = AltEnum.JSON;
                callback = "facere";
                fields = "ea";
                key = "libero";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "adipisci";
                uploadProtocol = "minus";
            }};            

            DfareportingCampaignCreativeAssociationsInsertResponse res = sdk.campaignCreativeAssociations.dfareportingCampaignCreativeAssociationsInsert(req, new DfareportingCampaignCreativeAssociationsInsertSecurity("hic", "similique") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.campaignCreativeAssociation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCampaignCreativeAssociationsList

Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCampaignCreativeAssociationsListRequest;
import org.openapis.openapi.models.operations.DfareportingCampaignCreativeAssociationsListResponse;
import org.openapis.openapi.models.operations.DfareportingCampaignCreativeAssociationsListSecurity;
import org.openapis.openapi.models.operations.DfareportingCampaignCreativeAssociationsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCampaignCreativeAssociationsListRequest req = new DfareportingCampaignCreativeAssociationsListRequest("fuga", "consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laudantium";
                alt = AltEnum.PROTO;
                callback = "adipisci";
                fields = "veritatis";
                key = "nam";
                maxResults = 974775L;
                oauthToken = "magnam";
                pageToken = "aperiam";
                prettyPrint = false;
                quotaUser = "ducimus";
                sortOrder = DfareportingCampaignCreativeAssociationsListSortOrderEnum.DESCENDING;
                uploadType = "necessitatibus";
                uploadProtocol = "numquam";
            }};            

            DfareportingCampaignCreativeAssociationsListResponse res = sdk.campaignCreativeAssociations.dfareportingCampaignCreativeAssociationsList(req, new DfareportingCampaignCreativeAssociationsListSecurity("doloribus", "eligendi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.campaignCreativeAssociationsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
