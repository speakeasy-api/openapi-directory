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

            DfareportingCampaignCreativeAssociationsInsertRequest req = new DfareportingCampaignCreativeAssociationsInsertRequest("minus", "hic") {{
                dollarXgafv = XgafvEnum.TWO;
                campaignCreativeAssociation = new CampaignCreativeAssociation() {{
                    creativeId = "fuga";
                    kind = "consectetur";
                }};;
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "cumque";
                fields = "adipisci";
                key = "veritatis";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "magnam";
                uploadProtocol = "aperiam";
            }};            

            DfareportingCampaignCreativeAssociationsInsertResponse res = sdk.campaignCreativeAssociations.dfareportingCampaignCreativeAssociationsInsert(req, new DfareportingCampaignCreativeAssociationsInsertSecurity("ducimus", "itaque") {{
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

            DfareportingCampaignCreativeAssociationsListRequest req = new DfareportingCampaignCreativeAssociationsListRequest("necessitatibus", "numquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eligendi";
                alt = AltEnum.PROTO;
                callback = "alias";
                fields = "impedit";
                key = "numquam";
                maxResults = 136203L;
                oauthToken = "nobis";
                pageToken = "nihil";
                prettyPrint = false;
                quotaUser = "voluptatum";
                sortOrder = DfareportingCampaignCreativeAssociationsListSortOrderEnum.DESCENDING;
                uploadType = "vitae";
                uploadProtocol = "ullam";
            }};            

            DfareportingCampaignCreativeAssociationsListResponse res = sdk.campaignCreativeAssociations.dfareportingCampaignCreativeAssociationsList(req, new DfareportingCampaignCreativeAssociationsListSecurity("nisi", "consequuntur") {{
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
