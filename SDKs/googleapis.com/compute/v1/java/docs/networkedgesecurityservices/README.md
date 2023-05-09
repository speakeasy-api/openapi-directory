# networkEdgeSecurityServices

### Available Operations

* [computeNetworkEdgeSecurityServicesAggregatedList](#computenetworkedgesecurityservicesaggregatedlist) - Retrieves the list of all NetworkEdgeSecurityService resources available to the specified project.
* [computeNetworkEdgeSecurityServicesDelete](#computenetworkedgesecurityservicesdelete) - Deletes the specified service.
* [computeNetworkEdgeSecurityServicesGet](#computenetworkedgesecurityservicesget) - Gets a specified NetworkEdgeSecurityService.
* [computeNetworkEdgeSecurityServicesInsert](#computenetworkedgesecurityservicesinsert) - Creates a new service in the specified project using the data included in the request.
* [computeNetworkEdgeSecurityServicesPatch](#computenetworkedgesecurityservicespatch) - Patches the specified policy with the data included in the request.

## computeNetworkEdgeSecurityServicesAggregatedList

Retrieves the list of all NetworkEdgeSecurityService resources available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkEdgeSecurityServicesAggregatedListRequest req = new ComputeNetworkEdgeSecurityServicesAggregatedListRequest("doloremque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eum";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "autem";
                filter = "id";
                includeAllScopes = false;
                key = "fugiat";
                maxResults = 389932L;
                oauthToken = "necessitatibus";
                orderBy = "amet";
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "quasi";
                returnPartialSuccess = false;
                uploadType = "pariatur";
                uploadProtocol = "excepturi";
                userIp = "fugiat";
            }};            

            ComputeNetworkEdgeSecurityServicesAggregatedListResponse res = sdk.networkEdgeSecurityServices.computeNetworkEdgeSecurityServicesAggregatedList(req, new ComputeNetworkEdgeSecurityServicesAggregatedListSecurity() {{
                option1 = new ComputeNetworkEdgeSecurityServicesAggregatedListSecurityOption1("ipsum", "libero") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.networkEdgeSecurityServiceAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworkEdgeSecurityServicesDelete

Deletes the specified service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkEdgeSecurityServicesDeleteRequest req = new ComputeNetworkEdgeSecurityServicesDeleteRequest("voluptas", "aliquid", "perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "dicta";
                key = "sunt";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "id";
                requestId = "ab";
                uploadType = "nulla";
                uploadProtocol = "ipsam";
                userIp = "at";
            }};            

            ComputeNetworkEdgeSecurityServicesDeleteResponse res = sdk.networkEdgeSecurityServices.computeNetworkEdgeSecurityServicesDelete(req, new ComputeNetworkEdgeSecurityServicesDeleteSecurity() {{
                option1 = new ComputeNetworkEdgeSecurityServicesDeleteSecurityOption1("magni", "quia") {{
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

## computeNetworkEdgeSecurityServicesGet

Gets a specified NetworkEdgeSecurityService.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesGetRequest;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesGetResponse;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesGetSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkEdgeSecurityServicesGetRequest req = new ComputeNetworkEdgeSecurityServicesGetRequest("modi", "nihil", "assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perspiciatis";
                alt = AltEnum.PROTO;
                callback = "dolorem";
                fields = "pariatur";
                key = "labore";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "ducimus";
                uploadProtocol = "eaque";
                userIp = "debitis";
            }};            

            ComputeNetworkEdgeSecurityServicesGetResponse res = sdk.networkEdgeSecurityServices.computeNetworkEdgeSecurityServicesGet(req, new ComputeNetworkEdgeSecurityServicesGetSecurity() {{
                option1 = new ComputeNetworkEdgeSecurityServicesGetSecurityOption1("iusto", "eum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.networkEdgeSecurityService != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworkEdgeSecurityServicesInsert

Creates a new service in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesInsertRequest;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesInsertResponse;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworkEdgeSecurityService;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkEdgeSecurityServicesInsertRequest req = new ComputeNetworkEdgeSecurityServicesInsertRequest("quos", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                networkEdgeSecurityService = new NetworkEdgeSecurityService() {{
                    creationTimestamp = "vel";
                    description = "nobis";
                    fingerprint = "facilis";
                    id = "sequi";
                    kind = "iste";
                    name = "Ron Lemke";
                    region = "perspiciatis";
                    securityPolicy = "rem";
                    selfLink = "vero";
                    selfLinkWithId = "tempore";
                }};;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "expedita";
                fields = "cum";
                key = "reiciendis";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "ab";
                requestId = "dolore";
                uploadType = "ratione";
                uploadProtocol = "dolor";
                userIp = "enim";
                validateOnly = false;
            }};            

            ComputeNetworkEdgeSecurityServicesInsertResponse res = sdk.networkEdgeSecurityServices.computeNetworkEdgeSecurityServicesInsert(req, new ComputeNetworkEdgeSecurityServicesInsertSecurity() {{
                option1 = new ComputeNetworkEdgeSecurityServicesInsertSecurityOption1("ex", "tenetur") {{
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

## computeNetworkEdgeSecurityServicesPatch

Patches the specified policy with the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesPatchRequest;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesPatchResponse;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkEdgeSecurityServicesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworkEdgeSecurityService;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkEdgeSecurityServicesPatchRequest req = new ComputeNetworkEdgeSecurityServicesPatchRequest("aliquid", "amet", "ut") {{
                dollarXgafv = XgafvEnum.TWO;
                networkEdgeSecurityService1 = new NetworkEdgeSecurityService() {{
                    creationTimestamp = "id";
                    description = "dicta";
                    fingerprint = "voluptas";
                    id = "tempora";
                    kind = "explicabo";
                    name = "Shelly Quitzon Sr.";
                    region = "eligendi";
                    securityPolicy = "recusandae";
                    selfLink = "aliquam";
                    selfLinkWithId = "ex";
                }};;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                callback = "nemo";
                fields = "veritatis";
                key = "vel";
                oauthToken = "enim";
                paths = new String[]{{
                    add("facilis"),
                }};
                prettyPrint = false;
                quotaUser = "beatae";
                requestId = "corporis";
                updateMask = "atque";
                uploadType = "optio";
                uploadProtocol = "culpa";
                userIp = "excepturi";
            }};            

            ComputeNetworkEdgeSecurityServicesPatchResponse res = sdk.networkEdgeSecurityServices.computeNetworkEdgeSecurityServicesPatch(req, new ComputeNetworkEdgeSecurityServicesPatchSecurity() {{
                option1 = new ComputeNetworkEdgeSecurityServicesPatchSecurityOption1("et", "non") {{
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
