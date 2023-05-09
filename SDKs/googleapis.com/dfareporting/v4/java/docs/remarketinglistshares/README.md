# remarketingListShares

### Available Operations

* [dfareportingRemarketingListSharesGet](#dfareportingremarketinglistsharesget) - Gets one remarketing list share by remarketing list ID.
* [dfareportingRemarketingListSharesPatch](#dfareportingremarketinglistsharespatch) - Updates an existing remarketing list share. This method supports patch semantics.
* [dfareportingRemarketingListSharesUpdate](#dfareportingremarketinglistsharesupdate) - Updates an existing remarketing list share.

## dfareportingRemarketingListSharesGet

Gets one remarketing list share by remarketing list ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingRemarketingListSharesGetRequest;
import org.openapis.openapi.models.operations.DfareportingRemarketingListSharesGetResponse;
import org.openapis.openapi.models.operations.DfareportingRemarketingListSharesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingRemarketingListSharesGetRequest req = new DfareportingRemarketingListSharesGetRequest("nisi", "veniam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laudantium";
                alt = AltEnum.MEDIA;
                callback = "debitis";
                fields = "earum";
                key = "similique";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "sapiente";
                uploadProtocol = "nulla";
            }};            

            DfareportingRemarketingListSharesGetResponse res = sdk.remarketingListShares.dfareportingRemarketingListSharesGet(req, new DfareportingRemarketingListSharesGetSecurity("dolore", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.remarketingListShare != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingRemarketingListSharesPatch

Updates an existing remarketing list share. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingRemarketingListSharesPatchRequest;
import org.openapis.openapi.models.operations.DfareportingRemarketingListSharesPatchResponse;
import org.openapis.openapi.models.operations.DfareportingRemarketingListSharesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemarketingListShare;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingRemarketingListSharesPatchRequest req = new DfareportingRemarketingListSharesPatchRequest("ipsum", "perspiciatis") {{
                dollarXgafv = XgafvEnum.TWO;
                remarketingListShare = new RemarketingListShare() {{
                    kind = "totam";
                    remarketingListId = "mollitia";
                    sharedAccountIds = new String[]{{
                        add("eius"),
                    }};
                    sharedAdvertiserIds = new String[]{{
                        add("perferendis"),
                        add("aliquid"),
                        add("in"),
                    }};
                }};;
                accessToken = "quos";
                alt = AltEnum.PROTO;
                callback = "sunt";
                fields = "dolor";
                key = "quisquam";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "laboriosam";
                uploadProtocol = "repellendus";
            }};            

            DfareportingRemarketingListSharesPatchResponse res = sdk.remarketingListShares.dfareportingRemarketingListSharesPatch(req, new DfareportingRemarketingListSharesPatchSecurity("quos", "neque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.remarketingListShare != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingRemarketingListSharesUpdate

Updates an existing remarketing list share.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingRemarketingListSharesUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingRemarketingListSharesUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingRemarketingListSharesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemarketingListShare;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingRemarketingListSharesUpdateRequest req = new DfareportingRemarketingListSharesUpdateRequest("omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                remarketingListShare = new RemarketingListShare() {{
                    kind = "eligendi";
                    remarketingListId = "occaecati";
                    sharedAccountIds = new String[]{{
                        add("illo"),
                        add("esse"),
                        add("enim"),
                        add("reiciendis"),
                    }};
                    sharedAdvertiserIds = new String[]{{
                        add("similique"),
                        add("iste"),
                        add("consequatur"),
                        add("autem"),
                    }};
                }};;
                accessToken = "similique";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "corporis";
                key = "error";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "fugit";
                uploadProtocol = "debitis";
            }};            

            DfareportingRemarketingListSharesUpdateResponse res = sdk.remarketingListShares.dfareportingRemarketingListSharesUpdate(req, new DfareportingRemarketingListSharesUpdateSecurity("quidem", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.remarketingListShare != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
