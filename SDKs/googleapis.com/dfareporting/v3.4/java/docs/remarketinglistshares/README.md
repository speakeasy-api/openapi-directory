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

            DfareportingRemarketingListSharesGetRequest req = new DfareportingRemarketingListSharesGetRequest("est", "eius") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "sit";
                key = "iste";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "minima";
                uploadProtocol = "ipsum";
            }};            

            DfareportingRemarketingListSharesGetResponse res = sdk.remarketingListShares.dfareportingRemarketingListSharesGet(req, new DfareportingRemarketingListSharesGetSecurity("accusamus", "eos") {{
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

            DfareportingRemarketingListSharesPatchRequest req = new DfareportingRemarketingListSharesPatchRequest("fugit", "amet") {{
                dollarXgafv = XgafvEnum.ONE;
                remarketingListShare = new RemarketingListShare() {{
                    kind = "dicta";
                    remarketingListId = "quae";
                    sharedAccountIds = new String[]{{
                        add("rem"),
                        add("ad"),
                    }};
                    sharedAdvertiserIds = new String[]{{
                        add("omnis"),
                    }};
                }};;
                accessToken = "eligendi";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "perspiciatis";
                key = "consectetur";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "vitae";
                uploadProtocol = "aperiam";
            }};            

            DfareportingRemarketingListSharesPatchResponse res = sdk.remarketingListShares.dfareportingRemarketingListSharesPatch(req, new DfareportingRemarketingListSharesPatchSecurity("animi", "quisquam") {{
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

            DfareportingRemarketingListSharesUpdateRequest req = new DfareportingRemarketingListSharesUpdateRequest("possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                remarketingListShare = new RemarketingListShare() {{
                    kind = "ad";
                    remarketingListId = "quibusdam";
                    sharedAccountIds = new String[]{{
                        add("porro"),
                        add("quisquam"),
                        add("ipsum"),
                    }};
                    sharedAdvertiserIds = new String[]{{
                        add("ex"),
                    }};
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "praesentium";
                fields = "nisi";
                key = "libero";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "amet";
                uploadProtocol = "ducimus";
            }};            

            DfareportingRemarketingListSharesUpdateResponse res = sdk.remarketingListShares.dfareportingRemarketingListSharesUpdate(req, new DfareportingRemarketingListSharesUpdateSecurity("harum", "fugiat") {{
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
