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

            DfareportingCampaignCreativeAssociationsInsertRequest req = new DfareportingCampaignCreativeAssociationsInsertRequest("numquam", "doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                campaignCreativeAssociation = new CampaignCreativeAssociation() {{
                    creativeId = "sapiente";
                    kind = "alias";
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "nobis";
                key = "nihil";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "vitae";
                uploadProtocol = "ullam";
            }};            

            DfareportingCampaignCreativeAssociationsInsertResponse res = sdk.campaignCreativeAssociations.dfareportingCampaignCreativeAssociationsInsert(req, new DfareportingCampaignCreativeAssociationsInsertSecurity("nisi", "consequuntur") {{
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

            DfareportingCampaignCreativeAssociationsListRequest req = new DfareportingCampaignCreativeAssociationsListRequest("voluptas", "ratione") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "quibusdam";
                key = "impedit";
                maxResults = 497231L;
                oauthToken = "nisi";
                pageToken = "nisi";
                prettyPrint = false;
                quotaUser = "dolor";
                sortOrder = DfareportingCampaignCreativeAssociationsListSortOrderEnum.ASCENDING;
                uploadType = "dolore";
                uploadProtocol = "maxime";
            }};            

            DfareportingCampaignCreativeAssociationsListResponse res = sdk.campaignCreativeAssociations.dfareportingCampaignCreativeAssociationsList(req, new DfareportingCampaignCreativeAssociationsListSecurity("maxime", "expedita") {{
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
