# projects

### Available Operations

* [vpcaccessProjectsLocationsConnectorsCreate](#vpcaccessprojectslocationsconnectorscreate) - Creates a Serverless VPC Access connector, returns an operation.
* [vpcaccessProjectsLocationsConnectorsDelete](#vpcaccessprojectslocationsconnectorsdelete) - Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.
* [vpcaccessProjectsLocationsConnectorsList](#vpcaccessprojectslocationsconnectorslist) - Lists Serverless VPC Access connectors.
* [vpcaccessProjectsLocationsConnectorsPatch](#vpcaccessprojectslocationsconnectorspatch) - Updates a Serverless VPC Access connector, returns an operation.
* [vpcaccessProjectsLocationsList](#vpcaccessprojectslocationslist) - Lists information about the supported locations for this service.
* [vpcaccessProjectsLocationsOperationsGet](#vpcaccessprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [vpcaccessProjectsLocationsOperationsList](#vpcaccessprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## vpcaccessProjectsLocationsConnectorsCreate

Creates a Serverless VPC Access connector, returns an operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsCreateRequest;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsCreateResponse;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConnectorInput;
import org.openapis.openapi.models.shared.Subnet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VpcaccessProjectsLocationsConnectorsCreateRequest req = new VpcaccessProjectsLocationsConnectorsCreateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                connectorInput = new ConnectorInput() {{
                    ipCidrRange = "repellendus";
                    machineType = "sapiente";
                    maxInstances = 778157;
                    maxThroughput = 140350;
                    minInstances = 870013;
                    minThroughput = 870088;
                    name = "Javier Schmidt";
                    network = "totam";
                    subnet = new Subnet() {{
                        name = "Omar Carroll";
                        projectId = "occaecati";
                    }};;
                }};;
                accessToken = "fugit";
                alt = AltEnum.MEDIA;
                callback = "hic";
                connectorId = "optio";
                fields = "totam";
                key = "beatae";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            VpcaccessProjectsLocationsConnectorsCreateResponse res = sdk.projects.vpcaccessProjectsLocationsConnectorsCreate(req, new VpcaccessProjectsLocationsConnectorsCreateSecurity("impedit", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vpcaccessProjectsLocationsConnectorsDelete

Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsDeleteRequest;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsDeleteResponse;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VpcaccessProjectsLocationsConnectorsDeleteRequest req = new VpcaccessProjectsLocationsConnectorsDeleteRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "ad";
                key = "natus";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "dolor";
                uploadProtocol = "natus";
            }};            

            VpcaccessProjectsLocationsConnectorsDeleteResponse res = sdk.projects.vpcaccessProjectsLocationsConnectorsDelete(req, new VpcaccessProjectsLocationsConnectorsDeleteSecurity("laboriosam", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vpcaccessProjectsLocationsConnectorsList

Lists Serverless VPC Access connectors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsListRequest;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsListResponse;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VpcaccessProjectsLocationsConnectorsListRequest req = new VpcaccessProjectsLocationsConnectorsListRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "iste";
                fields = "iure";
                key = "saepe";
                oauthToken = "quidem";
                pageSize = 99280L;
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "est";
                uploadProtocol = "mollitia";
            }};            

            VpcaccessProjectsLocationsConnectorsListResponse res = sdk.projects.vpcaccessProjectsLocationsConnectorsList(req, new VpcaccessProjectsLocationsConnectorsListSecurity("laborum", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listConnectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vpcaccessProjectsLocationsConnectorsPatch

Updates a Serverless VPC Access connector, returns an operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsPatchRequest;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsPatchResponse;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsConnectorsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConnectorInput;
import org.openapis.openapi.models.shared.Subnet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VpcaccessProjectsLocationsConnectorsPatchRequest req = new VpcaccessProjectsLocationsConnectorsPatchRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                connectorInput = new ConnectorInput() {{
                    ipCidrRange = "explicabo";
                    machineType = "nobis";
                    maxInstances = 315428;
                    maxThroughput = 607831;
                    minInstances = 363711;
                    minThroughput = 325047;
                    name = "Brian Kessler";
                    network = "sapiente";
                    subnet = new Subnet() {{
                        name = "Angie Durgan";
                        projectId = "repellat";
                    }};;
                }};;
                accessToken = "mollitia";
                alt = AltEnum.MEDIA;
                callback = "numquam";
                fields = "commodi";
                key = "quam";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "velit";
                updateMask = "error";
                uploadType = "quia";
                uploadProtocol = "quis";
            }};            

            VpcaccessProjectsLocationsConnectorsPatchResponse res = sdk.projects.vpcaccessProjectsLocationsConnectorsPatch(req, new VpcaccessProjectsLocationsConnectorsPatchSecurity("vitae", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vpcaccessProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VpcaccessProjectsLocationsListRequest req = new VpcaccessProjectsLocationsListRequest("animi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "tenetur";
                filter = "ipsam";
                key = "id";
                oauthToken = "possimus";
                pageSize = 13571L;
                pageToken = "quasi";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "temporibus";
                uploadProtocol = "laborum";
            }};            

            VpcaccessProjectsLocationsListResponse res = sdk.projects.vpcaccessProjectsLocationsList(req, new VpcaccessProjectsLocationsListSecurity("quasi", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vpcaccessProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VpcaccessProjectsLocationsOperationsGetRequest req = new VpcaccessProjectsLocationsOperationsGetRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "ipsa";
                key = "omnis";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "perferendis";
                uploadProtocol = "doloremque";
            }};            

            VpcaccessProjectsLocationsOperationsGetResponse res = sdk.projects.vpcaccessProjectsLocationsOperationsGet(req, new VpcaccessProjectsLocationsOperationsGetSecurity("reprehenderit", "ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vpcaccessProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.VpcaccessProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VpcaccessProjectsLocationsOperationsListRequest req = new VpcaccessProjectsLocationsOperationsListRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "iusto";
                fields = "dicta";
                filter = "harum";
                key = "enim";
                oauthToken = "accusamus";
                pageSize = 414263L;
                pageToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "ipsum";
                uploadProtocol = "quidem";
            }};            

            VpcaccessProjectsLocationsOperationsListResponse res = sdk.projects.vpcaccessProjectsLocationsOperationsList(req, new VpcaccessProjectsLocationsOperationsListSecurity("molestias", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
