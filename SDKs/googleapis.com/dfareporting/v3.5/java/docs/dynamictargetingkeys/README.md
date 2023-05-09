# dynamicTargetingKeys

### Available Operations

* [dfareportingDynamicTargetingKeysDelete](#dfareportingdynamictargetingkeysdelete) - Deletes an existing dynamic targeting key.
* [dfareportingDynamicTargetingKeysInsert](#dfareportingdynamictargetingkeysinsert) - Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
* [dfareportingDynamicTargetingKeysList](#dfareportingdynamictargetingkeyslist) - Retrieves a list of dynamic targeting keys.

## dfareportingDynamicTargetingKeysDelete

Deletes an existing dynamic targeting key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingDynamicTargetingKeysDeleteObjectTypeEnum;
import org.openapis.openapi.models.operations.DfareportingDynamicTargetingKeysDeleteRequest;
import org.openapis.openapi.models.operations.DfareportingDynamicTargetingKeysDeleteResponse;
import org.openapis.openapi.models.operations.DfareportingDynamicTargetingKeysDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingDynamicTargetingKeysDeleteRequest req = new DfareportingDynamicTargetingKeysDeleteRequest("repudiandae", "ipsum", DfareportingDynamicTargetingKeysDeleteObjectTypeEnum.OBJECT_ADVERTISER, "tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ex";
                alt = AltEnum.MEDIA;
                callback = "fugiat";
                fields = "atque";
                key = "beatae";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "architecto";
                uploadProtocol = "atque";
            }};            

            DfareportingDynamicTargetingKeysDeleteResponse res = sdk.dynamicTargetingKeys.dfareportingDynamicTargetingKeysDelete(req, new DfareportingDynamicTargetingKeysDeleteSecurity("temporibus", "unde") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingDynamicTargetingKeysInsert

Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingDynamicTargetingKeysInsertRequest;
import org.openapis.openapi.models.operations.DfareportingDynamicTargetingKeysInsertResponse;
import org.openapis.openapi.models.operations.DfareportingDynamicTargetingKeysInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DynamicTargetingKey;
import org.openapis.openapi.models.shared.DynamicTargetingKeyObjectTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingDynamicTargetingKeysInsertRequest req = new DfareportingDynamicTargetingKeysInsertRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                dynamicTargetingKey = new DynamicTargetingKey() {{
                    kind = "sunt";
                    name = "Lori Cole";
                    objectId = "minima";
                    objectType = DynamicTargetingKeyObjectTypeEnum.OBJECT_ADVERTISER;
                }};;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "culpa";
                fields = "voluptatum";
                key = "voluptatem";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "explicabo";
                uploadProtocol = "quia";
            }};            

            DfareportingDynamicTargetingKeysInsertResponse res = sdk.dynamicTargetingKeys.dfareportingDynamicTargetingKeysInsert(req, new DfareportingDynamicTargetingKeysInsertSecurity("provident", "fugit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.dynamicTargetingKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingDynamicTargetingKeysList

Retrieves a list of dynamic targeting keys.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingDynamicTargetingKeysListObjectTypeEnum;
import org.openapis.openapi.models.operations.DfareportingDynamicTargetingKeysListRequest;
import org.openapis.openapi.models.operations.DfareportingDynamicTargetingKeysListResponse;
import org.openapis.openapi.models.operations.DfareportingDynamicTargetingKeysListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingDynamicTargetingKeysListRequest req = new DfareportingDynamicTargetingKeysListRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                advertiserId = "quasi";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "laborum";
                key = "in";
                names = new String[]{{
                    add("odit"),
                }};
                oauthToken = "distinctio";
                objectId = "soluta";
                objectType = DfareportingDynamicTargetingKeysListObjectTypeEnum.OBJECT_CREATIVE;
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "repudiandae";
                uploadProtocol = "accusamus";
            }};            

            DfareportingDynamicTargetingKeysListResponse res = sdk.dynamicTargetingKeys.dfareportingDynamicTargetingKeysList(req, new DfareportingDynamicTargetingKeysListSecurity("quasi", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.dynamicTargetingKeysListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
