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
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "soluta";
                fields = "nam";
                filter = "iusto";
                includeAllScopes = false;
                key = "quasi";
                maxResults = 379806L;
                oauthToken = "consectetur";
                orderBy = "voluptas";
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "distinctio";
                returnPartialSuccess = false;
                uploadType = "error";
                uploadProtocol = "consectetur";
                userIp = "nesciunt";
            }};            

            ComputeNetworkEdgeSecurityServicesAggregatedListResponse res = sdk.networkEdgeSecurityServices.computeNetworkEdgeSecurityServicesAggregatedList(req, new ComputeNetworkEdgeSecurityServicesAggregatedListSecurity() {{
                option1 = new ComputeNetworkEdgeSecurityServicesAggregatedListSecurityOption1("autem", "ut") {{
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

            ComputeNetworkEdgeSecurityServicesDeleteRequest req = new ComputeNetworkEdgeSecurityServicesDeleteRequest("consequuntur", "tempora", "sint") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eius";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "repellendus";
                key = "omnis";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "saepe";
                requestId = "dignissimos";
                uploadType = "rerum";
                uploadProtocol = "voluptas";
                userIp = "similique";
            }};            

            ComputeNetworkEdgeSecurityServicesDeleteResponse res = sdk.networkEdgeSecurityServices.computeNetworkEdgeSecurityServicesDelete(req, new ComputeNetworkEdgeSecurityServicesDeleteSecurity() {{
                option1 = new ComputeNetworkEdgeSecurityServicesDeleteSecurityOption1("esse", "blanditiis") {{
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

            ComputeNetworkEdgeSecurityServicesGetRequest req = new ComputeNetworkEdgeSecurityServicesGetRequest("odit", "magni", "tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "eligendi";
                key = "harum";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "eius";
                uploadProtocol = "eum";
                userIp = "voluptatem";
            }};            

            ComputeNetworkEdgeSecurityServicesGetResponse res = sdk.networkEdgeSecurityServices.computeNetworkEdgeSecurityServicesGet(req, new ComputeNetworkEdgeSecurityServicesGetSecurity() {{
                option1 = new ComputeNetworkEdgeSecurityServicesGetSecurityOption1("minima", "quaerat") {{
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

            ComputeNetworkEdgeSecurityServicesInsertRequest req = new ComputeNetworkEdgeSecurityServicesInsertRequest("aut", "modi") {{
                dollarXgafv = XgafvEnum.TWO;
                networkEdgeSecurityService = new NetworkEdgeSecurityService() {{
                    creationTimestamp = "saepe";
                    description = "reprehenderit";
                    fingerprint = "nemo";
                    id = "corporis";
                    kind = "possimus";
                    name = "Dorothy Kuhlman";
                    region = "quaerat";
                    securityPolicy = "praesentium";
                    selfLink = "minima";
                    selfLinkWithId = "non";
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "vel";
                key = "eaque";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "corporis";
                requestId = "quibusdam";
                uploadType = "et";
                uploadProtocol = "incidunt";
                userIp = "incidunt";
                validateOnly = false;
            }};            

            ComputeNetworkEdgeSecurityServicesInsertResponse res = sdk.networkEdgeSecurityServices.computeNetworkEdgeSecurityServicesInsert(req, new ComputeNetworkEdgeSecurityServicesInsertSecurity() {{
                option1 = new ComputeNetworkEdgeSecurityServicesInsertSecurityOption1("minima", "eos") {{
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

            ComputeNetworkEdgeSecurityServicesPatchRequest req = new ComputeNetworkEdgeSecurityServicesPatchRequest("deserunt", "voluptatem", "repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                networkEdgeSecurityService1 = new NetworkEdgeSecurityService() {{
                    creationTimestamp = "amet";
                    description = "animi";
                    fingerprint = "dolor";
                    id = "harum";
                    kind = "possimus";
                    name = "Jermaine Simonis";
                    region = "aut";
                    securityPolicy = "voluptatem";
                    selfLink = "eum";
                    selfLinkWithId = "molestias";
                }};;
                accessToken = "atque";
                alt = AltEnum.PROTO;
                callback = "optio";
                fields = "iste";
                key = "id";
                oauthToken = "corporis";
                paths = new String[]{{
                    add("qui"),
                    add("maxime"),
                    add("officiis"),
                }};
                prettyPrint = false;
                quotaUser = "quo";
                requestId = "ex";
                updateMask = "molestiae";
                uploadType = "dolor";
                uploadProtocol = "beatae";
                userIp = "itaque";
            }};            

            ComputeNetworkEdgeSecurityServicesPatchResponse res = sdk.networkEdgeSecurityServices.computeNetworkEdgeSecurityServicesPatch(req, new ComputeNetworkEdgeSecurityServicesPatchSecurity() {{
                option1 = new ComputeNetworkEdgeSecurityServicesPatchSecurityOption1("facere", "beatae") {{
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
