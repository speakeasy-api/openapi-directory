# schemas

### Available Operations

* [directorySchemasDelete](#directoryschemasdelete) - Deletes a schema.
* [directorySchemasGet](#directoryschemasget) - Retrieves a schema.
* [directorySchemasInsert](#directoryschemasinsert) - Creates a schema.
* [directorySchemasList](#directoryschemaslist) - Retrieves all schemas for a customer.
* [directorySchemasPatch](#directoryschemaspatch) - Patches a schema.
* [directorySchemasUpdate](#directoryschemasupdate) - Updates a schema.

## directorySchemasDelete

Deletes a schema.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectorySchemasDeleteRequest;
import org.openapis.openapi.models.operations.DirectorySchemasDeleteResponse;
import org.openapis.openapi.models.operations.DirectorySchemasDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectorySchemasDeleteRequest req = new DirectorySchemasDeleteRequest("magnam", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "optio";
                alt = AltEnum.PROTO;
                callback = "ex";
                fields = "repellat";
                key = "quae";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "hic";
                uploadProtocol = "excepturi";
            }};            

            DirectorySchemasDeleteResponse res = sdk.schemas.directorySchemasDelete(req, new DirectorySchemasDeleteSecurity("aliquid", "sed") {{
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

## directorySchemasGet

Retrieves a schema.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectorySchemasGetRequest;
import org.openapis.openapi.models.operations.DirectorySchemasGetResponse;
import org.openapis.openapi.models.operations.DirectorySchemasGetSecurity;
import org.openapis.openapi.models.operations.DirectorySchemasGetSecurityOption1;
import org.openapis.openapi.models.operations.DirectorySchemasGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectorySchemasGetRequest req = new DirectorySchemasGetRequest("beatae", "similique") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "animi";
                alt = AltEnum.JSON;
                callback = "tenetur";
                fields = "dignissimos";
                key = "esse";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "esse";
                uploadProtocol = "eveniet";
            }};            

            DirectorySchemasGetResponse res = sdk.schemas.directorySchemasGet(req, new DirectorySchemasGetSecurity() {{
                option1 = new DirectorySchemasGetSecurityOption1("earum", "velit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.schema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directorySchemasInsert

Creates a schema.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectorySchemasInsertRequest;
import org.openapis.openapi.models.operations.DirectorySchemasInsertResponse;
import org.openapis.openapi.models.operations.DirectorySchemasInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Schema;
import org.openapis.openapi.models.shared.SchemaFieldSpec;
import org.openapis.openapi.models.shared.SchemaFieldSpecNumericIndexingSpec;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectorySchemasInsertRequest req = new DirectorySchemasInsertRequest("officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                schema = new Schema() {{
                    displayName = "rerum";
                    etag = "itaque";
                    fields = new org.openapis.openapi.models.shared.SchemaFieldSpec[]{{
                        add(new SchemaFieldSpec() {{
                            displayName = "ipsam";
                            etag = "explicabo";
                            fieldId = "impedit";
                            fieldName = "aliquid";
                            fieldType = "quis";
                            indexed = false;
                            kind = "facilis";
                            multiValued = false;
                            numericIndexingSpec = new SchemaFieldSpecNumericIndexingSpec() {{
                                maxValue = 2181.28;
                                minValue = 2848.85;
                            }};
                            readAccessType = "quaerat";
                        }}),
                        add(new SchemaFieldSpec() {{
                            displayName = "architecto";
                            etag = "praesentium";
                            fieldId = "eveniet";
                            fieldName = "dolor";
                            fieldType = "expedita";
                            indexed = false;
                            kind = "libero";
                            multiValued = false;
                            numericIndexingSpec = new SchemaFieldSpecNumericIndexingSpec() {{
                                maxValue = 6152.77;
                                minValue = 749.21;
                            }};
                            readAccessType = "minus";
                        }}),
                    }};
                    kind = "quos";
                    schemaId = "temporibus";
                    schemaName = "sint";
                }};;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "aperiam";
                key = "voluptates";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "quae";
                uploadProtocol = "omnis";
            }};            

            DirectorySchemasInsertResponse res = sdk.schemas.directorySchemasInsert(req, new DirectorySchemasInsertSecurity("illum", "rem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.schema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directorySchemasList

Retrieves all schemas for a customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectorySchemasListRequest;
import org.openapis.openapi.models.operations.DirectorySchemasListResponse;
import org.openapis.openapi.models.operations.DirectorySchemasListSecurity;
import org.openapis.openapi.models.operations.DirectorySchemasListSecurityOption1;
import org.openapis.openapi.models.operations.DirectorySchemasListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectorySchemasListRequest req = new DirectorySchemasListRequest("tenetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "modi";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "aliquam";
                key = "labore";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "saepe";
                uploadProtocol = "consequatur";
            }};            

            DirectorySchemasListResponse res = sdk.schemas.directorySchemasList(req, new DirectorySchemasListSecurity() {{
                option1 = new DirectorySchemasListSecurityOption1("esse", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.schemas != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directorySchemasPatch

Patches a schema.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectorySchemasPatchRequest;
import org.openapis.openapi.models.operations.DirectorySchemasPatchResponse;
import org.openapis.openapi.models.operations.DirectorySchemasPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Schema;
import org.openapis.openapi.models.shared.SchemaFieldSpec;
import org.openapis.openapi.models.shared.SchemaFieldSpecNumericIndexingSpec;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectorySchemasPatchRequest req = new DirectorySchemasPatchRequest("facere", "quisquam") {{
                dollarXgafv = XgafvEnum.TWO;
                schema = new Schema() {{
                    displayName = "aliquam";
                    etag = "dolorum";
                    fields = new org.openapis.openapi.models.shared.SchemaFieldSpec[]{{
                        add(new SchemaFieldSpec() {{
                            displayName = "ad";
                            etag = "reiciendis";
                            fieldId = "sequi";
                            fieldName = "porro";
                            fieldType = "laborum";
                            indexed = false;
                            kind = "nobis";
                            multiValued = false;
                            numericIndexingSpec = new SchemaFieldSpecNumericIndexingSpec() {{
                                maxValue = 8429.74;
                                minValue = 6076.24;
                            }};
                            readAccessType = "aut";
                        }}),
                        add(new SchemaFieldSpec() {{
                            displayName = "ipsam";
                            etag = "officia";
                            fieldId = "cupiditate";
                            fieldName = "reprehenderit";
                            fieldType = "quia";
                            indexed = false;
                            kind = "necessitatibus";
                            multiValued = false;
                            numericIndexingSpec = new SchemaFieldSpecNumericIndexingSpec() {{
                                maxValue = 377.64;
                                minValue = 3214.73;
                            }};
                            readAccessType = "nisi";
                        }}),
                        add(new SchemaFieldSpec() {{
                            displayName = "molestiae";
                            etag = "quia";
                            fieldId = "laudantium";
                            fieldName = "sed";
                            fieldType = "odit";
                            indexed = false;
                            kind = "iusto";
                            multiValued = false;
                            numericIndexingSpec = new SchemaFieldSpecNumericIndexingSpec() {{
                                maxValue = 7128.93;
                                minValue = 1769.35;
                            }};
                            readAccessType = "repellendus";
                        }}),
                    }};
                    kind = "nesciunt";
                    schemaId = "ipsa";
                    schemaName = "sint";
                }};;
                accessToken = "dolore";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "distinctio";
                key = "sapiente";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "aliquam";
                uploadProtocol = "delectus";
            }};            

            DirectorySchemasPatchResponse res = sdk.schemas.directorySchemasPatch(req, new DirectorySchemasPatchSecurity("culpa", "voluptatum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.schema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directorySchemasUpdate

Updates a schema.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectorySchemasUpdateRequest;
import org.openapis.openapi.models.operations.DirectorySchemasUpdateResponse;
import org.openapis.openapi.models.operations.DirectorySchemasUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Schema;
import org.openapis.openapi.models.shared.SchemaFieldSpec;
import org.openapis.openapi.models.shared.SchemaFieldSpecNumericIndexingSpec;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectorySchemasUpdateRequest req = new DirectorySchemasUpdateRequest("iusto", "quod") {{
                dollarXgafv = XgafvEnum.TWO;
                schema = new Schema() {{
                    displayName = "voluptas";
                    etag = "non";
                    fields = new org.openapis.openapi.models.shared.SchemaFieldSpec[]{{
                        add(new SchemaFieldSpec() {{
                            displayName = "laborum";
                            etag = "voluptas";
                            fieldId = "doloribus";
                            fieldName = "animi";
                            fieldType = "recusandae";
                            indexed = false;
                            kind = "corporis";
                            multiValued = false;
                            numericIndexingSpec = new SchemaFieldSpecNumericIndexingSpec() {{
                                maxValue = 2525.67;
                                minValue = 9003.68;
                            }};
                            readAccessType = "distinctio";
                        }}),
                        add(new SchemaFieldSpec() {{
                            displayName = "maiores";
                            etag = "laboriosam";
                            fieldId = "voluptatem";
                            fieldName = "optio";
                            fieldType = "sequi";
                            indexed = false;
                            kind = "sunt";
                            multiValued = false;
                            numericIndexingSpec = new SchemaFieldSpecNumericIndexingSpec() {{
                                maxValue = 1122.5;
                                minValue = 9730.96;
                            }};
                            readAccessType = "doloremque";
                        }}),
                    }};
                    kind = "sed";
                    schemaId = "amet";
                    schemaName = "rerum";
                }};;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "ratione";
                key = "dolor";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "reiciendis";
                uploadProtocol = "itaque";
            }};            

            DirectorySchemasUpdateResponse res = sdk.schemas.directorySchemasUpdate(req, new DirectorySchemasUpdateSecurity("vitae", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.schema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
