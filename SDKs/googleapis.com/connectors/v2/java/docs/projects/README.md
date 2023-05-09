# projects

### Available Operations

* [connectorsProjectsLocationsConnectionsActionsExecute](#connectorsprojectslocationsconnectionsactionsexecute) - Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.
* [connectorsProjectsLocationsConnectionsActionsList](#connectorsprojectslocationsconnectionsactionslist) - Gets the schema of all the actions supported by the connector.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate](#connectorsprojectslocationsconnectionsentitytypesentitiescreate) - Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete](#connectorsprojectslocationsconnectionsentitytypesentitiesdelete) - Deletes an existing entity row matching the entity type and entity id specified in the request.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions](#connectorsprojectslocationsconnectionsentitytypesentitiesdeleteentitieswithconditions) - Deletes entities based on conditions specified in the request and not on entity id.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesGet](#connectorsprojectslocationsconnectionsentitytypesentitiesget) - Gets a single entity row matching the entity type and entity id specified in the request.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesList](#connectorsprojectslocationsconnectionsentitytypesentitieslist) - Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch](#connectorsprojectslocationsconnectionsentitytypesentitiespatch) - Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions](#connectorsprojectslocationsconnectionsentitytypesentitiesupdateentitieswithconditions) - Updates entities based on conditions specified in the request and not on entity id.
* [connectorsProjectsLocationsConnectionsEntityTypesList](#connectorsprojectslocationsconnectionsentitytypeslist) - Lists metadata related to all entity types present in the external system.
* [connectorsProjectsLocationsConnectionsExecuteSqlQuery](#connectorsprojectslocationsconnectionsexecutesqlquery) - Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.

## connectorsProjectsLocationsConnectionsActionsExecute

Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsExecuteRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsExecuteResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExecuteActionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsActionsExecuteRequest req = new ConnectorsProjectsLocationsConnectionsActionsExecuteRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                executeActionRequest = new ExecuteActionRequest() {{
                    parameters = new java.util.HashMap<String, Object>() {{
                        put("iusto", "excepturi");
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                    }};
                }};;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            ConnectorsProjectsLocationsConnectionsActionsExecuteResponse res = sdk.projects.connectorsProjectsLocationsConnectionsActionsExecute(req, new ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity("at", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.executeActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsConnectionsActionsList

Gets the schema of all the actions supported by the connector.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsListRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsListResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsActionsListRequest req = new ConnectorsProjectsLocationsConnectionsActionsListRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "totam";
                key = "porro";
                oauthToken = "dolorum";
                pageSize = 118274L;
                pageToken = "nam";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "occaecati";
                uploadProtocol = "fugit";
            }};            

            ConnectorsProjectsLocationsConnectionsActionsListResponse res = sdk.projects.connectorsProjectsLocationsConnectionsActionsList(req, new ConnectorsProjectsLocationsConnectionsActionsListSecurity("deleniti", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listActionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate

Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EntityInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest req = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest("optio") {{
                dollarXgafv = XgafvEnum.TWO;
                entityInput = new EntityInput() {{
                    fields = new java.util.HashMap<String, Object>() {{
                        put("commodi", "molestiae");
                    }};
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "cum";
                key = "esse";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "aspernatur";
                uploadProtocol = "perferendis";
            }};            

            ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateResponse res = sdk.projects.connectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate(req, new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateSecurity("ad", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.entity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete

Deletes an existing entity row matching the entity type and entity id specified in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest req = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "laboriosam";
                fields = "hic";
                key = "saepe";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "corporis";
                uploadProtocol = "iste";
            }};            

            ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteResponse res = sdk.projects.connectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete(req, new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteSecurity("iure", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## connectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions

Deletes entities based on conditions specified in the request and not on entity id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest req = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "est";
                conditions = "mollitia";
                fields = "laborum";
                key = "dolores";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "explicabo";
                uploadProtocol = "nobis";
            }};            

            ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsResponse res = sdk.projects.connectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions(req, new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsSecurity("enim", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## connectorsProjectsLocationsConnectionsEntityTypesEntitiesGet

Gets a single entity row matching the entity type and entity id specified in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetRequest req = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetRequest("nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "culpa";
                key = "doloribus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "mollitia";
                uploadProtocol = "dolorem";
            }};            

            ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetResponse res = sdk.projects.connectorsProjectsLocationsConnectionsEntityTypesEntitiesGet(req, new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetSecurity("culpa", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.entity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsConnectionsEntityTypesEntitiesList

Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListRequest req = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListRequest("repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "commodi";
                conditions = "quam";
                fields = "molestiae";
                key = "velit";
                oauthToken = "error";
                pageSize = 158969L;
                pageToken = "quis";
                prettyPrint = false;
                quotaUser = "vitae";
                sortBy = new String[]{{
                    add("animi"),
                    add("enim"),
                    add("odit"),
                }};
                uploadType = "quo";
                uploadProtocol = "sequi";
            }};            

            ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListResponse res = sdk.projects.connectorsProjectsLocationsConnectionsEntityTypesEntitiesList(req, new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListSecurity("tenetur", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch

Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EntityInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest req = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                entityInput = new EntityInput() {{
                    fields = new java.util.HashMap<String, Object>() {{
                        put("quasi", "error");
                    }};
                }};;
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "reiciendis";
                key = "voluptatibus";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "praesentium";
                uploadProtocol = "voluptatibus";
            }};            

            ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse res = sdk.projects.connectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch(req, new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity("ipsa", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.entity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions

Updates entities based on conditions specified in the request and not on entity id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EntityInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsRequest req = new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                entityInput = new EntityInput() {{
                    fields = new java.util.HashMap<String, Object>() {{
                        put("doloremque", "reprehenderit");
                    }};
                }};;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "dicta";
                conditions = "corporis";
                fields = "dolore";
                key = "iusto";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "enim";
                uploadProtocol = "accusamus";
            }};            

            ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsResponse res = sdk.projects.connectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions(req, new ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsSecurity("commodi", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateEntitiesWithConditionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsConnectionsEntityTypesList

Lists metadata related to all entity types present in the external system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesListRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesListResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsEntityTypesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsEntityTypesListRequest req = new ConnectorsProjectsLocationsConnectionsEntityTypesListRequest("quae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "pariatur";
                key = "modi";
                oauthToken = "praesentium";
                pageSize = 523248L;
                pageToken = "voluptates";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "repudiandae";
                uploadProtocol = "sint";
            }};            

            ConnectorsProjectsLocationsConnectionsEntityTypesListResponse res = sdk.projects.connectorsProjectsLocationsConnectionsEntityTypesList(req, new ConnectorsProjectsLocationsConnectionsEntityTypesListSecurity("veritatis", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listEntityTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectorsProjectsLocationsConnectionsExecuteSqlQuery

Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsExecuteSqlQueryRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsExecuteSqlQueryResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsExecuteSqlQuerySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExecuteSqlQueryRequest;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsExecuteSqlQueryRequest req = new ConnectorsProjectsLocationsConnectionsExecuteSqlQueryRequest("incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                executeSqlQueryRequest = new ExecuteSqlQueryRequest() {{
                    query = new Query() {{
                        query = "consequatur";
                    }};;
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "deserunt";
                key = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            ConnectorsProjectsLocationsConnectionsExecuteSqlQueryResponse res = sdk.projects.connectorsProjectsLocationsConnectionsExecuteSqlQuery(req, new ConnectorsProjectsLocationsConnectionsExecuteSqlQuerySecurity("aliquid", "cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.executeSqlQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
