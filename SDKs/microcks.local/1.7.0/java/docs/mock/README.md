# mock

## Overview

Operations related to API and Services mocks

### Available Operations

* [deleteService](#deleteservice) - Delete Service
* [getService](#getservice) - Get Service
* [getServices](#getservices) - Get Services and APIs
* [getServicesCounter](#getservicescounter) - Get the Services counter
* [getServicesLabels](#getserviceslabels) - Get the already used labels for Services
* [overrideServiceOperation](#overrideserviceoperation) - Override Service Operation
* [searchServices](#searchservices) - Search for Services and APIs
* [updateServiceMetadata](#updateservicemetadata) - Update Service Metadata
* [exportSnapshot](#exportsnapshot) - Export a snapshot
* [importSnapshot](#importsnapshot) - Import a snapshot

## deleteService

Delete a Service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceRequest;
import org.openapis.openapi.models.operations.DeleteServiceResponse;
import org.openapis.openapi.models.operations.DeleteServiceSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceRequest req = new DeleteServiceRequest("distinctio");            

            DeleteServiceResponse res = sdk.mock.deleteService(req, new DeleteServiceSecurity("id") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## getService

Get Service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceRequest;
import org.openapis.openapi.models.operations.GetServiceResponse;
import org.openapis.openapi.models.operations.GetServiceSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServiceRequest req = new GetServiceRequest("labore") {{
                messages = false;
            }};            

            GetServiceResponse res = sdk.mock.getService(req, new GetServiceSecurity("labore") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getService200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServices

Get Services and APIs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServicesRequest;
import org.openapis.openapi.models.operations.GetServicesResponse;
import org.openapis.openapi.models.operations.GetServicesSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServicesRequest req = new GetServicesRequest() {{
                page = 383462L;
                size = 618016L;
            }};            

            GetServicesResponse res = sdk.mock.getServices(req, new GetServicesSecurity("nobis") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServicesCounter

Get the Services counter

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServicesCounterResponse;
import org.openapis.openapi.models.operations.GetServicesCounterSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServicesCounterResponse res = sdk.mock.getServicesCounter(new GetServicesCounterSecurity("eum") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.counter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServicesLabels

Get the already used labels for Services

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServicesLabelsResponse;
import org.openapis.openapi.models.operations.GetServicesLabelsSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServicesLabelsResponse res = sdk.mock.getServicesLabels(new GetServicesLabelsSecurity("vero") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.labelsMap != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## overrideServiceOperation

Override Service Operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OverrideServiceOperationRequest;
import org.openapis.openapi.models.operations.OverrideServiceOperationResponse;
import org.openapis.openapi.models.operations.OverrideServiceOperationSecurity;
import org.openapis.openapi.models.shared.OperationOverrideDTO;
import org.openapis.openapi.models.shared.ParameterConstraint;
import org.openapis.openapi.models.shared.ParameterConstraintInEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OverrideServiceOperationRequest req = new OverrideServiceOperationRequest(                new OperationOverrideDTO() {{
                                defaultDelay = 135474L;
                                dispatcher = "architecto";
                                dispatcherRules = "magnam";
                                parameterConstraints = new org.openapis.openapi.models.shared.ParameterConstraint[]{{
                                    add(new ParameterConstraint("mollitia") {{
                                        in = ParameterConstraintInEnum.QUERY;
                                        mustMatchRegexp = "ullam";
                                        name = "Miss Julian Marvin";
                                        recopy = false;
                                        required = false;
                                    }}),
                                }};
                            }};, "ad", "eum");            

            OverrideServiceOperationResponse res = sdk.mock.overrideServiceOperation(req, new OverrideServiceOperationSecurity("dolor") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## searchServices

Search for Services and APIs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchServicesRequest;
import org.openapis.openapi.models.operations.SearchServicesResponse;
import org.openapis.openapi.models.operations.SearchServicesSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchServicesRequest req = new SearchServicesRequest(                new java.util.HashMap<String, String>() {{
                                put("odit", "nemo");
                                put("quasi", "iure");
                                put("doloribus", "debitis");
                                put("eius", "maxime");
                            }});            

            SearchServicesResponse res = sdk.mock.searchServices(req, new SearchServicesSecurity("deleniti") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.services != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceMetadata

Update Service Metadata

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceMetadataRequest;
import org.openapis.openapi.models.operations.UpdateServiceMetadataResponse;
import org.openapis.openapi.models.operations.UpdateServiceMetadataSecurity;
import org.openapis.openapi.models.shared.Metadata;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceMetadataRequest req = new UpdateServiceMetadataRequest(                new Metadata(703889L, 447926L) {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("architecto", "repudiandae");
                                }};
                                labels = new java.util.HashMap<String, String>() {{
                                    put("expedita", "nihil");
                                    put("repellat", "quibusdam");
                                }};
                            }};, "sed");            

            UpdateServiceMetadataResponse res = sdk.mock.updateServiceMetadata(req, new UpdateServiceMetadataSecurity("saepe") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## exportSnapshot

Export a repostiory snapshot with requested services

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportSnapshotRequest;
import org.openapis.openapi.models.operations.ExportSnapshotResponse;
import org.openapis.openapi.models.operations.ExportSnapshotSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportSnapshotRequest req = new ExportSnapshotRequest(                new String[]{{
                                add("accusantium"),
                                add("consequuntur"),
                                add("praesentium"),
                                add("natus"),
                            }});            

            ExportSnapshotResponse res = sdk.mock.exportSnapshot(req, new ExportSnapshotSecurity("magni") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.exportSnapshot200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importSnapshot

Import a repository snapshot previsouly exported into Microcks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportSnapshotResponse;
import org.openapis.openapi.models.operations.ImportSnapshotSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SnapshotUpload;
import org.openapis.openapi.models.shared.SnapshotUploadFile;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SnapshotUpload req = new SnapshotUpload(                new SnapshotUploadFile("sunt".getBytes(), "quo"););            

            ImportSnapshotResponse res = sdk.mock.importSnapshot(req, new ImportSnapshotSecurity("illum") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
