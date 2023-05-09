# databases

### Available Operations

* [sqlDatabasesDelete](#sqldatabasesdelete) - Deletes a database from a Cloud SQL instance.
* [sqlDatabasesGet](#sqldatabasesget) - Retrieves a resource containing information about a database inside a Cloud SQL instance.
* [sqlDatabasesInsert](#sqldatabasesinsert) - Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation.
* [sqlDatabasesList](#sqldatabaseslist) - Lists databases in the specified Cloud SQL instance.
* [sqlDatabasesPatch](#sqldatabasespatch) - Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
* [sqlDatabasesUpdate](#sqldatabasesupdate) - Updates a resource containing information about a database inside a Cloud SQL instance.

## sqlDatabasesDelete

Deletes a database from a Cloud SQL instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlDatabasesDeleteRequest;
import org.openapis.openapi.models.operations.SqlDatabasesDeleteResponse;
import org.openapis.openapi.models.operations.SqlDatabasesDeleteSecurity;
import org.openapis.openapi.models.operations.SqlDatabasesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.SqlDatabasesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlDatabasesDeleteRequest req = new SqlDatabasesDeleteRequest("tenetur", "ipsam", "id") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "temporibus";
                key = "laborum";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "voluptatibus";
                uploadProtocol = "vero";
            }};            

            SqlDatabasesDeleteResponse res = sdk.databases.sqlDatabasesDelete(req, new SqlDatabasesDeleteSecurity() {{
                option1 = new SqlDatabasesDeleteSecurityOption1("nihil", "praesentium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlDatabasesGet

Retrieves a resource containing information about a database inside a Cloud SQL instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlDatabasesGetRequest;
import org.openapis.openapi.models.operations.SqlDatabasesGetResponse;
import org.openapis.openapi.models.operations.SqlDatabasesGetSecurity;
import org.openapis.openapi.models.operations.SqlDatabasesGetSecurityOption1;
import org.openapis.openapi.models.operations.SqlDatabasesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlDatabasesGetRequest req = new SqlDatabasesGetRequest("voluptatibus", "ipsa", "omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "reprehenderit";
                key = "ut";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "corporis";
                uploadProtocol = "dolore";
            }};            

            SqlDatabasesGetResponse res = sdk.databases.sqlDatabasesGet(req, new SqlDatabasesGetSecurity() {{
                option1 = new SqlDatabasesGetSecurityOption1("iusto", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.database != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlDatabasesInsert

Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlDatabasesInsertRequest;
import org.openapis.openapi.models.operations.SqlDatabasesInsertResponse;
import org.openapis.openapi.models.operations.SqlDatabasesInsertSecurity;
import org.openapis.openapi.models.operations.SqlDatabasesInsertSecurityOption1;
import org.openapis.openapi.models.operations.SqlDatabasesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Database;
import org.openapis.openapi.models.shared.SqlServerDatabaseDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlDatabasesInsertRequest req = new SqlDatabasesInsertRequest("harum", "enim") {{
                dollarXgafv = XgafvEnum.TWO;
                database = new Database() {{
                    charset = "commodi";
                    collation = "repudiandae";
                    etag = "quae";
                    instance = "ipsum";
                    kind = "quidem";
                    name = "Andy Streich";
                    project = "rem";
                    selfLink = "voluptates";
                    sqlserverDatabaseDetails = new SqlServerDatabaseDetails() {{
                        compatibilityLevel = 93940;
                        recoveryModel = "repudiandae";
                    }};;
                }};;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "incidunt";
                key = "enim";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "quibusdam";
                uploadProtocol = "explicabo";
            }};            

            SqlDatabasesInsertResponse res = sdk.databases.sqlDatabasesInsert(req, new SqlDatabasesInsertSecurity() {{
                option1 = new SqlDatabasesInsertSecurityOption1("deserunt", "distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlDatabasesList

Lists databases in the specified Cloud SQL instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlDatabasesListRequest;
import org.openapis.openapi.models.operations.SqlDatabasesListResponse;
import org.openapis.openapi.models.operations.SqlDatabasesListSecurity;
import org.openapis.openapi.models.operations.SqlDatabasesListSecurityOption1;
import org.openapis.openapi.models.operations.SqlDatabasesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlDatabasesListRequest req = new SqlDatabasesListRequest("quibusdam", "labore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "qui";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "quos";
                key = "perferendis";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "ipsam";
                uploadProtocol = "alias";
            }};            

            SqlDatabasesListResponse res = sdk.databases.sqlDatabasesList(req, new SqlDatabasesListSecurity() {{
                option1 = new SqlDatabasesListSecurityOption1("fugit", "dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.databasesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlDatabasesPatch

Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlDatabasesPatchRequest;
import org.openapis.openapi.models.operations.SqlDatabasesPatchResponse;
import org.openapis.openapi.models.operations.SqlDatabasesPatchSecurity;
import org.openapis.openapi.models.operations.SqlDatabasesPatchSecurityOption1;
import org.openapis.openapi.models.operations.SqlDatabasesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Database;
import org.openapis.openapi.models.shared.SqlServerDatabaseDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlDatabasesPatchRequest req = new SqlDatabasesPatchRequest("excepturi", "tempora", "facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                database1 = new Database() {{
                    charset = "labore";
                    collation = "delectus";
                    etag = "eum";
                    instance = "non";
                    kind = "eligendi";
                    name = "Gilbert Medhurst";
                    project = "officia";
                    selfLink = "dolor";
                    sqlserverDatabaseDetails = new SqlServerDatabaseDetails() {{
                        compatibilityLevel = 891555;
                        recoveryModel = "a";
                    }};;
                }};;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "illum";
                key = "maiores";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "magnam";
                uploadProtocol = "cumque";
            }};            

            SqlDatabasesPatchResponse res = sdk.databases.sqlDatabasesPatch(req, new SqlDatabasesPatchSecurity() {{
                option1 = new SqlDatabasesPatchSecurityOption1("facere", "ea") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlDatabasesUpdate

Updates a resource containing information about a database inside a Cloud SQL instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlDatabasesUpdateRequest;
import org.openapis.openapi.models.operations.SqlDatabasesUpdateResponse;
import org.openapis.openapi.models.operations.SqlDatabasesUpdateSecurity;
import org.openapis.openapi.models.operations.SqlDatabasesUpdateSecurityOption1;
import org.openapis.openapi.models.operations.SqlDatabasesUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Database;
import org.openapis.openapi.models.shared.SqlServerDatabaseDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlDatabasesUpdateRequest req = new SqlDatabasesUpdateRequest("aliquid", "laborum", "accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                database1 = new Database() {{
                    charset = "occaecati";
                    collation = "enim";
                    etag = "accusamus";
                    instance = "delectus";
                    kind = "quidem";
                    name = "Marco Olson";
                    project = "sapiente";
                    selfLink = "amet";
                    sqlserverDatabaseDetails = new SqlServerDatabaseDetails() {{
                        compatibilityLevel = 643990;
                        recoveryModel = "nisi";
                    }};;
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "molestiae";
                key = "perferendis";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "distinctio";
                uploadProtocol = "id";
            }};            

            SqlDatabasesUpdateResponse res = sdk.databases.sqlDatabasesUpdate(req, new SqlDatabasesUpdateSecurity() {{
                option1 = new SqlDatabasesUpdateSecurityOption1("labore", "labore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
