# globalOperations

### Available Operations

* [computeGlobalOperationsAggregatedList](#computeglobaloperationsaggregatedlist) - Retrieves an aggregated list of all operations.
* [computeGlobalOperationsDelete](#computeglobaloperationsdelete) - Deletes the specified Operations resource.
* [computeGlobalOperationsGet](#computeglobaloperationsget) - Retrieves the specified Operations resource.
* [computeGlobalOperationsList](#computeglobaloperationslist) - Retrieves a list of Operation resources contained within the specified project.
* [computeGlobalOperationsWait](#computeglobaloperationswait) - Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

## computeGlobalOperationsAggregatedList

Retrieves an aggregated list of all operations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalOperationsAggregatedListRequest req = new ComputeGlobalOperationsAggregatedListRequest("veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "esse";
                alt = AltEnum.PROTO;
                callback = "aperiam";
                fields = "itaque";
                filter = "sed";
                includeAllScopes = false;
                key = "corporis";
                maxResults = 164004L;
                oauthToken = "odio";
                orderBy = "suscipit";
                pageToken = "quis";
                prettyPrint = false;
                quotaUser = "nobis";
                returnPartialSuccess = false;
                uploadType = "beatae";
                uploadProtocol = "repellendus";
                userIp = "ex";
            }};            

            ComputeGlobalOperationsAggregatedListResponse res = sdk.globalOperations.computeGlobalOperationsAggregatedList(req, new ComputeGlobalOperationsAggregatedListSecurity() {{
                option1 = new ComputeGlobalOperationsAggregatedListSecurityOption1("consequuntur", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operationAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeGlobalOperationsDelete

Deletes the specified Operations resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalOperationsDeleteRequest req = new ComputeGlobalOperationsDeleteRequest("nobis", "possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "optio";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "reiciendis";
                key = "consequatur";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "inventore";
                uploadProtocol = "laboriosam";
                userIp = "quod";
            }};            

            ComputeGlobalOperationsDeleteResponse res = sdk.globalOperations.computeGlobalOperationsDelete(req, new ComputeGlobalOperationsDeleteSecurity() {{
                option1 = new ComputeGlobalOperationsDeleteSecurityOption1("repudiandae", "consequuntur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeGlobalOperationsGet

Retrieves the specified Operations resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsGetRequest;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsGetResponse;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsGetSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalOperationsGetRequest req = new ComputeGlobalOperationsGetRequest("aspernatur", "sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "earum";
                fields = "consequuntur";
                key = "enim";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "accusantium";
                uploadProtocol = "nulla";
                userIp = "inventore";
            }};            

            ComputeGlobalOperationsGetResponse res = sdk.globalOperations.computeGlobalOperationsGet(req, new ComputeGlobalOperationsGetSecurity() {{
                option1 = new ComputeGlobalOperationsGetSecurityOption1("omnis", "quibusdam") {{
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

## computeGlobalOperationsList

Retrieves a list of Operation resources contained within the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsListRequest;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsListResponse;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsListSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalOperationsListRequest req = new ComputeGlobalOperationsListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sint";
                alt = AltEnum.PROTO;
                callback = "magnam";
                fields = "adipisci";
                filter = "natus";
                key = "necessitatibus";
                maxResults = 243580L;
                oauthToken = "sint";
                orderBy = "eos";
                pageToken = "nisi";
                prettyPrint = false;
                quotaUser = "commodi";
                returnPartialSuccess = false;
                uploadType = "impedit";
                uploadProtocol = "facilis";
                userIp = "temporibus";
            }};            

            ComputeGlobalOperationsListResponse res = sdk.globalOperations.computeGlobalOperationsList(req, new ComputeGlobalOperationsListSecurity() {{
                option1 = new ComputeGlobalOperationsListSecurityOption1("error", "quaerat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operationList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeGlobalOperationsWait

Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsWaitRequest;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsWaitResponse;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsWaitSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsWaitSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsWaitSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalOperationsWaitSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalOperationsWaitRequest req = new ComputeGlobalOperationsWaitRequest("delectus", "molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "consequuntur";
                key = "magnam";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "ratione";
                uploadProtocol = "nisi";
                userIp = "perspiciatis";
            }};            

            ComputeGlobalOperationsWaitResponse res = sdk.globalOperations.computeGlobalOperationsWait(req, new ComputeGlobalOperationsWaitSecurity() {{
                option1 = new ComputeGlobalOperationsWaitSecurityOption1("nostrum", "temporibus") {{
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
