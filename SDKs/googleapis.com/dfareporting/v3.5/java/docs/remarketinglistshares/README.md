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

            DfareportingRemarketingListSharesGetRequest req = new DfareportingRemarketingListSharesGetRequest("tempore", "ex") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.JSON;
                callback = "dicta";
                fields = "quisquam";
                key = "adipisci";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "occaecati";
                uploadProtocol = "perspiciatis";
            }};            

            DfareportingRemarketingListSharesGetResponse res = sdk.remarketingListShares.dfareportingRemarketingListSharesGet(req, new DfareportingRemarketingListSharesGetSecurity("deleniti", "dolor") {{
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

            DfareportingRemarketingListSharesPatchRequest req = new DfareportingRemarketingListSharesPatchRequest("eum", "eum") {{
                dollarXgafv = XgafvEnum.ONE;
                remarketingListShare = new RemarketingListShare() {{
                    kind = "placeat";
                    remarketingListId = "vel";
                    sharedAccountIds = new String[]{{
                        add("quibusdam"),
                        add("cumque"),
                    }};
                    sharedAdvertiserIds = new String[]{{
                        add("expedita"),
                        add("reprehenderit"),
                        add("nulla"),
                    }};
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "soluta";
                key = "aperiam";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "totam";
                uploadProtocol = "distinctio";
            }};            

            DfareportingRemarketingListSharesPatchResponse res = sdk.remarketingListShares.dfareportingRemarketingListSharesPatch(req, new DfareportingRemarketingListSharesPatchSecurity("modi", "aperiam") {{
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

            DfareportingRemarketingListSharesUpdateRequest req = new DfareportingRemarketingListSharesUpdateRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                remarketingListShare = new RemarketingListShare() {{
                    kind = "eaque";
                    remarketingListId = "nihil";
                    sharedAccountIds = new String[]{{
                        add("adipisci"),
                    }};
                    sharedAdvertiserIds = new String[]{{
                        add("in"),
                        add("magnam"),
                    }};
                }};;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "a";
                key = "voluptates";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "doloremque";
                uploadProtocol = "et";
            }};            

            DfareportingRemarketingListSharesUpdateResponse res = sdk.remarketingListShares.dfareportingRemarketingListSharesUpdate(req, new DfareportingRemarketingListSharesUpdateSecurity("possimus", "unde") {{
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
