# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createAsset](#createasset) - Create a new Asset resource.
* [createBuild](#createbuild) - Create a new Build resource. At least one function version or asset version is required.
* [createDeployment](#createdeployment) - Create a new Deployment.
* [createEnvironment](#createenvironment) - Create a new environment.
* [createFunction](#createfunction) - Create a new Function resource.
* [createService](#createservice) - Create a new Service resource.
* [createVariable](#createvariable) - Create a new Variable.
* [deleteAsset](#deleteasset) - Delete an Asset resource.
* [deleteBuild](#deletebuild) - Delete a Build resource.
* [deleteEnvironment](#deleteenvironment) - Delete a specific environment.
* [deleteFunction](#deletefunction) - Delete a Function resource.
* [deleteService](#deleteservice) - Delete a Service resource.
* [deleteVariable](#deletevariable) - Delete a specific Variable.
* [fetchAsset](#fetchasset) - Retrieve a specific Asset resource.
* [fetchAssetVersion](#fetchassetversion) - Retrieve a specific Asset Version.
* [fetchBuild](#fetchbuild) - Retrieve a specific Build resource.
* [fetchBuildStatus](#fetchbuildstatus) - Retrieve a specific Build resource.
* [fetchDeployment](#fetchdeployment) - Retrieve a specific Deployment.
* [fetchEnvironment](#fetchenvironment) - Retrieve a specific environment.
* [fetchFunction](#fetchfunction) - Retrieve a specific Function resource.
* [fetchFunctionVersion](#fetchfunctionversion) - Retrieve a specific Function Version resource.
* [fetchFunctionVersionContent](#fetchfunctionversioncontent) - Retrieve a the content of a specific Function Version resource.
* [fetchLog](#fetchlog) - Retrieve a specific log.
* [fetchService](#fetchservice) - Retrieve a specific Service resource.
* [fetchVariable](#fetchvariable) - Retrieve a specific Variable.
* [listAsset](#listasset) - Retrieve a list of all Assets.
* [listAssetVersion](#listassetversion) - Retrieve a list of all Asset Versions.
* [listBuild](#listbuild) - Retrieve a list of all Builds.
* [listDeployment](#listdeployment) - Retrieve a list of all Deployments.
* [listEnvironment](#listenvironment) - Retrieve a list of all environments.
* [listFunction](#listfunction) - Retrieve a list of all Functions.
* [listFunctionVersion](#listfunctionversion) - Retrieve a list of all Function Version resources.
* [listLog](#listlog) - Retrieve a list of all logs.
* [listService](#listservice) - Retrieve a list of all Services.
* [listVariable](#listvariable) - Retrieve a list of all Variables.
* [updateAsset](#updateasset) - Update a specific Asset resource.
* [updateFunction](#updatefunction) - Update a specific Function resource.
* [updateService](#updateservice) - Update a specific Service resource.
* [updateVariable](#updatevariable) - Update a specific Variable.

## createAsset

Create a new Asset resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssetCreateAssetRequest;
import org.openapis.openapi.models.operations.CreateAssetRequest;
import org.openapis.openapi.models.operations.CreateAssetResponse;
import org.openapis.openapi.models.operations.CreateAssetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAssetRequest req = new CreateAssetRequest("unde") {{
                requestBody = new CreateAssetCreateAssetRequest("nulla");;
            }};            

            CreateAssetResponse res = sdk.sdk.createAsset(req, new CreateAssetSecurity("corrupti", "illum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceAsset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBuild

Create a new Build resource. At least one function version or asset version is required.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBuildCreateBuildRequest;
import org.openapis.openapi.models.operations.CreateBuildRequest;
import org.openapis.openapi.models.operations.CreateBuildResponse;
import org.openapis.openapi.models.operations.CreateBuildSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateBuildRequest req = new CreateBuildRequest("vel") {{
                requestBody = new CreateBuildCreateBuildRequest() {{
                    assetVersions = new String[]{{
                        add("deserunt"),
                        add("suscipit"),
                        add("iure"),
                    }};
                    dependencies = "magnam";
                    functionVersions = new String[]{{
                        add("ipsa"),
                        add("delectus"),
                        add("tempora"),
                        add("suscipit"),
                    }};
                    runtime = "molestiae";
                }};;
            }};            

            CreateBuildResponse res = sdk.sdk.createBuild(req, new CreateBuildSecurity("minus", "placeat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceBuild != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeployment

Create a new Deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeploymentCreateDeploymentRequest;
import org.openapis.openapi.models.operations.CreateDeploymentRequest;
import org.openapis.openapi.models.operations.CreateDeploymentResponse;
import org.openapis.openapi.models.operations.CreateDeploymentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDeploymentRequest req = new CreateDeploymentRequest("voluptatum", "iusto") {{
                requestBody = new CreateDeploymentCreateDeploymentRequest() {{
                    buildSid = "excepturi";
                }};;
            }};            

            CreateDeploymentResponse res = sdk.sdk.createDeployment(req, new CreateDeploymentSecurity("nisi", "recusandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceEnvironmentDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEnvironment

Create a new environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEnvironmentCreateEnvironmentRequest;
import org.openapis.openapi.models.operations.CreateEnvironmentRequest;
import org.openapis.openapi.models.operations.CreateEnvironmentResponse;
import org.openapis.openapi.models.operations.CreateEnvironmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateEnvironmentRequest req = new CreateEnvironmentRequest("temporibus") {{
                requestBody = new CreateEnvironmentCreateEnvironmentRequest("ab") {{
                    domainSuffix = "quis";
                }};;
            }};            

            CreateEnvironmentResponse res = sdk.sdk.createEnvironment(req, new CreateEnvironmentSecurity("veritatis", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceEnvironment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFunction

Create a new Function resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFunctionCreateFunctionRequest;
import org.openapis.openapi.models.operations.CreateFunctionRequest;
import org.openapis.openapi.models.operations.CreateFunctionResponse;
import org.openapis.openapi.models.operations.CreateFunctionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFunctionRequest req = new CreateFunctionRequest("perferendis") {{
                requestBody = new CreateFunctionCreateFunctionRequest("ipsam");;
            }};            

            CreateFunctionResponse res = sdk.sdk.createFunction(req, new CreateFunctionSecurity("repellendus", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceFunction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createService

Create a new Service resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceCreateServiceRequest;
import org.openapis.openapi.models.operations.CreateServiceResponse;
import org.openapis.openapi.models.operations.CreateServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateServiceCreateServiceRequest req = new CreateServiceCreateServiceRequest("quo", "odit") {{
                includeCredentials = false;
                uiEditable = false;
            }};            

            CreateServiceResponse res = sdk.sdk.createService(req, new CreateServiceSecurity("at", "at") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVariable

Create a new Variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVariableCreateVariableRequest;
import org.openapis.openapi.models.operations.CreateVariableRequest;
import org.openapis.openapi.models.operations.CreateVariableResponse;
import org.openapis.openapi.models.operations.CreateVariableSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateVariableRequest req = new CreateVariableRequest("maiores", "molestiae") {{
                requestBody = new CreateVariableCreateVariableRequest("quod", "quod");;
            }};            

            CreateVariableResponse res = sdk.sdk.createVariable(req, new CreateVariableSecurity("esse", "totam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceEnvironmentVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAsset

Delete an Asset resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAssetRequest;
import org.openapis.openapi.models.operations.DeleteAssetResponse;
import org.openapis.openapi.models.operations.DeleteAssetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAssetRequest req = new DeleteAssetRequest("porro", "dolorum");            

            DeleteAssetResponse res = sdk.sdk.deleteAsset(req, new DeleteAssetSecurity("dicta", "nam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteBuild

Delete a Build resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBuildRequest;
import org.openapis.openapi.models.operations.DeleteBuildResponse;
import org.openapis.openapi.models.operations.DeleteBuildSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBuildRequest req = new DeleteBuildRequest("officia", "occaecati");            

            DeleteBuildResponse res = sdk.sdk.deleteBuild(req, new DeleteBuildSecurity("fugit", "deleniti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteEnvironment

Delete a specific environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEnvironmentRequest;
import org.openapis.openapi.models.operations.DeleteEnvironmentResponse;
import org.openapis.openapi.models.operations.DeleteEnvironmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteEnvironmentRequest req = new DeleteEnvironmentRequest("hic", "optio");            

            DeleteEnvironmentResponse res = sdk.sdk.deleteEnvironment(req, new DeleteEnvironmentSecurity("totam", "beatae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteFunction

Delete a Function resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFunctionRequest;
import org.openapis.openapi.models.operations.DeleteFunctionResponse;
import org.openapis.openapi.models.operations.DeleteFunctionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFunctionRequest req = new DeleteFunctionRequest("commodi", "molestiae");            

            DeleteFunctionResponse res = sdk.sdk.deleteFunction(req, new DeleteFunctionSecurity("modi", "qui") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteService

Delete a Service resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceRequest;
import org.openapis.openapi.models.operations.DeleteServiceResponse;
import org.openapis.openapi.models.operations.DeleteServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceRequest req = new DeleteServiceRequest("impedit");            

            DeleteServiceResponse res = sdk.sdk.deleteService(req, new DeleteServiceSecurity("cum", "esse") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteVariable

Delete a specific Variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVariableRequest;
import org.openapis.openapi.models.operations.DeleteVariableResponse;
import org.openapis.openapi.models.operations.DeleteVariableSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteVariableRequest req = new DeleteVariableRequest("ipsum", "excepturi", "aspernatur");            

            DeleteVariableResponse res = sdk.sdk.deleteVariable(req, new DeleteVariableSecurity("perferendis", "ad") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## fetchAsset

Retrieve a specific Asset resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAssetRequest;
import org.openapis.openapi.models.operations.FetchAssetResponse;
import org.openapis.openapi.models.operations.FetchAssetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAssetRequest req = new FetchAssetRequest("natus", "sed");            

            FetchAssetResponse res = sdk.sdk.fetchAsset(req, new FetchAssetSecurity("iste", "dolor") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceAsset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchAssetVersion

Retrieve a specific Asset Version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAssetVersionRequest;
import org.openapis.openapi.models.operations.FetchAssetVersionResponse;
import org.openapis.openapi.models.operations.FetchAssetVersionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAssetVersionRequest req = new FetchAssetVersionRequest("natus", "laboriosam", "hic");            

            FetchAssetVersionResponse res = sdk.sdk.fetchAssetVersion(req, new FetchAssetVersionSecurity("saepe", "fuga") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceAssetAssetVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchBuild

Retrieve a specific Build resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchBuildRequest;
import org.openapis.openapi.models.operations.FetchBuildResponse;
import org.openapis.openapi.models.operations.FetchBuildSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchBuildRequest req = new FetchBuildRequest("in", "corporis");            

            FetchBuildResponse res = sdk.sdk.fetchBuild(req, new FetchBuildSecurity("iste", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceBuild != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchBuildStatus

Retrieve a specific Build resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchBuildStatusRequest;
import org.openapis.openapi.models.operations.FetchBuildStatusResponse;
import org.openapis.openapi.models.operations.FetchBuildStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchBuildStatusRequest req = new FetchBuildStatusRequest("saepe", "quidem");            

            FetchBuildStatusResponse res = sdk.sdk.fetchBuildStatus(req, new FetchBuildStatusSecurity("architecto", "ipsa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceBuildBuildStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDeployment

Retrieve a specific Deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDeploymentRequest;
import org.openapis.openapi.models.operations.FetchDeploymentResponse;
import org.openapis.openapi.models.operations.FetchDeploymentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDeploymentRequest req = new FetchDeploymentRequest("reiciendis", "est", "mollitia");            

            FetchDeploymentResponse res = sdk.sdk.fetchDeployment(req, new FetchDeploymentSecurity("laborum", "dolores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceEnvironmentDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchEnvironment

Retrieve a specific environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchEnvironmentRequest;
import org.openapis.openapi.models.operations.FetchEnvironmentResponse;
import org.openapis.openapi.models.operations.FetchEnvironmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchEnvironmentRequest req = new FetchEnvironmentRequest("dolorem", "corporis");            

            FetchEnvironmentResponse res = sdk.sdk.fetchEnvironment(req, new FetchEnvironmentSecurity("explicabo", "nobis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceEnvironment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchFunction

Retrieve a specific Function resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFunctionRequest;
import org.openapis.openapi.models.operations.FetchFunctionResponse;
import org.openapis.openapi.models.operations.FetchFunctionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFunctionRequest req = new FetchFunctionRequest("enim", "omnis");            

            FetchFunctionResponse res = sdk.sdk.fetchFunction(req, new FetchFunctionSecurity("nemo", "minima") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceFunction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchFunctionVersion

Retrieve a specific Function Version resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFunctionVersionRequest;
import org.openapis.openapi.models.operations.FetchFunctionVersionResponse;
import org.openapis.openapi.models.operations.FetchFunctionVersionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFunctionVersionRequest req = new FetchFunctionVersionRequest("excepturi", "accusantium", "iure");            

            FetchFunctionVersionResponse res = sdk.sdk.fetchFunctionVersion(req, new FetchFunctionVersionSecurity("culpa", "doloribus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceFunctionFunctionVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchFunctionVersionContent

Retrieve a the content of a specific Function Version resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFunctionVersionContentRequest;
import org.openapis.openapi.models.operations.FetchFunctionVersionContentResponse;
import org.openapis.openapi.models.operations.FetchFunctionVersionContentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFunctionVersionContentRequest req = new FetchFunctionVersionContentRequest("sapiente", "architecto", "mollitia");            

            FetchFunctionVersionContentResponse res = sdk.sdk.fetchFunctionVersionContent(req, new FetchFunctionVersionContentSecurity("dolorem", "culpa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceFunctionFunctionVersionFunctionVersionContent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchLog

Retrieve a specific log.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchLogRequest;
import org.openapis.openapi.models.operations.FetchLogResponse;
import org.openapis.openapi.models.operations.FetchLogSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchLogRequest req = new FetchLogRequest("consequuntur", "repellat", "mollitia");            

            FetchLogResponse res = sdk.sdk.fetchLog(req, new FetchLogSecurity("occaecati", "numquam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceEnvironmentLog != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchService

Retrieve a specific Service resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceRequest;
import org.openapis.openapi.models.operations.FetchServiceResponse;
import org.openapis.openapi.models.operations.FetchServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceRequest req = new FetchServiceRequest("commodi");            

            FetchServiceResponse res = sdk.sdk.fetchService(req, new FetchServiceSecurity("quam", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchVariable

Retrieve a specific Variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchVariableRequest;
import org.openapis.openapi.models.operations.FetchVariableResponse;
import org.openapis.openapi.models.operations.FetchVariableSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchVariableRequest req = new FetchVariableRequest("velit", "error", "quia");            

            FetchVariableResponse res = sdk.sdk.fetchVariable(req, new FetchVariableSecurity("quis", "vitae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceEnvironmentVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAsset

Retrieve a list of all Assets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssetRequest;
import org.openapis.openapi.models.operations.ListAssetResponse;
import org.openapis.openapi.models.operations.ListAssetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAssetRequest req = new ListAssetRequest("laborum") {{
                page = 656330L;
                pageSize = 317202L;
                pageToken = "odit";
            }};            

            ListAssetResponse res = sdk.sdk.listAsset(req, new ListAssetSecurity("quo", "sequi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAssetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssetVersion

Retrieve a list of all Asset Versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssetVersionRequest;
import org.openapis.openapi.models.operations.ListAssetVersionResponse;
import org.openapis.openapi.models.operations.ListAssetVersionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAssetVersionRequest req = new ListAssetVersionRequest("tenetur", "ipsam") {{
                page = 662527L;
                pageSize = 820994L;
                pageToken = "aut";
            }};            

            ListAssetVersionResponse res = sdk.sdk.listAssetVersion(req, new ListAssetVersionSecurity("quasi", "error") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAssetVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBuild

Retrieve a list of all Builds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBuildRequest;
import org.openapis.openapi.models.operations.ListBuildResponse;
import org.openapis.openapi.models.operations.ListBuildSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListBuildRequest req = new ListBuildRequest("temporibus") {{
                page = 673660L;
                pageSize = 96098L;
                pageToken = "reiciendis";
            }};            

            ListBuildResponse res = sdk.sdk.listBuild(req, new ListBuildSecurity("voluptatibus", "vero") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listBuildResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeployment

Retrieve a list of all Deployments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeploymentRequest;
import org.openapis.openapi.models.operations.ListDeploymentResponse;
import org.openapis.openapi.models.operations.ListDeploymentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDeploymentRequest req = new ListDeploymentRequest("nihil", "praesentium") {{
                page = 976762L;
                pageSize = 55714L;
                pageToken = "omnis";
            }};            

            ListDeploymentResponse res = sdk.sdk.listDeployment(req, new ListDeploymentSecurity("voluptate", "cum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listDeploymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEnvironment

Retrieve a list of all environments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEnvironmentRequest;
import org.openapis.openapi.models.operations.ListEnvironmentResponse;
import org.openapis.openapi.models.operations.ListEnvironmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEnvironmentRequest req = new ListEnvironmentRequest("perferendis") {{
                page = 39187L;
                pageSize = 441711L;
                pageToken = "ut";
            }};            

            ListEnvironmentResponse res = sdk.sdk.listEnvironment(req, new ListEnvironmentSecurity("maiores", "dicta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFunction

Retrieve a list of all Functions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFunctionRequest;
import org.openapis.openapi.models.operations.ListFunctionResponse;
import org.openapis.openapi.models.operations.ListFunctionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFunctionRequest req = new ListFunctionRequest("corporis") {{
                page = 296140L;
                pageSize = 480894L;
                pageToken = "dicta";
            }};            

            ListFunctionResponse res = sdk.sdk.listFunction(req, new ListFunctionSecurity("harum", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listFunctionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFunctionVersion

Retrieve a list of all Function Version resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFunctionVersionRequest;
import org.openapis.openapi.models.operations.ListFunctionVersionResponse;
import org.openapis.openapi.models.operations.ListFunctionVersionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFunctionVersionRequest req = new ListFunctionVersionRequest("accusamus", "commodi") {{
                page = 918236L;
                pageSize = 64147L;
                pageToken = "ipsum";
            }};            

            ListFunctionVersionResponse res = sdk.sdk.listFunctionVersion(req, new ListFunctionVersionSecurity("quidem", "molestias") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listFunctionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLog

Retrieve a list of all logs.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLogRequest;
import org.openapis.openapi.models.operations.ListLogResponse;
import org.openapis.openapi.models.operations.ListLogSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListLogRequest req = new ListLogRequest("excepturi", "pariatur") {{
                endDate = OffsetDateTime.parse("2022-06-29T05:25:54.356Z");
                functionSid = "rem";
                page = 916723L;
                pageSize = 93940L;
                pageToken = "repudiandae";
                startDate = OffsetDateTime.parse("2022-11-01T07:52:08.326Z");
            }};            

            ListLogResponse res = sdk.sdk.listLog(req, new ListLogSecurity("itaque", "incidunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listLogResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listService

Retrieve a list of all Services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceRequest;
import org.openapis.openapi.models.operations.ListServiceResponse;
import org.openapis.openapi.models.operations.ListServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceRequest req = new ListServiceRequest() {{
                page = 318569L;
                pageSize = 9356L;
                pageToken = "est";
            }};            

            ListServiceResponse res = sdk.sdk.listService(req, new ListServiceSecurity("quibusdam", "explicabo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVariable

Retrieve a list of all Variables.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVariableRequest;
import org.openapis.openapi.models.operations.ListVariableResponse;
import org.openapis.openapi.models.operations.ListVariableSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListVariableRequest req = new ListVariableRequest("deserunt", "distinctio") {{
                page = 841386L;
                pageSize = 289406L;
                pageToken = "modi";
            }};            

            ListVariableResponse res = sdk.sdk.listVariable(req, new ListVariableSecurity("qui", "aliquid") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listVariableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAsset

Update a specific Asset resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAssetRequest;
import org.openapis.openapi.models.operations.UpdateAssetResponse;
import org.openapis.openapi.models.operations.UpdateAssetSecurity;
import org.openapis.openapi.models.operations.UpdateAssetUpdateAssetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAssetRequest req = new UpdateAssetRequest("cupiditate", "quos") {{
                requestBody = new UpdateAssetUpdateAssetRequest("perferendis");;
            }};            

            UpdateAssetResponse res = sdk.sdk.updateAsset(req, new UpdateAssetSecurity("magni", "assumenda") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceAsset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFunction

Update a specific Function resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFunctionRequest;
import org.openapis.openapi.models.operations.UpdateFunctionResponse;
import org.openapis.openapi.models.operations.UpdateFunctionSecurity;
import org.openapis.openapi.models.operations.UpdateFunctionUpdateFunctionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateFunctionRequest req = new UpdateFunctionRequest("ipsam", "alias") {{
                requestBody = new UpdateFunctionUpdateFunctionRequest("fugit");;
            }};            

            UpdateFunctionResponse res = sdk.sdk.updateFunction(req, new UpdateFunctionSecurity("dolorum", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceFunction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateService

Update a specific Service resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceRequest;
import org.openapis.openapi.models.operations.UpdateServiceResponse;
import org.openapis.openapi.models.operations.UpdateServiceSecurity;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceRequest req = new UpdateServiceRequest("tempora") {{
                requestBody = new UpdateServiceUpdateServiceRequest() {{
                    friendlyName = "facilis";
                    includeCredentials = false;
                    uiEditable = false;
                }};;
            }};            

            UpdateServiceResponse res = sdk.sdk.updateService(req, new UpdateServiceSecurity("tempore", "labore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVariable

Update a specific Variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVariableRequest;
import org.openapis.openapi.models.operations.UpdateVariableResponse;
import org.openapis.openapi.models.operations.UpdateVariableSecurity;
import org.openapis.openapi.models.operations.UpdateVariableUpdateVariableRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateVariableRequest req = new UpdateVariableRequest("delectus", "eum", "non") {{
                requestBody = new UpdateVariableUpdateVariableRequest() {{
                    key = "eligendi";
                    value = "sint";
                }};;
            }};            

            UpdateVariableResponse res = sdk.sdk.updateVariable(req, new UpdateVariableSecurity("aliquid", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceEnvironmentVariable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
