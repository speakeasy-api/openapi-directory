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

            DfareportingDynamicTargetingKeysDeleteRequest req = new DfareportingDynamicTargetingKeysDeleteRequest("tenetur", "sequi", DfareportingDynamicTargetingKeysDeleteObjectTypeEnum.OBJECT_PLACEMENT, "cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magni";
                alt = AltEnum.JSON;
                callback = "earum";
                fields = "similique";
                key = "id";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "nostrum";
                uploadProtocol = "delectus";
            }};            

            DfareportingDynamicTargetingKeysDeleteResponse res = sdk.dynamicTargetingKeys.dfareportingDynamicTargetingKeysDelete(req, new DfareportingDynamicTargetingKeysDeleteSecurity("quidem", "rem") {{
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

            DfareportingDynamicTargetingKeysInsertRequest req = new DfareportingDynamicTargetingKeysInsertRequest("repellat") {{
                dollarXgafv = XgafvEnum.ONE;
                dynamicTargetingKey = new DynamicTargetingKey() {{
                    kind = "veniam";
                    name = "Delia Reichert";
                    objectId = "illum";
                    objectType = DynamicTargetingKeyObjectTypeEnum.OBJECT_ADVERTISER;
                }};;
                accessToken = "praesentium";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "dolor";
                key = "corrupti";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "aperiam";
                uploadProtocol = "fugit";
            }};            

            DfareportingDynamicTargetingKeysInsertResponse res = sdk.dynamicTargetingKeys.dfareportingDynamicTargetingKeysInsert(req, new DfareportingDynamicTargetingKeysInsertSecurity("labore", "neque") {{
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

            DfareportingDynamicTargetingKeysListRequest req = new DfareportingDynamicTargetingKeysListRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "error";
                advertiserId = "ratione";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "soluta";
                key = "neque";
                names = new String[]{{
                    add("vero"),
                }};
                oauthToken = "excepturi";
                objectId = "dicta";
                objectType = DfareportingDynamicTargetingKeysListObjectTypeEnum.OBJECT_AD;
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "corporis";
                uploadProtocol = "alias";
            }};            

            DfareportingDynamicTargetingKeysListResponse res = sdk.dynamicTargetingKeys.dfareportingDynamicTargetingKeysList(req, new DfareportingDynamicTargetingKeysListSecurity("asperiores", "quibusdam") {{
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
