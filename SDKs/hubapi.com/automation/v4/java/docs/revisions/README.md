# revisions

## Overview

Operations to retrieve the revisions for custom workflow actions.

### Available Operations

* [getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById](#getautomationv4actionsappiddefinitionidrevisionsrevisionidgetbyid) - Get a revision for a custom action
* [getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage](#getautomationv4actionsappiddefinitionidrevisionsgetpage) - Get all revisions for a custom action

## getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById

Returns the given version of a custom workflow action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest req = new GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest(24527, "voluptatum", "quas");            

            GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse res = sdk.revisions.getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById(req, new GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity("repudiandae") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.actionRevision != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage

Returns a list of revisions for a custom workflow action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest req = new GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest(361151, "et") {{
                after = "blanditiis";
                limit = 405942;
            }};            

            GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse res = sdk.revisions.getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage(req, new GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity("sed") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.collectionResponseActionRevisionForwardPaging != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
