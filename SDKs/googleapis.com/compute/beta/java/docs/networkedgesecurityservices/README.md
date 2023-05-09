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

            ComputeNetworkEdgeSecurityServicesAggregatedListRequest req = new ComputeNetworkEdgeSecurityServicesAggregatedListRequest("neque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "amet";
                alt = AltEnum.JSON;
                callback = "aliquam";
                fields = "aperiam";
                filter = "repellendus";
                includeAllScopes = false;
                key = "deleniti";
                maxResults = 456378L;
                oauthToken = "iusto";
                orderBy = "explicabo";
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "ipsam";
                returnPartialSuccess = false;
                uploadType = "consectetur";
                uploadProtocol = "ad";
                userIp = "itaque";
            }};            

            ComputeNetworkEdgeSecurityServicesAggregatedListResponse res = sdk.networkEdgeSecurityServices.computeNetworkEdgeSecurityServicesAggregatedList(req, new ComputeNetworkEdgeSecurityServicesAggregatedListSecurity() {{
                option1 = new ComputeNetworkEdgeSecurityServicesAggregatedListSecurityOption1("illo", "possimus") {{
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

            ComputeNetworkEdgeSecurityServicesDeleteRequest req = new ComputeNetworkEdgeSecurityServicesDeleteRequest("possimus", "ea", "tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "non";
                key = "quis";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "earum";
                requestId = "natus";
                uploadType = "blanditiis";
                uploadProtocol = "sequi";
                userIp = "vitae";
            }};            

            ComputeNetworkEdgeSecurityServicesDeleteResponse res = sdk.networkEdgeSecurityServices.computeNetworkEdgeSecurityServicesDelete(req, new ComputeNetworkEdgeSecurityServicesDeleteSecurity() {{
                option1 = new ComputeNetworkEdgeSecurityServicesDeleteSecurityOption1("accusamus", "molestiae") {{
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

            ComputeNetworkEdgeSecurityServicesGetRequest req = new ComputeNetworkEdgeSecurityServicesGetRequest("omnis", "corporis", "tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "debitis";
                alt = AltEnum.MEDIA;
                callback = "ducimus";
                fields = "voluptatibus";
                key = "enim";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "nam";
                uploadProtocol = "delectus";
                userIp = "quia";
            }};            

            ComputeNetworkEdgeSecurityServicesGetResponse res = sdk.networkEdgeSecurityServices.computeNetworkEdgeSecurityServicesGet(req, new ComputeNetworkEdgeSecurityServicesGetSecurity() {{
                option1 = new ComputeNetworkEdgeSecurityServicesGetSecurityOption1("pariatur", "magni") {{
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

            ComputeNetworkEdgeSecurityServicesInsertRequest req = new ComputeNetworkEdgeSecurityServicesInsertRequest("tempore", "dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                networkEdgeSecurityService = new NetworkEdgeSecurityService() {{
                    creationTimestamp = "aut";
                    description = "cupiditate";
                    fingerprint = "odio";
                    id = "earum";
                    kind = "reiciendis";
                    name = "Alexander Grimes";
                    region = "quibusdam";
                    securityPolicy = "reiciendis";
                    selfLink = "earum";
                    selfLinkWithId = "incidunt";
                }};;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "quibusdam";
                key = "inventore";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "enim";
                requestId = "perferendis";
                uploadType = "soluta";
                uploadProtocol = "tenetur";
                userIp = "ipsam";
                validateOnly = false;
            }};            

            ComputeNetworkEdgeSecurityServicesInsertResponse res = sdk.networkEdgeSecurityServices.computeNetworkEdgeSecurityServicesInsert(req, new ComputeNetworkEdgeSecurityServicesInsertSecurity() {{
                option1 = new ComputeNetworkEdgeSecurityServicesInsertSecurityOption1("dolorum", "ipsa") {{
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

            ComputeNetworkEdgeSecurityServicesPatchRequest req = new ComputeNetworkEdgeSecurityServicesPatchRequest("minus", "soluta", "impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                networkEdgeSecurityService1 = new NetworkEdgeSecurityService() {{
                    creationTimestamp = "facilis";
                    description = "quam";
                    fingerprint = "blanditiis";
                    id = "commodi";
                    kind = "eaque";
                    name = "Jan Von";
                    region = "nobis";
                    securityPolicy = "laboriosam";
                    selfLink = "non";
                    selfLinkWithId = "corporis";
                }};;
                accessToken = "ab";
                alt = AltEnum.JSON;
                callback = "eos";
                fields = "repellendus";
                key = "ipsam";
                oauthToken = "amet";
                paths = new String[]{{
                    add("quos"),
                }};
                prettyPrint = false;
                quotaUser = "voluptas";
                requestId = "porro";
                updateMask = "illo";
                uploadType = "sit";
                uploadProtocol = "culpa";
                userIp = "blanditiis";
            }};            

            ComputeNetworkEdgeSecurityServicesPatchResponse res = sdk.networkEdgeSecurityServices.computeNetworkEdgeSecurityServicesPatch(req, new ComputeNetworkEdgeSecurityServicesPatchSecurity() {{
                option1 = new ComputeNetworkEdgeSecurityServicesPatchSecurityOption1("quaerat", "ex") {{
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
