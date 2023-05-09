# acceleratorTypes

### Available Operations

* [computeAcceleratorTypesAggregatedList](#computeacceleratortypesaggregatedlist) - Retrieves an aggregated list of accelerator types.
* [computeAcceleratorTypesGet](#computeacceleratortypesget) - Returns the specified accelerator type.
* [computeAcceleratorTypesList](#computeacceleratortypeslist) - Retrieves a list of accelerator types that are available to the specified project.

## computeAcceleratorTypesAggregatedList

Retrieves an aggregated list of accelerator types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAcceleratorTypesAggregatedListRequest req = new ComputeAcceleratorTypesAggregatedListRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minus";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "iusto";
                filter = "excepturi";
                includeAllScopes = false;
                key = "nisi";
                maxResults = 925597L;
                oauthToken = "temporibus";
                orderBy = "ab";
                pageToken = "quis";
                prettyPrint = false;
                quotaUser = "veritatis";
                returnPartialSuccess = false;
                uploadType = "deserunt";
                uploadProtocol = "perferendis";
                userIp = "ipsam";
            }};            

            ComputeAcceleratorTypesAggregatedListResponse res = sdk.acceleratorTypes.computeAcceleratorTypesAggregatedList(req, new ComputeAcceleratorTypesAggregatedListSecurity() {{
                option1 = new ComputeAcceleratorTypesAggregatedListSecurityOption1("repellendus", "sapiente") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.acceleratorTypeAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeAcceleratorTypesGet

Returns the specified accelerator type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesGetRequest;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesGetResponse;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesGetSecurity;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAcceleratorTypesGetRequest req = new ComputeAcceleratorTypesGetRequest("quo", "odit", "at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "quod";
                key = "esse";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "dolorum";
                uploadProtocol = "dicta";
                userIp = "nam";
            }};            

            ComputeAcceleratorTypesGetResponse res = sdk.acceleratorTypes.computeAcceleratorTypesGet(req, new ComputeAcceleratorTypesGetSecurity() {{
                option1 = new ComputeAcceleratorTypesGetSecurityOption1("officia", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.acceleratorType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeAcceleratorTypesList

Retrieves a list of accelerator types that are available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesListRequest;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesListResponse;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesListSecurity;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAcceleratorTypesListRequest req = new ComputeAcceleratorTypesListRequest("fugit", "deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "optio";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "commodi";
                filter = "molestiae";
                key = "modi";
                maxResults = 186332L;
                oauthToken = "impedit";
                orderBy = "cum";
                pageToken = "esse";
                prettyPrint = false;
                quotaUser = "ipsum";
                returnPartialSuccess = false;
                uploadType = "excepturi";
                uploadProtocol = "aspernatur";
                userIp = "perferendis";
            }};            

            ComputeAcceleratorTypesListResponse res = sdk.acceleratorTypes.computeAcceleratorTypesList(req, new ComputeAcceleratorTypesListSecurity() {{
                option1 = new ComputeAcceleratorTypesListSecurityOption1("ad", "natus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.acceleratorTypeList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
