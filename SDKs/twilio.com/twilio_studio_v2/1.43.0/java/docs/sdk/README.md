# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createExecution](#createexecution) - Triggers a new Execution for the Flow
* [createFlow](#createflow) - Create a Flow.
* [deleteExecution](#deleteexecution) - Delete the Execution and all Steps relating to it.
* [deleteFlow](#deleteflow) - Delete a specific Flow.
* [fetchExecution](#fetchexecution) - Retrieve an Execution
* [fetchExecutionContext](#fetchexecutioncontext) - Retrieve the most recent context for an Execution.
* [fetchExecutionStep](#fetchexecutionstep) - Retrieve a Step.
* [fetchExecutionStepContext](#fetchexecutionstepcontext) - Retrieve the context for an Execution Step.
* [fetchFlow](#fetchflow) - Retrieve a specific Flow.
* [fetchFlowRevision](#fetchflowrevision) - Retrieve a specific Flow revision.
* [fetchTestUser](#fetchtestuser) - Fetch flow test users
* [listExecution](#listexecution) - Retrieve a list of all Executions for the Flow.
* [listExecutionStep](#listexecutionstep) - Retrieve a list of all Steps for an Execution.
* [listFlow](#listflow) - Retrieve a list of all Flows.
* [listFlowRevision](#listflowrevision) - Retrieve a list of all Flows revisions.
* [updateExecution](#updateexecution) - Update the status of an Execution to `ended`.
* [updateFlow](#updateflow) - Update a Flow.
* [updateFlowValidate](#updateflowvalidate) - Validate flow JSON definition
* [updateTestUser](#updatetestuser) - Update flow test users

## createExecution

Triggers a new Execution for the Flow

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExecutionCreateExecutionRequest;
import org.openapis.openapi.models.operations.CreateExecutionRequest;
import org.openapis.openapi.models.operations.CreateExecutionResponse;
import org.openapis.openapi.models.operations.CreateExecutionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateExecutionRequest req = new CreateExecutionRequest("corrupti") {{
                requestBody = new CreateExecutionCreateExecutionRequest("illum", "vel") {{
                    parameters = "error";
                }};;
            }};            

            CreateExecutionResponse res = sdk.sdk.createExecution(req, new CreateExecutionSecurity("deserunt", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV2FlowExecution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFlow

Create a Flow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFlowCreateFlowRequest;
import org.openapis.openapi.models.operations.CreateFlowResponse;
import org.openapis.openapi.models.operations.CreateFlowSecurity;
import org.openapis.openapi.models.shared.FlowEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFlowCreateFlowRequest req = new CreateFlowCreateFlowRequest("iure", "magnam", FlowEnumStatusEnum.PUBLISHED) {{
                commitMessage = "ipsa";
            }};            

            CreateFlowResponse res = sdk.sdk.createFlow(req, new CreateFlowSecurity("delectus", "tempora") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV2Flow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteExecution

Delete the Execution and all Steps relating to it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteExecutionRequest;
import org.openapis.openapi.models.operations.DeleteExecutionResponse;
import org.openapis.openapi.models.operations.DeleteExecutionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteExecutionRequest req = new DeleteExecutionRequest("suscipit", "molestiae");            

            DeleteExecutionResponse res = sdk.sdk.deleteExecution(req, new DeleteExecutionSecurity("minus", "placeat") {{
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

## deleteFlow

Delete a specific Flow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFlowRequest;
import org.openapis.openapi.models.operations.DeleteFlowResponse;
import org.openapis.openapi.models.operations.DeleteFlowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFlowRequest req = new DeleteFlowRequest("voluptatum");            

            DeleteFlowResponse res = sdk.sdk.deleteFlow(req, new DeleteFlowSecurity("iusto", "excepturi") {{
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

## fetchExecution

Retrieve an Execution

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchExecutionRequest;
import org.openapis.openapi.models.operations.FetchExecutionResponse;
import org.openapis.openapi.models.operations.FetchExecutionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchExecutionRequest req = new FetchExecutionRequest("nisi", "recusandae");            

            FetchExecutionResponse res = sdk.sdk.fetchExecution(req, new FetchExecutionSecurity("temporibus", "ab") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV2FlowExecution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchExecutionContext

Retrieve the most recent context for an Execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchExecutionContextRequest;
import org.openapis.openapi.models.operations.FetchExecutionContextResponse;
import org.openapis.openapi.models.operations.FetchExecutionContextSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchExecutionContextRequest req = new FetchExecutionContextRequest("quis", "veritatis");            

            FetchExecutionContextResponse res = sdk.sdk.fetchExecutionContext(req, new FetchExecutionContextSecurity("deserunt", "perferendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV2FlowExecutionExecutionContext != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchExecutionStep

Retrieve a Step.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchExecutionStepRequest;
import org.openapis.openapi.models.operations.FetchExecutionStepResponse;
import org.openapis.openapi.models.operations.FetchExecutionStepSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchExecutionStepRequest req = new FetchExecutionStepRequest("ipsam", "repellendus", "sapiente");            

            FetchExecutionStepResponse res = sdk.sdk.fetchExecutionStep(req, new FetchExecutionStepSecurity("quo", "odit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV2FlowExecutionExecutionStep != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchExecutionStepContext

Retrieve the context for an Execution Step.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchExecutionStepContextRequest;
import org.openapis.openapi.models.operations.FetchExecutionStepContextResponse;
import org.openapis.openapi.models.operations.FetchExecutionStepContextSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchExecutionStepContextRequest req = new FetchExecutionStepContextRequest("at", "at", "maiores");            

            FetchExecutionStepContextResponse res = sdk.sdk.fetchExecutionStepContext(req, new FetchExecutionStepContextSecurity("molestiae", "quod") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV2FlowExecutionExecutionStepExecutionStepContext != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchFlow

Retrieve a specific Flow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFlowRequest;
import org.openapis.openapi.models.operations.FetchFlowResponse;
import org.openapis.openapi.models.operations.FetchFlowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFlowRequest req = new FetchFlowRequest("quod");            

            FetchFlowResponse res = sdk.sdk.fetchFlow(req, new FetchFlowSecurity("esse", "totam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV2Flow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchFlowRevision

Retrieve a specific Flow revision.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFlowRevisionRequest;
import org.openapis.openapi.models.operations.FetchFlowRevisionResponse;
import org.openapis.openapi.models.operations.FetchFlowRevisionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFlowRevisionRequest req = new FetchFlowRevisionRequest("porro", "dolorum");            

            FetchFlowRevisionResponse res = sdk.sdk.fetchFlowRevision(req, new FetchFlowRevisionSecurity("dicta", "nam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV2FlowFlowRevision != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTestUser

Fetch flow test users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTestUserRequest;
import org.openapis.openapi.models.operations.FetchTestUserResponse;
import org.openapis.openapi.models.operations.FetchTestUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTestUserRequest req = new FetchTestUserRequest("officia");            

            FetchTestUserResponse res = sdk.sdk.fetchTestUser(req, new FetchTestUserSecurity("occaecati", "fugit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV2FlowTestUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExecution

Retrieve a list of all Executions for the Flow.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExecutionRequest;
import org.openapis.openapi.models.operations.ListExecutionResponse;
import org.openapis.openapi.models.operations.ListExecutionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListExecutionRequest req = new ListExecutionRequest("deleniti") {{
                dateCreatedFrom = OffsetDateTime.parse("2020-09-22T07:34:53.140Z");
                dateCreatedTo = OffsetDateTime.parse("2022-10-15T16:29:54.554Z");
                page = 414662L;
                pageSize = 473600L;
                pageToken = "modi";
            }};            

            ListExecutionResponse res = sdk.sdk.listExecution(req, new ListExecutionSecurity("qui", "impedit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExecutionStep

Retrieve a list of all Steps for an Execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExecutionStepRequest;
import org.openapis.openapi.models.operations.ListExecutionStepResponse;
import org.openapis.openapi.models.operations.ListExecutionStepSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListExecutionStepRequest req = new ListExecutionStepRequest("cum", "esse") {{
                page = 216550L;
                pageSize = 568434L;
                pageToken = "aspernatur";
            }};            

            ListExecutionStepResponse res = sdk.sdk.listExecutionStep(req, new ListExecutionStepSecurity("perferendis", "ad") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listExecutionStepResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFlow

Retrieve a list of all Flows.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFlowRequest;
import org.openapis.openapi.models.operations.ListFlowResponse;
import org.openapis.openapi.models.operations.ListFlowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFlowRequest req = new ListFlowRequest() {{
                page = 617636L;
                pageSize = 149675L;
                pageToken = "iste";
            }};            

            ListFlowResponse res = sdk.sdk.listFlow(req, new ListFlowSecurity("dolor", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listFlowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFlowRevision

Retrieve a list of all Flows revisions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFlowRevisionRequest;
import org.openapis.openapi.models.operations.ListFlowRevisionResponse;
import org.openapis.openapi.models.operations.ListFlowRevisionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFlowRevisionRequest req = new ListFlowRevisionRequest("laboriosam") {{
                page = 943749L;
                pageSize = 902599L;
                pageToken = "fuga";
            }};            

            ListFlowRevisionResponse res = sdk.sdk.listFlowRevision(req, new ListFlowRevisionSecurity("in", "corporis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listFlowRevisionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateExecution

Update the status of an Execution to `ended`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateExecutionRequest;
import org.openapis.openapi.models.operations.UpdateExecutionResponse;
import org.openapis.openapi.models.operations.UpdateExecutionSecurity;
import org.openapis.openapi.models.operations.UpdateExecutionUpdateExecutionRequest;
import org.openapis.openapi.models.shared.ExecutionEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateExecutionRequest req = new UpdateExecutionRequest("iste", "iure") {{
                requestBody = new UpdateExecutionUpdateExecutionRequest(ExecutionEnumStatusEnum.ENDED);;
            }};            

            UpdateExecutionResponse res = sdk.sdk.updateExecution(req, new UpdateExecutionSecurity("quidem", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV2FlowExecution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFlow

Update a Flow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFlowRequest;
import org.openapis.openapi.models.operations.UpdateFlowResponse;
import org.openapis.openapi.models.operations.UpdateFlowSecurity;
import org.openapis.openapi.models.operations.UpdateFlowUpdateFlowRequest;
import org.openapis.openapi.models.shared.FlowEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateFlowRequest req = new UpdateFlowRequest("ipsa") {{
                requestBody = new UpdateFlowUpdateFlowRequest(FlowEnumStatusEnum.PUBLISHED) {{
                    commitMessage = "est";
                    definition = "mollitia";
                    friendlyName = "laborum";
                }};;
            }};            

            UpdateFlowResponse res = sdk.sdk.updateFlow(req, new UpdateFlowSecurity("dolores", "dolorem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV2Flow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFlowValidate

Validate flow JSON definition

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFlowValidateResponse;
import org.openapis.openapi.models.operations.UpdateFlowValidateSecurity;
import org.openapis.openapi.models.operations.UpdateFlowValidateUpdateFlowValidateRequest;
import org.openapis.openapi.models.shared.FlowValidateEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateFlowValidateUpdateFlowValidateRequest req = new UpdateFlowValidateUpdateFlowValidateRequest("corporis", "explicabo", FlowValidateEnumStatusEnum.PUBLISHED) {{
                commitMessage = "enim";
            }};            

            UpdateFlowValidateResponse res = sdk.sdk.updateFlowValidate(req, new UpdateFlowValidateSecurity("omnis", "nemo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV2FlowValidate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTestUser

Update flow test users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTestUserRequest;
import org.openapis.openapi.models.operations.UpdateTestUserResponse;
import org.openapis.openapi.models.operations.UpdateTestUserSecurity;
import org.openapis.openapi.models.operations.UpdateTestUserUpdateTestUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTestUserRequest req = new UpdateTestUserRequest("minima") {{
                requestBody = new UpdateTestUserUpdateTestUserRequest(                new String[]{{
                                    add("accusantium"),
                                    add("iure"),
                                    add("culpa"),
                                }});;
            }};            

            UpdateTestUserResponse res = sdk.sdk.updateTestUser(req, new UpdateTestUserSecurity("doloribus", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV2FlowTestUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
