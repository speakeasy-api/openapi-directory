# regionTargetTcpProxies

### Available Operations

* [computeRegionTargetTcpProxiesDelete](#computeregiontargettcpproxiesdelete) - Deletes the specified TargetTcpProxy resource.
* [computeRegionTargetTcpProxiesGet](#computeregiontargettcpproxiesget) - Returns the specified TargetTcpProxy resource.
* [computeRegionTargetTcpProxiesInsert](#computeregiontargettcpproxiesinsert) - Creates a TargetTcpProxy resource in the specified project and region using the data included in the request.
* [computeRegionTargetTcpProxiesList](#computeregiontargettcpproxieslist) - Retrieves a list of TargetTcpProxy resources available to the specified project in a given region.

## computeRegionTargetTcpProxiesDelete

Deletes the specified TargetTcpProxy resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetTcpProxiesDeleteRequest req = new ComputeRegionTargetTcpProxiesDeleteRequest("libero", "incidunt", "maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "atque";
                alt = AltEnum.JSON;
                callback = "neque";
                fields = "iure";
                key = "asperiores";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "ut";
                requestId = "libero";
                uploadType = "ut";
                uploadProtocol = "sed";
                userIp = "voluptatum";
            }};            

            ComputeRegionTargetTcpProxiesDeleteResponse res = sdk.regionTargetTcpProxies.computeRegionTargetTcpProxiesDelete(req, new ComputeRegionTargetTcpProxiesDeleteSecurity() {{
                option1 = new ComputeRegionTargetTcpProxiesDeleteSecurityOption1("soluta", "ea") {{
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

## computeRegionTargetTcpProxiesGet

Returns the specified TargetTcpProxy resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetTcpProxiesGetRequest req = new ComputeRegionTargetTcpProxiesGetRequest("corporis", "veritatis", "nesciunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "voluptates";
                key = "autem";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "omnis";
                uploadProtocol = "cupiditate";
                userIp = "expedita";
            }};            

            ComputeRegionTargetTcpProxiesGetResponse res = sdk.regionTargetTcpProxies.computeRegionTargetTcpProxiesGet(req, new ComputeRegionTargetTcpProxiesGetSecurity() {{
                option1 = new ComputeRegionTargetTcpProxiesGetSecurityOption1("illum", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetTcpProxy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionTargetTcpProxiesInsert

Creates a TargetTcpProxy resource in the specified project and region using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetTcpProxy;
import org.openapis.openapi.models.shared.TargetTcpProxyProxyHeaderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetTcpProxiesInsertRequest req = new ComputeRegionTargetTcpProxiesInsertRequest("quo", "consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                targetTcpProxy = new TargetTcpProxy() {{
                    creationTimestamp = "eligendi";
                    description = "consequuntur";
                    id = "tempora";
                    kind = "a";
                    name = "Cora Spinka";
                    proxyBind = false;
                    proxyHeader = TargetTcpProxyProxyHeaderEnum.NONE;
                    region = "aperiam";
                    selfLink = "aperiam";
                    service = "sit";
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "aperiam";
                key = "nesciunt";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "quasi";
                requestId = "asperiores";
                uploadType = "dolorem";
                uploadProtocol = "autem";
                userIp = "id";
            }};            

            ComputeRegionTargetTcpProxiesInsertResponse res = sdk.regionTargetTcpProxies.computeRegionTargetTcpProxiesInsert(req, new ComputeRegionTargetTcpProxiesInsertSecurity() {{
                option1 = new ComputeRegionTargetTcpProxiesInsertSecurityOption1("non", "iste") {{
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

## computeRegionTargetTcpProxiesList

Retrieves a list of TargetTcpProxy resources available to the specified project in a given region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesListRequest;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesListResponse;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionTargetTcpProxiesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionTargetTcpProxiesListRequest req = new ComputeRegionTargetTcpProxiesListRequest("maxime", "ex") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "earum";
                alt = AltEnum.PROTO;
                callback = "voluptates";
                fields = "ipsum";
                filter = "rem";
                key = "tenetur";
                maxResults = 774110L;
                oauthToken = "perspiciatis";
                orderBy = "architecto";
                pageToken = "quos";
                prettyPrint = false;
                quotaUser = "quam";
                returnPartialSuccess = false;
                uploadType = "error";
                uploadProtocol = "id";
                userIp = "tempora";
            }};            

            ComputeRegionTargetTcpProxiesListResponse res = sdk.regionTargetTcpProxies.computeRegionTargetTcpProxiesList(req, new ComputeRegionTargetTcpProxiesListSecurity() {{
                option1 = new ComputeRegionTargetTcpProxiesListSecurityOption1("necessitatibus", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetTcpProxyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
