# tables

### Available Operations

* [area120tablesTablesList](#area120tablestableslist) - Lists tables for the user.
* [area120tablesTablesRowsBatchCreate](#area120tablestablesrowsbatchcreate) - Creates multiple rows.
* [area120tablesTablesRowsBatchDelete](#area120tablestablesrowsbatchdelete) - Deletes multiple rows.
* [area120tablesTablesRowsBatchUpdate](#area120tablestablesrowsbatchupdate) - Updates multiple rows.
* [area120tablesTablesRowsCreate](#area120tablestablesrowscreate) - Creates a row.
* [area120tablesTablesRowsDelete](#area120tablestablesrowsdelete) - Deletes a row.
* [area120tablesTablesRowsList](#area120tablestablesrowslist) - Lists rows in a table. Returns NOT_FOUND if the table does not exist.
* [area120tablesTablesRowsPatch](#area120tablestablesrowspatch) - Updates a row.

## area120tablesTablesList

Lists tables for the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Area120tablesTablesListRequest;
import org.openapis.openapi.models.operations.Area120tablesTablesListResponse;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurity;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption1;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption2;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption3;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption4;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption5;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Area120tablesTablesListRequest req = new Area120tablesTablesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "molestiae";
                key = "minus";
                oauthToken = "placeat";
                orderBy = "voluptatum";
                pageSize = 479977L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            Area120tablesTablesListResponse res = sdk.tables.area120tablesTablesList(req, new Area120tablesTablesListSecurity() {{
                option1 = new Area120tablesTablesListSecurityOption1("ab", "quis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTablesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## area120tablesTablesRowsBatchCreate

Creates multiple rows.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchCreateRequest;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchCreateResponse;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchCreateSecurity;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchCreateSecurityOption1;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchCreateSecurityOption2;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchCreateSecurityOption3;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchCreateSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchCreateRowsRequest;
import org.openapis.openapi.models.shared.CreateRowRequest;
import org.openapis.openapi.models.shared.CreateRowRequestViewEnum;
import org.openapis.openapi.models.shared.Row;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Area120tablesTablesRowsBatchCreateRequest req = new Area120tablesTablesRowsBatchCreateRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                batchCreateRowsRequest = new BatchCreateRowsRequest() {{
                    requests = new org.openapis.openapi.models.shared.CreateRowRequest[]{{
                        add(new CreateRowRequest() {{
                            parent = "ipsam";
                            row = new Row() {{
                                createTime = "repellendus";
                                name = "Cedric Connelly";
                                updateTime = "maiores";
                                values = new java.util.HashMap<String, Object>() {{
                                    put("quod", "quod");
                                    put("esse", "totam");
                                }};
                            }};
                            view = CreateRowRequestViewEnum.COLUMN_ID_VIEW;
                        }}),
                    }};
                }};;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "officia";
                key = "occaecati";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "hic";
                uploadProtocol = "optio";
            }};            

            Area120tablesTablesRowsBatchCreateResponse res = sdk.tables.area120tablesTablesRowsBatchCreate(req, new Area120tablesTablesRowsBatchCreateSecurity() {{
                option1 = new Area120tablesTablesRowsBatchCreateSecurityOption1("totam", "beatae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.batchCreateRowsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## area120tablesTablesRowsBatchDelete

Deletes multiple rows.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchDeleteRequest;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchDeleteResponse;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchDeleteSecurity;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchDeleteSecurityOption1;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchDeleteSecurityOption2;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchDeleteSecurityOption3;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchDeleteSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchDeleteRowsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Area120tablesTablesRowsBatchDeleteRequest req = new Area120tablesTablesRowsBatchDeleteRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                batchDeleteRowsRequest = new BatchDeleteRowsRequest() {{
                    names = new String[]{{
                        add("qui"),
                        add("impedit"),
                    }};
                }};;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "excepturi";
                key = "aspernatur";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "natus";
                uploadProtocol = "sed";
            }};            

            Area120tablesTablesRowsBatchDeleteResponse res = sdk.tables.area120tablesTablesRowsBatchDelete(req, new Area120tablesTablesRowsBatchDeleteSecurity() {{
                option1 = new Area120tablesTablesRowsBatchDeleteSecurityOption1("iste", "dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## area120tablesTablesRowsBatchUpdate

Updates multiple rows.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchUpdateRequest;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchUpdateResponse;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchUpdateSecurity;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchUpdateSecurityOption1;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchUpdateSecurityOption2;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchUpdateSecurityOption3;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsBatchUpdateSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchUpdateRowsRequest;
import org.openapis.openapi.models.shared.Row;
import org.openapis.openapi.models.shared.UpdateRowRequest;
import org.openapis.openapi.models.shared.UpdateRowRequestViewEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Area120tablesTablesRowsBatchUpdateRequest req = new Area120tablesTablesRowsBatchUpdateRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                batchUpdateRowsRequest = new BatchUpdateRowsRequest() {{
                    requests = new org.openapis.openapi.models.shared.UpdateRowRequest[]{{
                        add(new UpdateRowRequest() {{
                            row = new Row() {{
                                createTime = "saepe";
                                name = "Harvey Hessel";
                                updateTime = "saepe";
                                values = new java.util.HashMap<String, Object>() {{
                                    put("architecto", "ipsa");
                                    put("reiciendis", "est");
                                    put("mollitia", "laborum");
                                }};
                            }};
                            updateMask = "dolores";
                            view = UpdateRowRequestViewEnum.VIEW_UNSPECIFIED;
                        }}),
                        add(new UpdateRowRequest() {{
                            row = new Row() {{
                                createTime = "corporis";
                                name = "Della Halvorson";
                                updateTime = "minima";
                                values = new java.util.HashMap<String, Object>() {{
                                    put("accusantium", "iure");
                                    put("culpa", "doloribus");
                                    put("sapiente", "architecto");
                                }};
                            }};
                            updateMask = "mollitia";
                            view = UpdateRowRequestViewEnum.VIEW_UNSPECIFIED;
                        }}),
                        add(new UpdateRowRequest() {{
                            row = new Row() {{
                                createTime = "culpa";
                                name = "Jaime O'Hara";
                                updateTime = "commodi";
                                values = new java.util.HashMap<String, Object>() {{
                                    put("molestiae", "velit");
                                    put("error", "quia");
                                }};
                            }};
                            updateMask = "quis";
                            view = UpdateRowRequestViewEnum.VIEW_UNSPECIFIED;
                        }}),
                        add(new UpdateRowRequest() {{
                            row = new Row() {{
                                createTime = "laborum";
                                name = "Bill Conn";
                                updateTime = "tenetur";
                                values = new java.util.HashMap<String, Object>() {{
                                    put("id", "possimus");
                                    put("aut", "quasi");
                                }};
                            }};
                            updateMask = "error";
                            view = UpdateRowRequestViewEnum.COLUMN_ID_VIEW;
                        }}),
                    }};
                }};;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "voluptatibus";
                key = "vero";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "voluptatibus";
                uploadProtocol = "ipsa";
            }};            

            Area120tablesTablesRowsBatchUpdateResponse res = sdk.tables.area120tablesTablesRowsBatchUpdate(req, new Area120tablesTablesRowsBatchUpdateSecurity() {{
                option1 = new Area120tablesTablesRowsBatchUpdateSecurityOption1("omnis", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.batchUpdateRowsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## area120tablesTablesRowsCreate

Creates a row.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsCreateRequest;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsCreateResponse;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsCreateSecurity;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsCreateSecurityOption1;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsCreateSecurityOption2;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsCreateSecurityOption3;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsCreateSecurityOption4;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsCreateViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Row;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Area120tablesTablesRowsCreateRequest req = new Area120tablesTablesRowsCreateRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                row = new Row() {{
                    createTime = "doloremque";
                    name = "Mrs. April Wuckert";
                    updateTime = "iusto";
                    values = new java.util.HashMap<String, Object>() {{
                        put("harum", "enim");
                    }};
                }};;
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "quae";
                key = "ipsum";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "excepturi";
                uploadProtocol = "pariatur";
                view = Area120tablesTablesRowsCreateViewEnum.VIEW_UNSPECIFIED;
            }};            

            Area120tablesTablesRowsCreateResponse res = sdk.tables.area120tablesTablesRowsCreate(req, new Area120tablesTablesRowsCreateSecurity() {{
                option1 = new Area120tablesTablesRowsCreateSecurityOption1("praesentium", "rem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.row != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## area120tablesTablesRowsDelete

Deletes a row.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsDeleteRequest;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsDeleteResponse;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsDeleteSecurity;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsDeleteSecurityOption3;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsDeleteSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Area120tablesTablesRowsDeleteRequest req = new Area120tablesTablesRowsDeleteRequest("voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repudiandae";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "itaque";
                key = "incidunt";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "est";
                uploadProtocol = "quibusdam";
            }};            

            Area120tablesTablesRowsDeleteResponse res = sdk.tables.area120tablesTablesRowsDelete(req, new Area120tablesTablesRowsDeleteSecurity() {{
                option1 = new Area120tablesTablesRowsDeleteSecurityOption1("explicabo", "deserunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## area120tablesTablesRowsList

Lists rows in a table. Returns NOT_FOUND if the table does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsListRequest;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsListResponse;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsListSecurity;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsListSecurityOption1;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsListSecurityOption2;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsListSecurityOption3;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsListSecurityOption4;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsListSecurityOption5;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsListSecurityOption6;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Area120tablesTablesRowsListRequest req = new Area120tablesTablesRowsListRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "aliquid";
                filter = "cupiditate";
                key = "quos";
                oauthToken = "perferendis";
                orderBy = "magni";
                pageSize = 828940L;
                pageToken = "ipsam";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "fugit";
                uploadProtocol = "dolorum";
                view = Area120tablesTablesRowsListViewEnum.COLUMN_ID_VIEW;
            }};            

            Area120tablesTablesRowsListResponse res = sdk.tables.area120tablesTablesRowsList(req, new Area120tablesTablesRowsListSecurity() {{
                option1 = new Area120tablesTablesRowsListSecurityOption1("tempora", "facilis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listRowsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## area120tablesTablesRowsPatch

Updates a row.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsPatchRequest;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsPatchResponse;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsPatchSecurity;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsPatchSecurityOption1;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsPatchSecurityOption2;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsPatchSecurityOption3;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsPatchSecurityOption4;
import org.openapis.openapi.models.operations.Area120tablesTablesRowsPatchViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Row;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Area120tablesTablesRowsPatchRequest req = new Area120tablesTablesRowsPatchRequest("tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                row = new Row() {{
                    createTime = "delectus";
                    name = "Ethel Roob";
                    updateTime = "provident";
                    values = new java.util.HashMap<String, Object>() {{
                        put("sint", "officia");
                        put("dolor", "debitis");
                        put("a", "dolorum");
                        put("in", "in");
                    }};
                }};;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "rerum";
                fields = "dicta";
                key = "magnam";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "facere";
                updateMask = "ea";
                uploadType = "aliquid";
                uploadProtocol = "laborum";
                view = Area120tablesTablesRowsPatchViewEnum.COLUMN_ID_VIEW;
            }};            

            Area120tablesTablesRowsPatchResponse res = sdk.tables.area120tablesTablesRowsPatch(req, new Area120tablesTablesRowsPatchSecurity() {{
                option1 = new Area120tablesTablesRowsPatchSecurityOption1("non", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.row != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
