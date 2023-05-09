# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createEngagement](#createengagement) - Triggers a new Engagement for the Flow
* [createExecution](#createexecution) - Triggers a new Execution for the Flow
* [deleteEngagement](#deleteengagement) - Delete this Engagement and all Steps relating to it.
* [deleteExecution](#deleteexecution) - Delete the Execution and all Steps relating to it.
* [deleteFlow](#deleteflow) - Delete a specific Flow.
* [fetchEngagement](#fetchengagement) - Retrieve an Engagement
* [fetchEngagementContext](#fetchengagementcontext) - Retrieve the most recent context for an Engagement.
* [fetchExecution](#fetchexecution) - Retrieve an Execution
* [fetchExecutionContext](#fetchexecutioncontext) - Retrieve the most recent context for an Execution.
* [fetchExecutionStep](#fetchexecutionstep) - Retrieve a Step.
* [fetchExecutionStepContext](#fetchexecutionstepcontext) - Retrieve the context for an Execution Step.
* [fetchFlow](#fetchflow) - Retrieve a specific Flow.
* [fetchStep](#fetchstep) - Retrieve a Step.
* [fetchStepContext](#fetchstepcontext) - Retrieve the context for an Engagement Step.
* [listEngagement](#listengagement) - Retrieve a list of all Engagements for the Flow.
* [listExecution](#listexecution) - Retrieve a list of all Executions for the Flow.
* [listExecutionStep](#listexecutionstep) - Retrieve a list of all Steps for an Execution.
* [listFlow](#listflow) - Retrieve a list of all Flows.
* [listStep](#liststep) - Retrieve a list of all Steps for an Engagement.
* [updateExecution](#updateexecution) - Update the status of an Execution to `ended`.

## createEngagement

Triggers a new Engagement for the Flow

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEngagementCreateEngagementRequest;
import org.openapis.openapi.models.operations.CreateEngagementRequest;
import org.openapis.openapi.models.operations.CreateEngagementResponse;
import org.openapis.openapi.models.operations.CreateEngagementSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateEngagementRequest req = new CreateEngagementRequest("corrupti") {{
                requestBody = new CreateEngagementCreateEngagementRequest("illum", "vel") {{
                    parameters = "error";
                }};;
            }};            

            CreateEngagementResponse res = sdk.sdk.createEngagement(req, new CreateEngagementSecurity("deserunt", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV1FlowEngagement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            CreateExecutionRequest req = new CreateExecutionRequest("iure") {{
                requestBody = new CreateExecutionCreateExecutionRequest("magnam", "debitis") {{
                    parameters = "ipsa";
                }};;
            }};            

            CreateExecutionResponse res = sdk.sdk.createExecution(req, new CreateExecutionSecurity("delectus", "tempora") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV1FlowExecution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEngagement

Delete this Engagement and all Steps relating to it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEngagementRequest;
import org.openapis.openapi.models.operations.DeleteEngagementResponse;
import org.openapis.openapi.models.operations.DeleteEngagementSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteEngagementRequest req = new DeleteEngagementRequest("suscipit", "molestiae");            

            DeleteEngagementResponse res = sdk.sdk.deleteEngagement(req, new DeleteEngagementSecurity("minus", "placeat") {{
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

            DeleteExecutionRequest req = new DeleteExecutionRequest("voluptatum", "iusto");            

            DeleteExecutionResponse res = sdk.sdk.deleteExecution(req, new DeleteExecutionSecurity("excepturi", "nisi") {{
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

            DeleteFlowRequest req = new DeleteFlowRequest("recusandae");            

            DeleteFlowResponse res = sdk.sdk.deleteFlow(req, new DeleteFlowSecurity("temporibus", "ab") {{
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

## fetchEngagement

Retrieve an Engagement

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchEngagementRequest;
import org.openapis.openapi.models.operations.FetchEngagementResponse;
import org.openapis.openapi.models.operations.FetchEngagementSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchEngagementRequest req = new FetchEngagementRequest("quis", "veritatis");            

            FetchEngagementResponse res = sdk.sdk.fetchEngagement(req, new FetchEngagementSecurity("deserunt", "perferendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV1FlowEngagement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchEngagementContext

Retrieve the most recent context for an Engagement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchEngagementContextRequest;
import org.openapis.openapi.models.operations.FetchEngagementContextResponse;
import org.openapis.openapi.models.operations.FetchEngagementContextSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchEngagementContextRequest req = new FetchEngagementContextRequest("ipsam", "repellendus");            

            FetchEngagementContextResponse res = sdk.sdk.fetchEngagementContext(req, new FetchEngagementContextSecurity("sapiente", "quo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV1FlowEngagementEngagementContext != null) {
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

            FetchExecutionRequest req = new FetchExecutionRequest("odit", "at");            

            FetchExecutionResponse res = sdk.sdk.fetchExecution(req, new FetchExecutionSecurity("at", "maiores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV1FlowExecution != null) {
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

            FetchExecutionContextRequest req = new FetchExecutionContextRequest("molestiae", "quod");            

            FetchExecutionContextResponse res = sdk.sdk.fetchExecutionContext(req, new FetchExecutionContextSecurity("quod", "esse") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV1FlowExecutionExecutionContext != null) {
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

            FetchExecutionStepRequest req = new FetchExecutionStepRequest("totam", "porro", "dolorum");            

            FetchExecutionStepResponse res = sdk.sdk.fetchExecutionStep(req, new FetchExecutionStepSecurity("dicta", "nam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV1FlowExecutionExecutionStep != null) {
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

            FetchExecutionStepContextRequest req = new FetchExecutionStepContextRequest("officia", "occaecati", "fugit");            

            FetchExecutionStepContextResponse res = sdk.sdk.fetchExecutionStepContext(req, new FetchExecutionStepContextSecurity("deleniti", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV1FlowExecutionExecutionStepExecutionStepContext != null) {
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

            FetchFlowRequest req = new FetchFlowRequest("optio");            

            FetchFlowResponse res = sdk.sdk.fetchFlow(req, new FetchFlowSecurity("totam", "beatae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV1Flow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchStep

Retrieve a Step.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchStepRequest;
import org.openapis.openapi.models.operations.FetchStepResponse;
import org.openapis.openapi.models.operations.FetchStepSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchStepRequest req = new FetchStepRequest("commodi", "molestiae", "modi");            

            FetchStepResponse res = sdk.sdk.fetchStep(req, new FetchStepSecurity("qui", "impedit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV1FlowEngagementStep != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchStepContext

Retrieve the context for an Engagement Step.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchStepContextRequest;
import org.openapis.openapi.models.operations.FetchStepContextResponse;
import org.openapis.openapi.models.operations.FetchStepContextSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchStepContextRequest req = new FetchStepContextRequest("cum", "esse", "ipsum");            

            FetchStepContextResponse res = sdk.sdk.fetchStepContext(req, new FetchStepContextSecurity("excepturi", "aspernatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV1FlowEngagementStepStepContext != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEngagement

Retrieve a list of all Engagements for the Flow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEngagementRequest;
import org.openapis.openapi.models.operations.ListEngagementResponse;
import org.openapis.openapi.models.operations.ListEngagementSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEngagementRequest req = new ListEngagementRequest("perferendis") {{
                page = 324141L;
                pageSize = 617636L;
                pageToken = "sed";
            }};            

            ListEngagementResponse res = sdk.sdk.listEngagement(req, new ListEngagementSecurity("iste", "dolor") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listEngagementResponse != null) {
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

            ListExecutionRequest req = new ListExecutionRequest("natus") {{
                dateCreatedFrom = OffsetDateTime.parse("2022-01-21T12:46:00.641Z");
                dateCreatedTo = OffsetDateTime.parse("2020-12-15T09:45:44.943Z");
                page = 449950L;
                pageSize = 359508L;
                pageToken = "iste";
            }};            

            ListExecutionResponse res = sdk.sdk.listExecution(req, new ListExecutionSecurity("iure", "saepe") {{
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

            ListExecutionStepRequest req = new ListExecutionStepRequest("quidem", "architecto") {{
                page = 60225L;
                pageSize = 969810L;
                pageToken = "est";
            }};            

            ListExecutionStepResponse res = sdk.sdk.listExecutionStep(req, new ListExecutionStepSecurity("mollitia", "laborum") {{
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
                page = 170909L;
                pageSize = 210382L;
                pageToken = "corporis";
            }};            

            ListFlowResponse res = sdk.sdk.listFlow(req, new ListFlowSecurity("explicabo", "nobis") {{
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

## listStep

Retrieve a list of all Steps for an Engagement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStepRequest;
import org.openapis.openapi.models.operations.ListStepResponse;
import org.openapis.openapi.models.operations.ListStepSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListStepRequest req = new ListStepRequest("enim", "omnis") {{
                page = 363711L;
                pageSize = 325047L;
                pageToken = "excepturi";
            }};            

            ListStepResponse res = sdk.sdk.listStep(req, new ListStepSecurity("accusantium", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listStepResponse != null) {
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

            UpdateExecutionRequest req = new UpdateExecutionRequest("culpa", "doloribus") {{
                requestBody = new UpdateExecutionUpdateExecutionRequest(ExecutionEnumStatusEnum.ENDED);;
            }};            

            UpdateExecutionResponse res = sdk.sdk.updateExecution(req, new UpdateExecutionSecurity("architecto", "mollitia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV1FlowExecution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
