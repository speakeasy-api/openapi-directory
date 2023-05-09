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

            DfareportingDynamicTargetingKeysDeleteRequest req = new DfareportingDynamicTargetingKeysDeleteRequest("porro", "vel", DfareportingDynamicTargetingKeysDeleteObjectTypeEnum.OBJECT_CREATIVE, "recusandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quam";
                alt = AltEnum.JSON;
                callback = "facere";
                fields = "libero";
                key = "vitae";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "incidunt";
                uploadProtocol = "tempore";
            }};            

            DfareportingDynamicTargetingKeysDeleteResponse res = sdk.dynamicTargetingKeys.dfareportingDynamicTargetingKeysDelete(req, new DfareportingDynamicTargetingKeysDeleteSecurity("deserunt", "error") {{
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

            DfareportingDynamicTargetingKeysInsertRequest req = new DfareportingDynamicTargetingKeysInsertRequest("doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                dynamicTargetingKey = new DynamicTargetingKey() {{
                    kind = "rem";
                    name = "Dr. Wesley Russel";
                    objectId = "reprehenderit";
                    objectType = DynamicTargetingKeyObjectTypeEnum.OBJECT_CREATIVE;
                }};;
                accessToken = "officia";
                alt = AltEnum.PROTO;
                callback = "suscipit";
                fields = "explicabo";
                key = "recusandae";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "aspernatur";
                uploadProtocol = "ea";
            }};            

            DfareportingDynamicTargetingKeysInsertResponse res = sdk.dynamicTargetingKeys.dfareportingDynamicTargetingKeysInsert(req, new DfareportingDynamicTargetingKeysInsertSecurity("architecto", "earum") {{
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
                accessToken = "quod";
                advertiserId = "veniam";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "odit";
                key = "voluptate";
                names = new String[]{{
                    add("exercitationem"),
                    add("beatae"),
                    add("cupiditate"),
                }};
                oauthToken = "cupiditate";
                objectId = "ex";
                objectType = DfareportingDynamicTargetingKeysListObjectTypeEnum.OBJECT_CREATIVE;
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "expedita";
                uploadProtocol = "modi";
            }};            

            DfareportingDynamicTargetingKeysListResponse res = sdk.dynamicTargetingKeys.dfareportingDynamicTargetingKeysList(req, new DfareportingDynamicTargetingKeysListSecurity("expedita", "quaerat") {{
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
