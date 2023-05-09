# marketplacenotes

### Available Operations

* [adexchangebuyerMarketplacenotesInsert](#adexchangebuyermarketplacenotesinsert) - Add notes to the proposal
* [adexchangebuyerMarketplacenotesList](#adexchangebuyermarketplacenoteslist) - Get all the notes associated with a proposal

## adexchangebuyerMarketplacenotesInsert

Add notes to the proposal

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacenotesInsertRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacenotesInsertResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacenotesInsertSecurity;
import org.openapis.openapi.models.shared.AddOrderNotesRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MarketplaceNote;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerMarketplacenotesInsertRequest req = new AdexchangebuyerMarketplacenotesInsertRequest("illum") {{
                addOrderNotesRequest = new AddOrderNotesRequest() {{
                    notes = new org.openapis.openapi.models.shared.MarketplaceNote[]{{
                        add(new MarketplaceNote() {{
                            creatorRole = "dignissimos";
                            dealId = "vero";
                            kind = "qui";
                            note = "consectetur";
                            noteId = "repellat";
                            proposalId = "explicabo";
                            proposalRevisionNumber = "explicabo";
                            timestampMs = "exercitationem";
                        }}),
                        add(new MarketplaceNote() {{
                            creatorRole = "nihil";
                            dealId = "non";
                            kind = "ab";
                            note = "illo";
                            noteId = "hic";
                            proposalId = "deserunt";
                            proposalRevisionNumber = "delectus";
                            timestampMs = "non";
                        }}),
                        add(new MarketplaceNote() {{
                            creatorRole = "distinctio";
                            dealId = "in";
                            kind = "exercitationem";
                            note = "labore";
                            noteId = "numquam";
                            proposalId = "repudiandae";
                            proposalRevisionNumber = "modi";
                            timestampMs = "in";
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "explicabo";
                key = "accusamus";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "aperiam";
                userIp = "odit";
            }};            

            AdexchangebuyerMarketplacenotesInsertResponse res = sdk.marketplacenotes.adexchangebuyerMarketplacenotesInsert(req, new AdexchangebuyerMarketplacenotesInsertSecurity("deleniti", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.addOrderNotesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerMarketplacenotesList

Get all the notes associated with a proposal

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacenotesListRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacenotesListResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacenotesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerMarketplacenotesListRequest req = new AdexchangebuyerMarketplacenotesListRequest("voluptate") {{
                alt = AltEnum.JSON;
                fields = "similique";
                key = "minima";
                oauthToken = "libero";
                pqlQuery = "magnam";
                prettyPrint = false;
                quotaUser = "sit";
                userIp = "modi";
            }};            

            AdexchangebuyerMarketplacenotesListResponse res = sdk.marketplacenotes.adexchangebuyerMarketplacenotesList(req, new AdexchangebuyerMarketplacenotesListSecurity("eum", "nesciunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getOrderNotesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
