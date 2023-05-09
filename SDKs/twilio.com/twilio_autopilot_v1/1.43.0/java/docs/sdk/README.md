# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createAssistant](#createassistant)
* [createField](#createfield)
* [createFieldType](#createfieldtype)
* [createFieldValue](#createfieldvalue)
* [createModelBuild](#createmodelbuild)
* [createQuery](#createquery)
* [createSample](#createsample)
* [createTask](#createtask)
* [createWebhook](#createwebhook)
* [deleteAssistant](#deleteassistant)
* [deleteField](#deletefield)
* [deleteFieldType](#deletefieldtype)
* [deleteFieldValue](#deletefieldvalue)
* [deleteModelBuild](#deletemodelbuild)
* [deleteQuery](#deletequery)
* [deleteSample](#deletesample)
* [deleteTask](#deletetask)
* [deleteWebhook](#deletewebhook)
* [fetchAssistant](#fetchassistant)
* [fetchDefaults](#fetchdefaults)
* [fetchDialogue](#fetchdialogue)
* [fetchField](#fetchfield)
* [fetchFieldType](#fetchfieldtype)
* [fetchFieldValue](#fetchfieldvalue)
* [fetchModelBuild](#fetchmodelbuild)
* [fetchQuery](#fetchquery)
* [fetchSample](#fetchsample)
* [fetchStyleSheet](#fetchstylesheet) - Returns Style sheet JSON object for the Assistant
* [fetchTask](#fetchtask)
* [fetchTaskActions](#fetchtaskactions) - Returns JSON actions for the Task.
* [fetchTaskStatistics](#fetchtaskstatistics)
* [fetchWebhook](#fetchwebhook)
* [listAssistant](#listassistant)
* [listField](#listfield)
* [listFieldType](#listfieldtype)
* [listFieldValue](#listfieldvalue)
* [listModelBuild](#listmodelbuild)
* [listQuery](#listquery)
* [listSample](#listsample)
* [listTask](#listtask)
* [listWebhook](#listwebhook)
* [updateAssistant](#updateassistant)
* [updateDefaults](#updatedefaults)
* [updateFieldType](#updatefieldtype)
* [updateModelBuild](#updatemodelbuild)
* [updateQuery](#updatequery)
* [updateRestoreAssistant](#updaterestoreassistant)
* [updateSample](#updatesample)
* [updateStyleSheet](#updatestylesheet) - Updates the style sheet for an Assistant identified by `assistant_sid`.
* [updateTask](#updatetask)
* [updateTaskActions](#updatetaskactions) - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* [updateWebhook](#updatewebhook)

## createAssistant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssistantCreateAssistantRequest;
import org.openapis.openapi.models.operations.CreateAssistantResponse;
import org.openapis.openapi.models.operations.CreateAssistantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAssistantCreateAssistantRequest req = new CreateAssistantCreateAssistantRequest() {{
                callbackEvents = "suscipit";
                callbackUrl = "http://fond-teen.com";
                defaults = "delectus";
                friendlyName = "tempora";
                logQueries = false;
                styleSheet = "suscipit";
                uniqueName = "molestiae";
            }};            

            CreateAssistantResponse res = sdk.sdk.createAssistant(req, new CreateAssistantSecurity("minus", "placeat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1Assistant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createField

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFieldCreateFieldRequest;
import org.openapis.openapi.models.operations.CreateFieldRequest;
import org.openapis.openapi.models.operations.CreateFieldResponse;
import org.openapis.openapi.models.operations.CreateFieldSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFieldRequest req = new CreateFieldRequest("voluptatum", "iusto") {{
                requestBody = new CreateFieldCreateFieldRequest("excepturi", "nisi");;
            }};            

            CreateFieldResponse res = sdk.sdk.createField(req, new CreateFieldSecurity("recusandae", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantTaskField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFieldType

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFieldTypeCreateFieldTypeRequest;
import org.openapis.openapi.models.operations.CreateFieldTypeRequest;
import org.openapis.openapi.models.operations.CreateFieldTypeResponse;
import org.openapis.openapi.models.operations.CreateFieldTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFieldTypeRequest req = new CreateFieldTypeRequest("ab") {{
                requestBody = new CreateFieldTypeCreateFieldTypeRequest("quis") {{
                    friendlyName = "veritatis";
                }};;
            }};            

            CreateFieldTypeResponse res = sdk.sdk.createFieldType(req, new CreateFieldTypeSecurity("deserunt", "perferendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantFieldType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFieldValue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFieldValueCreateFieldValueRequest;
import org.openapis.openapi.models.operations.CreateFieldValueRequest;
import org.openapis.openapi.models.operations.CreateFieldValueResponse;
import org.openapis.openapi.models.operations.CreateFieldValueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFieldValueRequest req = new CreateFieldValueRequest("ipsam", "repellendus") {{
                requestBody = new CreateFieldValueCreateFieldValueRequest("sapiente", "quo") {{
                    synonymOf = "odit";
                }};;
            }};            

            CreateFieldValueResponse res = sdk.sdk.createFieldValue(req, new CreateFieldValueSecurity("at", "at") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantFieldTypeFieldValue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createModelBuild

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateModelBuildCreateModelBuildRequest;
import org.openapis.openapi.models.operations.CreateModelBuildRequest;
import org.openapis.openapi.models.operations.CreateModelBuildResponse;
import org.openapis.openapi.models.operations.CreateModelBuildSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateModelBuildRequest req = new CreateModelBuildRequest("maiores") {{
                requestBody = new CreateModelBuildCreateModelBuildRequest() {{
                    statusCallback = "http://starchy-shorts.info";
                    uniqueName = "totam";
                }};;
            }};            

            CreateModelBuildResponse res = sdk.sdk.createModelBuild(req, new CreateModelBuildSecurity("porro", "dolorum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantModelBuild != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createQuery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateQueryCreateQueryRequest;
import org.openapis.openapi.models.operations.CreateQueryRequest;
import org.openapis.openapi.models.operations.CreateQueryResponse;
import org.openapis.openapi.models.operations.CreateQuerySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateQueryRequest req = new CreateQueryRequest("dicta") {{
                requestBody = new CreateQueryCreateQueryRequest("nam", "officia") {{
                    modelBuild = "occaecati";
                    tasks = "fugit";
                }};;
            }};            

            CreateQueryResponse res = sdk.sdk.createQuery(req, new CreateQuerySecurity("deleniti", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSample

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSampleCreateSampleRequest;
import org.openapis.openapi.models.operations.CreateSampleRequest;
import org.openapis.openapi.models.operations.CreateSampleResponse;
import org.openapis.openapi.models.operations.CreateSampleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSampleRequest req = new CreateSampleRequest("optio", "totam") {{
                requestBody = new CreateSampleCreateSampleRequest("beatae", "commodi") {{
                    sourceChannel = "molestiae";
                }};;
            }};            

            CreateSampleResponse res = sdk.sdk.createSample(req, new CreateSampleSecurity("modi", "qui") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantTaskSample != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTask

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTaskCreateTaskRequest;
import org.openapis.openapi.models.operations.CreateTaskRequest;
import org.openapis.openapi.models.operations.CreateTaskResponse;
import org.openapis.openapi.models.operations.CreateTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTaskRequest req = new CreateTaskRequest("impedit") {{
                requestBody = new CreateTaskCreateTaskRequest("cum") {{
                    actions = "esse";
                    actionsUrl = "http://nifty-case.com";
                    friendlyName = "ad";
                }};;
            }};            

            CreateTaskResponse res = sdk.sdk.createTask(req, new CreateTaskSecurity("natus", "sed") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantTask != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWebhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWebhookCreateWebhookRequest;
import org.openapis.openapi.models.operations.CreateWebhookRequest;
import org.openapis.openapi.models.operations.CreateWebhookResponse;
import org.openapis.openapi.models.operations.CreateWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateWebhookRequest req = new CreateWebhookRequest("iste") {{
                requestBody = new CreateWebhookCreateWebhookRequest("dolor", "natus", "http://wary-thistle.net") {{
                    webhookMethod = "in";
                }};;
            }};            

            CreateWebhookResponse res = sdk.sdk.createWebhook(req, new CreateWebhookSecurity("corporis", "iste") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAssistant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAssistantRequest;
import org.openapis.openapi.models.operations.DeleteAssistantResponse;
import org.openapis.openapi.models.operations.DeleteAssistantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAssistantRequest req = new DeleteAssistantRequest("iure");            

            DeleteAssistantResponse res = sdk.sdk.deleteAssistant(req, new DeleteAssistantSecurity("saepe", "quidem") {{
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

## deleteField

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFieldRequest;
import org.openapis.openapi.models.operations.DeleteFieldResponse;
import org.openapis.openapi.models.operations.DeleteFieldSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFieldRequest req = new DeleteFieldRequest("architecto", "ipsa", "reiciendis");            

            DeleteFieldResponse res = sdk.sdk.deleteField(req, new DeleteFieldSecurity("est", "mollitia") {{
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

## deleteFieldType

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFieldTypeRequest;
import org.openapis.openapi.models.operations.DeleteFieldTypeResponse;
import org.openapis.openapi.models.operations.DeleteFieldTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFieldTypeRequest req = new DeleteFieldTypeRequest("laborum", "dolores");            

            DeleteFieldTypeResponse res = sdk.sdk.deleteFieldType(req, new DeleteFieldTypeSecurity("dolorem", "corporis") {{
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

## deleteFieldValue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFieldValueRequest;
import org.openapis.openapi.models.operations.DeleteFieldValueResponse;
import org.openapis.openapi.models.operations.DeleteFieldValueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFieldValueRequest req = new DeleteFieldValueRequest("explicabo", "nobis", "enim");            

            DeleteFieldValueResponse res = sdk.sdk.deleteFieldValue(req, new DeleteFieldValueSecurity("omnis", "nemo") {{
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

## deleteModelBuild

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteModelBuildRequest;
import org.openapis.openapi.models.operations.DeleteModelBuildResponse;
import org.openapis.openapi.models.operations.DeleteModelBuildSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteModelBuildRequest req = new DeleteModelBuildRequest("minima", "excepturi");            

            DeleteModelBuildResponse res = sdk.sdk.deleteModelBuild(req, new DeleteModelBuildSecurity("accusantium", "iure") {{
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

## deleteQuery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteQueryRequest;
import org.openapis.openapi.models.operations.DeleteQueryResponse;
import org.openapis.openapi.models.operations.DeleteQuerySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteQueryRequest req = new DeleteQueryRequest("culpa", "doloribus");            

            DeleteQueryResponse res = sdk.sdk.deleteQuery(req, new DeleteQuerySecurity("sapiente", "architecto") {{
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

## deleteSample

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSampleRequest;
import org.openapis.openapi.models.operations.DeleteSampleResponse;
import org.openapis.openapi.models.operations.DeleteSampleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSampleRequest req = new DeleteSampleRequest("mollitia", "dolorem", "culpa");            

            DeleteSampleResponse res = sdk.sdk.deleteSample(req, new DeleteSampleSecurity("consequuntur", "repellat") {{
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

## deleteTask

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTaskRequest;
import org.openapis.openapi.models.operations.DeleteTaskResponse;
import org.openapis.openapi.models.operations.DeleteTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTaskRequest req = new DeleteTaskRequest("mollitia", "occaecati");            

            DeleteTaskResponse res = sdk.sdk.deleteTask(req, new DeleteTaskSecurity("numquam", "commodi") {{
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

## deleteWebhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhookRequest;
import org.openapis.openapi.models.operations.DeleteWebhookResponse;
import org.openapis.openapi.models.operations.DeleteWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWebhookRequest req = new DeleteWebhookRequest("quam", "molestiae");            

            DeleteWebhookResponse res = sdk.sdk.deleteWebhook(req, new DeleteWebhookSecurity("velit", "error") {{
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

## fetchAssistant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAssistantRequest;
import org.openapis.openapi.models.operations.FetchAssistantResponse;
import org.openapis.openapi.models.operations.FetchAssistantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAssistantRequest req = new FetchAssistantRequest("quia");            

            FetchAssistantResponse res = sdk.sdk.fetchAssistant(req, new FetchAssistantSecurity("quis", "vitae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1Assistant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDefaults

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDefaultsRequest;
import org.openapis.openapi.models.operations.FetchDefaultsResponse;
import org.openapis.openapi.models.operations.FetchDefaultsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDefaultsRequest req = new FetchDefaultsRequest("laborum");            

            FetchDefaultsResponse res = sdk.sdk.fetchDefaults(req, new FetchDefaultsSecurity("animi", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantDefaults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDialogue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDialogueRequest;
import org.openapis.openapi.models.operations.FetchDialogueResponse;
import org.openapis.openapi.models.operations.FetchDialogueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDialogueRequest req = new FetchDialogueRequest("odit", "quo");            

            FetchDialogueResponse res = sdk.sdk.fetchDialogue(req, new FetchDialogueSecurity("sequi", "tenetur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantDialogue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchField

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFieldRequest;
import org.openapis.openapi.models.operations.FetchFieldResponse;
import org.openapis.openapi.models.operations.FetchFieldSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFieldRequest req = new FetchFieldRequest("ipsam", "id", "possimus");            

            FetchFieldResponse res = sdk.sdk.fetchField(req, new FetchFieldSecurity("aut", "quasi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantTaskField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchFieldType

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFieldTypeRequest;
import org.openapis.openapi.models.operations.FetchFieldTypeResponse;
import org.openapis.openapi.models.operations.FetchFieldTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFieldTypeRequest req = new FetchFieldTypeRequest("error", "temporibus");            

            FetchFieldTypeResponse res = sdk.sdk.fetchFieldType(req, new FetchFieldTypeSecurity("laborum", "quasi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantFieldType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchFieldValue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFieldValueRequest;
import org.openapis.openapi.models.operations.FetchFieldValueResponse;
import org.openapis.openapi.models.operations.FetchFieldValueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFieldValueRequest req = new FetchFieldValueRequest("reiciendis", "voluptatibus", "vero");            

            FetchFieldValueResponse res = sdk.sdk.fetchFieldValue(req, new FetchFieldValueSecurity("nihil", "praesentium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantFieldTypeFieldValue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchModelBuild

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchModelBuildRequest;
import org.openapis.openapi.models.operations.FetchModelBuildResponse;
import org.openapis.openapi.models.operations.FetchModelBuildSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchModelBuildRequest req = new FetchModelBuildRequest("voluptatibus", "ipsa");            

            FetchModelBuildResponse res = sdk.sdk.fetchModelBuild(req, new FetchModelBuildSecurity("omnis", "voluptate") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantModelBuild != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchQuery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchQueryRequest;
import org.openapis.openapi.models.operations.FetchQueryResponse;
import org.openapis.openapi.models.operations.FetchQuerySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchQueryRequest req = new FetchQueryRequest("cum", "perferendis");            

            FetchQueryResponse res = sdk.sdk.fetchQuery(req, new FetchQuerySecurity("doloremque", "reprehenderit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSample

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSampleRequest;
import org.openapis.openapi.models.operations.FetchSampleResponse;
import org.openapis.openapi.models.operations.FetchSampleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSampleRequest req = new FetchSampleRequest("ut", "maiores", "dicta");            

            FetchSampleResponse res = sdk.sdk.fetchSample(req, new FetchSampleSecurity("corporis", "dolore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantTaskSample != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchStyleSheet

Returns Style sheet JSON object for the Assistant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchStyleSheetRequest;
import org.openapis.openapi.models.operations.FetchStyleSheetResponse;
import org.openapis.openapi.models.operations.FetchStyleSheetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchStyleSheetRequest req = new FetchStyleSheetRequest("iusto");            

            FetchStyleSheetResponse res = sdk.sdk.fetchStyleSheet(req, new FetchStyleSheetSecurity("dicta", "harum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantStyleSheet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTask

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTaskRequest;
import org.openapis.openapi.models.operations.FetchTaskResponse;
import org.openapis.openapi.models.operations.FetchTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTaskRequest req = new FetchTaskRequest("enim", "accusamus");            

            FetchTaskResponse res = sdk.sdk.fetchTask(req, new FetchTaskSecurity("commodi", "repudiandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantTask != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTaskActions

Returns JSON actions for the Task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTaskActionsRequest;
import org.openapis.openapi.models.operations.FetchTaskActionsResponse;
import org.openapis.openapi.models.operations.FetchTaskActionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTaskActionsRequest req = new FetchTaskActionsRequest("quae", "ipsum");            

            FetchTaskActionsResponse res = sdk.sdk.fetchTaskActions(req, new FetchTaskActionsSecurity("quidem", "molestias") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantTaskTaskActions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTaskStatistics

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTaskStatisticsRequest;
import org.openapis.openapi.models.operations.FetchTaskStatisticsResponse;
import org.openapis.openapi.models.operations.FetchTaskStatisticsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTaskStatisticsRequest req = new FetchTaskStatisticsRequest("excepturi", "pariatur");            

            FetchTaskStatisticsResponse res = sdk.sdk.fetchTaskStatistics(req, new FetchTaskStatisticsSecurity("modi", "praesentium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantTaskTaskStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWebhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWebhookRequest;
import org.openapis.openapi.models.operations.FetchWebhookResponse;
import org.openapis.openapi.models.operations.FetchWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWebhookRequest req = new FetchWebhookRequest("rem", "voluptates");            

            FetchWebhookResponse res = sdk.sdk.fetchWebhook(req, new FetchWebhookSecurity("quasi", "repudiandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssistant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssistantRequest;
import org.openapis.openapi.models.operations.ListAssistantResponse;
import org.openapis.openapi.models.operations.ListAssistantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAssistantRequest req = new ListAssistantRequest() {{
                page = 575947L;
                pageSize = 83112L;
                pageToken = "itaque";
            }};            

            ListAssistantResponse res = sdk.sdk.listAssistant(req, new ListAssistantSecurity("incidunt", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAssistantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listField

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFieldRequest;
import org.openapis.openapi.models.operations.ListFieldResponse;
import org.openapis.openapi.models.operations.ListFieldSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFieldRequest req = new ListFieldRequest("consequatur", "est") {{
                page = 842342L;
                pageSize = 131797L;
                pageToken = "deserunt";
            }};            

            ListFieldResponse res = sdk.sdk.listField(req, new ListFieldSecurity("distinctio", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listFieldResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFieldType

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFieldTypeRequest;
import org.openapis.openapi.models.operations.ListFieldTypeResponse;
import org.openapis.openapi.models.operations.ListFieldTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFieldTypeRequest req = new ListFieldTypeRequest("labore") {{
                page = 264730L;
                pageSize = 183191L;
                pageToken = "aliquid";
            }};            

            ListFieldTypeResponse res = sdk.sdk.listFieldType(req, new ListFieldTypeSecurity("cupiditate", "quos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listFieldTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFieldValue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFieldValueRequest;
import org.openapis.openapi.models.operations.ListFieldValueResponse;
import org.openapis.openapi.models.operations.ListFieldValueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFieldValueRequest req = new ListFieldValueRequest("perferendis", "magni") {{
                language = "assumenda";
                page = 369808L;
                pageSize = 4695L;
                pageToken = "fugit";
            }};            

            ListFieldValueResponse res = sdk.sdk.listFieldValue(req, new ListFieldValueSecurity("dolorum", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listFieldValueResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listModelBuild

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListModelBuildRequest;
import org.openapis.openapi.models.operations.ListModelBuildResponse;
import org.openapis.openapi.models.operations.ListModelBuildSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListModelBuildRequest req = new ListModelBuildRequest("tempora") {{
                page = 703737L;
                pageSize = 735194L;
                pageToken = "labore";
            }};            

            ListModelBuildResponse res = sdk.sdk.listModelBuild(req, new ListModelBuildSecurity("delectus", "eum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listModelBuildResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listQuery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListQueryRequest;
import org.openapis.openapi.models.operations.ListQueryResponse;
import org.openapis.openapi.models.operations.ListQuerySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListQueryRequest req = new ListQueryRequest("non") {{
                dialogueSid = "eligendi";
                language = "sint";
                modelBuild = "aliquid";
                page = 592042L;
                pageSize = 896039L;
                pageToken = "sint";
                status = "officia";
            }};            

            ListQueryResponse res = sdk.sdk.listQuery(req, new ListQuerySecurity("dolor", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSample

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSampleRequest;
import org.openapis.openapi.models.operations.ListSampleResponse;
import org.openapis.openapi.models.operations.ListSampleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSampleRequest req = new ListSampleRequest("a", "dolorum") {{
                language = "in";
                page = 449198L;
                pageSize = 846409L;
                pageToken = "maiores";
            }};            

            ListSampleResponse res = sdk.sdk.listSample(req, new ListSampleSecurity("rerum", "dicta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSampleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTask

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTaskRequest;
import org.openapis.openapi.models.operations.ListTaskResponse;
import org.openapis.openapi.models.operations.ListTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTaskRequest req = new ListTaskRequest("magnam") {{
                page = 767024L;
                pageSize = 813798L;
                pageToken = "ea";
            }};            

            ListTaskResponse res = sdk.sdk.listTask(req, new ListTaskSecurity("aliquid", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWebhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWebhookRequest;
import org.openapis.openapi.models.operations.ListWebhookResponse;
import org.openapis.openapi.models.operations.ListWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListWebhookRequest req = new ListWebhookRequest("accusamus") {{
                page = 249796L;
                pageSize = 581273L;
                pageToken = "enim";
            }};            

            ListWebhookResponse res = sdk.sdk.listWebhook(req, new ListWebhookSecurity("accusamus", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAssistant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAssistantRequest;
import org.openapis.openapi.models.operations.UpdateAssistantResponse;
import org.openapis.openapi.models.operations.UpdateAssistantSecurity;
import org.openapis.openapi.models.operations.UpdateAssistantUpdateAssistantRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAssistantRequest req = new UpdateAssistantRequest("quidem") {{
                requestBody = new UpdateAssistantUpdateAssistantRequest() {{
                    callbackEvents = "provident";
                    callbackUrl = "https://pungent-latter.name";
                    defaults = "sapiente";
                    developmentStage = "amet";
                    friendlyName = "deserunt";
                    logQueries = false;
                    styleSheet = "nisi";
                    uniqueName = "vel";
                }};;
            }};            

            UpdateAssistantResponse res = sdk.sdk.updateAssistant(req, new UpdateAssistantSecurity("natus", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1Assistant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDefaults

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDefaultsRequest;
import org.openapis.openapi.models.operations.UpdateDefaultsResponse;
import org.openapis.openapi.models.operations.UpdateDefaultsSecurity;
import org.openapis.openapi.models.operations.UpdateDefaultsUpdateDefaultsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDefaultsRequest req = new UpdateDefaultsRequest("molestiae") {{
                requestBody = new UpdateDefaultsUpdateDefaultsRequest() {{
                    defaults = "perferendis";
                }};;
            }};            

            UpdateDefaultsResponse res = sdk.sdk.updateDefaults(req, new UpdateDefaultsSecurity("nihil", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantDefaults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFieldType

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFieldTypeRequest;
import org.openapis.openapi.models.operations.UpdateFieldTypeResponse;
import org.openapis.openapi.models.operations.UpdateFieldTypeSecurity;
import org.openapis.openapi.models.operations.UpdateFieldTypeUpdateFieldTypeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateFieldTypeRequest req = new UpdateFieldTypeRequest("distinctio", "id") {{
                requestBody = new UpdateFieldTypeUpdateFieldTypeRequest() {{
                    friendlyName = "labore";
                    uniqueName = "labore";
                }};;
            }};            

            UpdateFieldTypeResponse res = sdk.sdk.updateFieldType(req, new UpdateFieldTypeSecurity("suscipit", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantFieldType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateModelBuild

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateModelBuildRequest;
import org.openapis.openapi.models.operations.UpdateModelBuildResponse;
import org.openapis.openapi.models.operations.UpdateModelBuildSecurity;
import org.openapis.openapi.models.operations.UpdateModelBuildUpdateModelBuildRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateModelBuildRequest req = new UpdateModelBuildRequest("nobis", "eum") {{
                requestBody = new UpdateModelBuildUpdateModelBuildRequest() {{
                    uniqueName = "vero";
                }};;
            }};            

            UpdateModelBuildResponse res = sdk.sdk.updateModelBuild(req, new UpdateModelBuildSecurity("aspernatur", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantModelBuild != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateQuery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateQueryRequest;
import org.openapis.openapi.models.operations.UpdateQueryResponse;
import org.openapis.openapi.models.operations.UpdateQuerySecurity;
import org.openapis.openapi.models.operations.UpdateQueryUpdateQueryRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateQueryRequest req = new UpdateQueryRequest("magnam", "et") {{
                requestBody = new UpdateQueryUpdateQueryRequest() {{
                    sampleSid = "excepturi";
                    status = "ullam";
                }};;
            }};            

            UpdateQueryResponse res = sdk.sdk.updateQuery(req, new UpdateQuerySecurity("provident", "quos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRestoreAssistant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRestoreAssistantResponse;
import org.openapis.openapi.models.operations.UpdateRestoreAssistantSecurity;
import org.openapis.openapi.models.operations.UpdateRestoreAssistantUpdateRestoreAssistantRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRestoreAssistantUpdateRestoreAssistantRequest req = new UpdateRestoreAssistantUpdateRestoreAssistantRequest("sint");            

            UpdateRestoreAssistantResponse res = sdk.sdk.updateRestoreAssistant(req, new UpdateRestoreAssistantSecurity("accusantium", "mollitia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1RestoreAssistant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSample

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSampleRequest;
import org.openapis.openapi.models.operations.UpdateSampleResponse;
import org.openapis.openapi.models.operations.UpdateSampleSecurity;
import org.openapis.openapi.models.operations.UpdateSampleUpdateSampleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSampleRequest req = new UpdateSampleRequest("reiciendis", "mollitia", "ad") {{
                requestBody = new UpdateSampleUpdateSampleRequest() {{
                    language = "eum";
                    sourceChannel = "dolor";
                    taggedText = "necessitatibus";
                }};;
            }};            

            UpdateSampleResponse res = sdk.sdk.updateSample(req, new UpdateSampleSecurity("odit", "nemo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantTaskSample != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStyleSheet

Updates the style sheet for an Assistant identified by `assistant_sid`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStyleSheetRequest;
import org.openapis.openapi.models.operations.UpdateStyleSheetResponse;
import org.openapis.openapi.models.operations.UpdateStyleSheetSecurity;
import org.openapis.openapi.models.operations.UpdateStyleSheetUpdateStyleSheetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateStyleSheetRequest req = new UpdateStyleSheetRequest("quasi") {{
                requestBody = new UpdateStyleSheetUpdateStyleSheetRequest() {{
                    styleSheet = "iure";
                }};;
            }};            

            UpdateStyleSheetResponse res = sdk.sdk.updateStyleSheet(req, new UpdateStyleSheetSecurity("doloribus", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantStyleSheet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTask

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTaskRequest;
import org.openapis.openapi.models.operations.UpdateTaskResponse;
import org.openapis.openapi.models.operations.UpdateTaskSecurity;
import org.openapis.openapi.models.operations.UpdateTaskUpdateTaskRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTaskRequest req = new UpdateTaskRequest("eius", "maxime") {{
                requestBody = new UpdateTaskUpdateTaskRequest() {{
                    actions = "deleniti";
                    actionsUrl = "https://ironclad-bowler.com";
                    friendlyName = "repudiandae";
                    uniqueName = "ullam";
                }};;
            }};            

            UpdateTaskResponse res = sdk.sdk.updateTask(req, new UpdateTaskSecurity("expedita", "nihil") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantTask != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTaskActions

Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTaskActionsRequest;
import org.openapis.openapi.models.operations.UpdateTaskActionsResponse;
import org.openapis.openapi.models.operations.UpdateTaskActionsSecurity;
import org.openapis.openapi.models.operations.UpdateTaskActionsUpdateTaskActionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTaskActionsRequest req = new UpdateTaskActionsRequest("repellat", "quibusdam") {{
                requestBody = new UpdateTaskActionsUpdateTaskActionsRequest() {{
                    actions = "sed";
                }};;
            }};            

            UpdateTaskActionsResponse res = sdk.sdk.updateTaskActions(req, new UpdateTaskActionsSecurity("saepe", "pariatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantTaskTaskActions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWebhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWebhookRequest;
import org.openapis.openapi.models.operations.UpdateWebhookResponse;
import org.openapis.openapi.models.operations.UpdateWebhookSecurity;
import org.openapis.openapi.models.operations.UpdateWebhookUpdateWebhookRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateWebhookRequest req = new UpdateWebhookRequest("accusantium", "consequuntur") {{
                requestBody = new UpdateWebhookUpdateWebhookRequest() {{
                    events = "praesentium";
                    uniqueName = "natus";
                    webhookMethod = "magni";
                    webhookUrl = "http://sore-statin.org";
                }};;
            }};            

            UpdateWebhookResponse res = sdk.sdk.updateWebhook(req, new UpdateWebhookSecurity("maxime", "ea") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1AssistantWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
