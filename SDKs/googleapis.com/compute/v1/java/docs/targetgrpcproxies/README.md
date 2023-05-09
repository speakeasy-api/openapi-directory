# targetGrpcProxies

### Available Operations

* [computeTargetGrpcProxiesDelete](#computetargetgrpcproxiesdelete) - Deletes the specified TargetGrpcProxy in the given scope
* [computeTargetGrpcProxiesGet](#computetargetgrpcproxiesget) - Returns the specified TargetGrpcProxy resource in the given scope.
* [computeTargetGrpcProxiesInsert](#computetargetgrpcproxiesinsert) - Creates a TargetGrpcProxy in the specified project in the given scope using the parameters that are included in the request.
* [computeTargetGrpcProxiesList](#computetargetgrpcproxieslist) - Lists the TargetGrpcProxies for a project in the given scope.
* [computeTargetGrpcProxiesPatch](#computetargetgrpcproxiespatch) - Patches the specified TargetGrpcProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

## computeTargetGrpcProxiesDelete

Deletes the specified TargetGrpcProxy in the given scope

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetGrpcProxiesDeleteRequest req = new ComputeTargetGrpcProxiesDeleteRequest("dignissimos", "itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.JSON;
                callback = "hic";
                fields = "fuga";
                key = "aut";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "nesciunt";
                requestId = "quis";
                uploadType = "blanditiis";
                uploadProtocol = "dignissimos";
                userIp = "illo";
            }};            

            ComputeTargetGrpcProxiesDeleteResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesDelete(req, new ComputeTargetGrpcProxiesDeleteSecurity() {{
                option1 = new ComputeTargetGrpcProxiesDeleteSecurityOption1("eius", "repellat") {{
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

## computeTargetGrpcProxiesGet

Returns the specified TargetGrpcProxy resource in the given scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesGetRequest;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesGetResponse;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesGetSecurity;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetGrpcProxiesGetRequest req = new ComputeTargetGrpcProxiesGetRequest("deserunt", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aperiam";
                alt = AltEnum.MEDIA;
                callback = "officiis";
                fields = "rerum";
                key = "ad";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "doloribus";
                uploadProtocol = "veniam";
                userIp = "eaque";
            }};            

            ComputeTargetGrpcProxiesGetResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesGet(req, new ComputeTargetGrpcProxiesGetSecurity() {{
                option1 = new ComputeTargetGrpcProxiesGetSecurityOption1("amet", "quis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetGrpcProxy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetGrpcProxiesInsert

Creates a TargetGrpcProxy in the specified project in the given scope using the parameters that are included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesInsertRequest;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesInsertResponse;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetGrpcProxy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetGrpcProxiesInsertRequest req = new ComputeTargetGrpcProxiesInsertRequest("labore") {{
                dollarXgafv = XgafvEnum.TWO;
                targetGrpcProxy = new TargetGrpcProxy() {{
                    creationTimestamp = "cupiditate";
                    description = "magnam";
                    fingerprint = "quas";
                    id = "autem";
                    kind = "voluptatum";
                    name = "Rebecca Keebler";
                    selfLink = "enim";
                    selfLinkWithId = "numquam";
                    urlMap = "voluptatum";
                    validateForProxyless = false;
                }};;
                accessToken = "natus";
                alt = AltEnum.MEDIA;
                callback = "ea";
                fields = "temporibus";
                key = "minima";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                requestId = "molestiae";
                uploadType = "quia";
                uploadProtocol = "deserunt";
                userIp = "porro";
            }};            

            ComputeTargetGrpcProxiesInsertResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesInsert(req, new ComputeTargetGrpcProxiesInsertSecurity() {{
                option1 = new ComputeTargetGrpcProxiesInsertSecurityOption1("iste", "sunt") {{
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

## computeTargetGrpcProxiesList

Lists the TargetGrpcProxies for a project in the given scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesListRequest;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesListResponse;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesListSecurity;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetGrpcProxiesListRequest req = new ComputeTargetGrpcProxiesListRequest("assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "quae";
                fields = "sapiente";
                filter = "tempora";
                key = "provident";
                maxResults = 921043L;
                oauthToken = "beatae";
                orderBy = "laudantium";
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "aspernatur";
                returnPartialSuccess = false;
                uploadType = "aliquam";
                uploadProtocol = "earum";
                userIp = "quibusdam";
            }};            

            ComputeTargetGrpcProxiesListResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesList(req, new ComputeTargetGrpcProxiesListSecurity() {{
                option1 = new ComputeTargetGrpcProxiesListSecurityOption1("perferendis", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetGrpcProxyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetGrpcProxiesPatch

Patches the specified TargetGrpcProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesPatchRequest;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesPatchResponse;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetGrpcProxiesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetGrpcProxy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetGrpcProxiesPatchRequest req = new ComputeTargetGrpcProxiesPatchRequest("aliquid", "consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                targetGrpcProxy1 = new TargetGrpcProxy() {{
                    creationTimestamp = "consectetur";
                    description = "quibusdam";
                    fingerprint = "similique";
                    id = "veniam";
                    kind = "blanditiis";
                    name = "Kerry Klocko";
                    selfLink = "est";
                    selfLinkWithId = "repellat";
                    urlMap = "illo";
                    validateForProxyless = false;
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "ipsam";
                fields = "eos";
                key = "natus";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "enim";
                requestId = "tempora";
                uploadType = "praesentium";
                uploadProtocol = "officiis";
                userIp = "nihil";
            }};            

            ComputeTargetGrpcProxiesPatchResponse res = sdk.targetGrpcProxies.computeTargetGrpcProxiesPatch(req, new ComputeTargetGrpcProxiesPatchSecurity() {{
                option1 = new ComputeTargetGrpcProxiesPatchSecurityOption1("libero", "fuga") {{
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
