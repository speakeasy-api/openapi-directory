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

            DfareportingRemarketingListSharesGetRequest req = new DfareportingRemarketingListSharesGetRequest("reprehenderit", "officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "saepe";
                fields = "aut";
                key = "ipsum";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "facere";
                uploadProtocol = "esse";
            }};            

            DfareportingRemarketingListSharesGetResponse res = sdk.remarketingListShares.dfareportingRemarketingListSharesGet(req, new DfareportingRemarketingListSharesGetSecurity("tenetur", "ab") {{
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

            DfareportingRemarketingListSharesPatchRequest req = new DfareportingRemarketingListSharesPatchRequest("cum", "minus") {{
                dollarXgafv = XgafvEnum.ONE;
                remarketingListShare = new RemarketingListShare() {{
                    kind = "placeat";
                    remarketingListId = "est";
                    sharedAccountIds = new String[]{{
                        add("dolorum"),
                        add("repellat"),
                        add("dignissimos"),
                    }};
                    sharedAdvertiserIds = new String[]{{
                        add("optio"),
                        add("eos"),
                        add("impedit"),
                        add("minus"),
                    }};
                }};;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "numquam";
                fields = "libero";
                key = "recusandae";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "temporibus";
                uploadProtocol = "reiciendis";
            }};            

            DfareportingRemarketingListSharesPatchResponse res = sdk.remarketingListShares.dfareportingRemarketingListSharesPatch(req, new DfareportingRemarketingListSharesPatchSecurity("nisi", "voluptatum") {{
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

            DfareportingRemarketingListSharesUpdateRequest req = new DfareportingRemarketingListSharesUpdateRequest("earum") {{
                dollarXgafv = XgafvEnum.TWO;
                remarketingListShare = new RemarketingListShare() {{
                    kind = "vero";
                    remarketingListId = "repellendus";
                    sharedAccountIds = new String[]{{
                        add("consequuntur"),
                        add("earum"),
                        add("necessitatibus"),
                    }};
                    sharedAdvertiserIds = new String[]{{
                        add("consequatur"),
                        add("expedita"),
                    }};
                }};;
                accessToken = "itaque";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "excepturi";
                key = "repellat";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "suscipit";
                uploadProtocol = "est";
            }};            

            DfareportingRemarketingListSharesUpdateResponse res = sdk.remarketingListShares.dfareportingRemarketingListSharesUpdate(req, new DfareportingRemarketingListSharesUpdateSecurity("pariatur", "illum") {{
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
