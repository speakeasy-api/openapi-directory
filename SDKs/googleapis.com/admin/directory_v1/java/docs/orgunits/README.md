# orgunits

### Available Operations

* [directoryOrgunitsDelete](#directoryorgunitsdelete) - Removes an organizational unit.
* [directoryOrgunitsGet](#directoryorgunitsget) - Retrieves an organizational unit.
* [directoryOrgunitsInsert](#directoryorgunitsinsert) - Adds an organizational unit.
* [directoryOrgunitsList](#directoryorgunitslist) - Retrieves a list of all organizational units for an account.
* [directoryOrgunitsPatch](#directoryorgunitspatch) - Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)
* [directoryOrgunitsUpdate](#directoryorgunitsupdate) - Updates an organizational unit.

## directoryOrgunitsDelete

Removes an organizational unit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryOrgunitsDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryOrgunitsDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryOrgunitsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryOrgunitsDeleteRequest req = new DirectoryOrgunitsDeleteRequest("minus", "sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "et";
                fields = "facilis";
                key = "amet";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "alias";
                uploadProtocol = "rem";
            }};            

            DirectoryOrgunitsDeleteResponse res = sdk.orgunits.directoryOrgunitsDelete(req, new DirectoryOrgunitsDeleteSecurity("aut", "quos") {{
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

## directoryOrgunitsGet

Retrieves an organizational unit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryOrgunitsGetRequest;
import org.openapis.openapi.models.operations.DirectoryOrgunitsGetResponse;
import org.openapis.openapi.models.operations.DirectoryOrgunitsGetSecurity;
import org.openapis.openapi.models.operations.DirectoryOrgunitsGetSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryOrgunitsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryOrgunitsGetRequest req = new DirectoryOrgunitsGetRequest("laudantium", "repellendus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "delectus";
                key = "mollitia";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "sed";
                uploadProtocol = "voluptatem";
            }};            

            DirectoryOrgunitsGetResponse res = sdk.orgunits.directoryOrgunitsGet(req, new DirectoryOrgunitsGetSecurity() {{
                option1 = new DirectoryOrgunitsGetSecurityOption1("alias", "eveniet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.orgUnit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryOrgunitsInsert

Adds an organizational unit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryOrgunitsInsertRequest;
import org.openapis.openapi.models.operations.DirectoryOrgunitsInsertResponse;
import org.openapis.openapi.models.operations.DirectoryOrgunitsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrgUnit;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryOrgunitsInsertRequest req = new DirectoryOrgunitsInsertRequest("hic") {{
                dollarXgafv = XgafvEnum.ONE;
                orgUnit = new OrgUnit() {{
                    blockInheritance = false;
                    description = "incidunt";
                    etag = "qui";
                    kind = "qui";
                    name = "Mrs. Kerry Cassin";
                    orgUnitId = "optio";
                    orgUnitPath = "voluptatibus";
                    parentOrgUnitId = "molestias";
                    parentOrgUnitPath = "officia";
                }};;
                accessToken = "libero";
                alt = AltEnum.MEDIA;
                callback = "sequi";
                fields = "aliquid";
                key = "ea";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "ducimus";
                uploadType = "odit";
                uploadProtocol = "velit";
            }};            

            DirectoryOrgunitsInsertResponse res = sdk.orgunits.directoryOrgunitsInsert(req, new DirectoryOrgunitsInsertSecurity("reiciendis", "repellat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orgUnit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryOrgunitsList

Retrieves a list of all organizational units for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryOrgunitsListRequest;
import org.openapis.openapi.models.operations.DirectoryOrgunitsListResponse;
import org.openapis.openapi.models.operations.DirectoryOrgunitsListSecurity;
import org.openapis.openapi.models.operations.DirectoryOrgunitsListSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryOrgunitsListSecurityOption2;
import org.openapis.openapi.models.operations.DirectoryOrgunitsListTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryOrgunitsListRequest req = new DirectoryOrgunitsListRequest("nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "natus";
                alt = AltEnum.PROTO;
                callback = "doloremque";
                fields = "nisi";
                key = "rerum";
                oauthToken = "recusandae";
                orgUnitPath = "voluptates";
                prettyPrint = false;
                quotaUser = "non";
                type = DirectoryOrgunitsListTypeEnum.CHILDREN;
                uploadType = "quia";
                uploadProtocol = "ullam";
            }};            

            DirectoryOrgunitsListResponse res = sdk.orgunits.directoryOrgunitsList(req, new DirectoryOrgunitsListSecurity() {{
                option1 = new DirectoryOrgunitsListSecurityOption1("quisquam", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.orgUnits != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryOrgunitsPatch

Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryOrgunitsPatchRequest;
import org.openapis.openapi.models.operations.DirectoryOrgunitsPatchResponse;
import org.openapis.openapi.models.operations.DirectoryOrgunitsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrgUnit;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryOrgunitsPatchRequest req = new DirectoryOrgunitsPatchRequest("voluptatibus", "eligendi") {{
                dollarXgafv = XgafvEnum.ONE;
                orgUnit = new OrgUnit() {{
                    blockInheritance = false;
                    description = "officiis";
                    etag = "architecto";
                    kind = "architecto";
                    name = "Miss Marianne Leffler";
                    orgUnitId = "a";
                    orgUnitPath = "iste";
                    parentOrgUnitId = "dicta";
                    parentOrgUnitPath = "quos";
                }};;
                accessToken = "ullam";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "itaque";
                key = "maxime";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "assumenda";
                uploadProtocol = "vero";
            }};            

            DirectoryOrgunitsPatchResponse res = sdk.orgunits.directoryOrgunitsPatch(req, new DirectoryOrgunitsPatchSecurity("doloribus", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orgUnit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryOrgunitsUpdate

Updates an organizational unit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryOrgunitsUpdateRequest;
import org.openapis.openapi.models.operations.DirectoryOrgunitsUpdateResponse;
import org.openapis.openapi.models.operations.DirectoryOrgunitsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrgUnit;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryOrgunitsUpdateRequest req = new DirectoryOrgunitsUpdateRequest("porro", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                orgUnit = new OrgUnit() {{
                    blockInheritance = false;
                    description = "reiciendis";
                    etag = "ab";
                    kind = "sint";
                    name = "Joy Kessler";
                    orgUnitId = "debitis";
                    orgUnitPath = "vel";
                    parentOrgUnitId = "neque";
                    parentOrgUnitPath = "corporis";
                }};;
                accessToken = "voluptas";
                alt = AltEnum.JSON;
                callback = "officia";
                fields = "reprehenderit";
                key = "distinctio";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "rem";
                uploadProtocol = "maiores";
            }};            

            DirectoryOrgunitsUpdateResponse res = sdk.orgunits.directoryOrgunitsUpdate(req, new DirectoryOrgunitsUpdateSecurity("accusantium", "veniam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orgUnit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
