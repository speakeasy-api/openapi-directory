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

            ComputeGlobalOperationsAggregatedListRequest req = new ComputeGlobalOperationsAggregatedListRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "velit";
                alt = AltEnum.JSON;
                callback = "rem";
                fields = "odit";
                filter = "libero";
                includeAllScopes = false;
                key = "error";
                maxResults = 278751L;
                oauthToken = "asperiores";
                orderBy = "eos";
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "distinctio";
                returnPartialSuccess = false;
                uploadType = "dicta";
                uploadProtocol = "earum";
                userIp = "possimus";
            }};            

            ComputeGlobalOperationsAggregatedListResponse res = sdk.globalOperations.computeGlobalOperationsAggregatedList(req, new ComputeGlobalOperationsAggregatedListSecurity() {{
                option1 = new ComputeGlobalOperationsAggregatedListSecurityOption1("nemo", "eum") {{
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

            ComputeGlobalOperationsDeleteRequest req = new ComputeGlobalOperationsDeleteRequest("iusto", "veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "unde";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "dolores";
                key = "commodi";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "eaque";
                uploadProtocol = "officia";
                userIp = "tempora";
            }};            

            ComputeGlobalOperationsDeleteResponse res = sdk.globalOperations.computeGlobalOperationsDelete(req, new ComputeGlobalOperationsDeleteSecurity() {{
                option1 = new ComputeGlobalOperationsDeleteSecurityOption1("eum", "molestiae") {{
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

            ComputeGlobalOperationsGetRequest req = new ComputeGlobalOperationsGetRequest("architecto", "aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "quisquam";
                key = "itaque";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "iste";
                uploadProtocol = "error";
                userIp = "dicta";
            }};            

            ComputeGlobalOperationsGetResponse res = sdk.globalOperations.computeGlobalOperationsGet(req, new ComputeGlobalOperationsGetSecurity() {{
                option1 = new ComputeGlobalOperationsGetSecurityOption1("nemo", "unde") {{
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

            ComputeGlobalOperationsListRequest req = new ComputeGlobalOperationsListRequest("numquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "ducimus";
                filter = "modi";
                key = "impedit";
                maxResults = 58606L;
                oauthToken = "dolores";
                orderBy = "ullam";
                pageToken = "sed";
                prettyPrint = false;
                quotaUser = "a";
                returnPartialSuccess = false;
                uploadType = "saepe";
                uploadProtocol = "dolor";
                userIp = "quidem";
            }};            

            ComputeGlobalOperationsListResponse res = sdk.globalOperations.computeGlobalOperationsList(req, new ComputeGlobalOperationsListSecurity() {{
                option1 = new ComputeGlobalOperationsListSecurityOption1("quaerat", "cum") {{
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

            ComputeGlobalOperationsWaitRequest req = new ComputeGlobalOperationsWaitRequest("dolore", "quibusdam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "atque";
                alt = AltEnum.PROTO;
                callback = "odio";
                fields = "reprehenderit";
                key = "quas";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "nam";
                uploadProtocol = "nisi";
                userIp = "officiis";
            }};            

            ComputeGlobalOperationsWaitResponse res = sdk.globalOperations.computeGlobalOperationsWait(req, new ComputeGlobalOperationsWaitSecurity() {{
                option1 = new ComputeGlobalOperationsWaitSecurityOption1("quasi", "fugiat") {{
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
