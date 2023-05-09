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

            DfareportingDynamicTargetingKeysDeleteRequest req = new DfareportingDynamicTargetingKeysDeleteRequest("iure", "libero", DfareportingDynamicTargetingKeysDeleteObjectTypeEnum.OBJECT_CREATIVE, "eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "adipisci";
                key = "quam";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "libero";
                uploadProtocol = "vitae";
            }};            

            DfareportingDynamicTargetingKeysDeleteResponse res = sdk.dynamicTargetingKeys.dfareportingDynamicTargetingKeysDelete(req, new DfareportingDynamicTargetingKeysDeleteSecurity("non", "labore") {{
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

            DfareportingDynamicTargetingKeysInsertRequest req = new DfareportingDynamicTargetingKeysInsertRequest("incidunt") {{
                dollarXgafv = XgafvEnum.TWO;
                dynamicTargetingKey = new DynamicTargetingKey() {{
                    kind = "deserunt";
                    name = "Domingo Kihn";
                    objectId = "quis";
                    objectType = DynamicTargetingKeyObjectTypeEnum.OBJECT_PLACEMENT;
                }};;
                accessToken = "accusantium";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "reprehenderit";
                key = "laborum";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "suscipit";
                uploadProtocol = "explicabo";
            }};            

            DfareportingDynamicTargetingKeysInsertResponse res = sdk.dynamicTargetingKeys.dfareportingDynamicTargetingKeysInsert(req, new DfareportingDynamicTargetingKeysInsertSecurity("recusandae", "unde") {{
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

            DfareportingDynamicTargetingKeysListRequest req = new DfareportingDynamicTargetingKeysListRequest("iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ea";
                advertiserId = "architecto";
                alt = AltEnum.PROTO;
                callback = "cum";
                fields = "alias";
                key = "quod";
                names = new String[]{{
                    add("corrupti"),
                    add("temporibus"),
                }};
                oauthToken = "odit";
                objectId = "voluptate";
                objectType = DfareportingDynamicTargetingKeysListObjectTypeEnum.OBJECT_CREATIVE;
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "beatae";
                uploadProtocol = "cupiditate";
            }};            

            DfareportingDynamicTargetingKeysListResponse res = sdk.dynamicTargetingKeys.dfareportingDynamicTargetingKeysList(req, new DfareportingDynamicTargetingKeysListSecurity("cupiditate", "ex") {{
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
