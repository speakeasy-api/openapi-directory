# functions

## Overview

Operations to configure the functions associated with custom workflow actions.

### Available Operations

* [deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive](#deleteautomationv4actionsappiddefinitionidfunctionsfunctiontypefunctionidarchive) - Delete a custom action function
* [deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType](#deleteautomationv4actionsappiddefinitionidfunctionsfunctiontypearchivebyfunctiontype) - Delete a custom action function
* [getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById](#getautomationv4actionsappiddefinitionidfunctionsfunctiontypefunctionidgetbyid) - Get a custom action function
* [getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType](#getautomationv4actionsappiddefinitionidfunctionsfunctiontypegetbyfunctiontype) - Get a custom action function
* [getAutomationV4ActionsAppIdDefinitionIdFunctionsGetPage](#getautomationv4actionsappiddefinitionidfunctionsgetpage) - Get all custom action functions
* [putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace](#putautomationv4actionsappiddefinitionidfunctionsfunctiontypefunctionidcreateorreplace) - Create or replace a custom action function
* [putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType](#putautomationv4actionsappiddefinitionidfunctionsfunctiontypecreateorreplacebyfunctiontype) - Create or replace a custom action function

## deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive

Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveFunctionTypeEnum;
import org.openapis.openapi.models.operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveRequest;
import org.openapis.openapi.models.operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveResponse;
import org.openapis.openapi.models.operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveRequest req = new DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveRequest(889234, "beatae", "laudantium", DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveFunctionTypeEnum.PRE_FETCH_OPTIONS);            

            DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveResponse res = sdk.functions.deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive(req, new DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveSecurity("praesentium") {{
                developerHapikey = "YOUR_API_KEY_HERE";
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

## deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType

Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum;
import org.openapis.openapi.models.operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeRequest;
import org.openapis.openapi.models.operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeResponse;
import org.openapis.openapi.models.operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeRequest req = new DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeRequest(740098, "laboriosam", DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum.POST_FETCH_OPTIONS);            

            DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeResponse res = sdk.functions.deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType(req, new DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeSecurity("voluptatum") {{
                developerHapikey = "YOUR_API_KEY_HERE";
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

## getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById

Returns the given function for a custom workflow action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdFunctionTypeEnum;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdRequest;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdResponse;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdRequest req = new GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdRequest(622385, "hic", "expedita", GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdFunctionTypeEnum.POST_FETCH_OPTIONS);            

            GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdResponse res = sdk.functions.getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById(req, new GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdSecurity("neque") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.actionFunction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType

Returns the given function for a custom workflow action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeRequest;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeResponse;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeRequest req = new GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeRequest(677115, "nostrum", GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum.PRE_FETCH_OPTIONS);            

            GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeResponse res = sdk.functions.getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType(req, new GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeSecurity("dolorum") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.actionFunction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAutomationV4ActionsAppIdDefinitionIdFunctionsGetPage

Returns a list of all functions that are associated with the given custom workflow action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse;
import org.openapis.openapi.models.operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest req = new GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest(548361, "accusamus");            

            GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse res = sdk.functions.getAutomationV4ActionsAppIdDefinitionIdFunctionsGetPage(req, new GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity("tempora") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.collectionResponseActionFunctionIdentifierNoPaging != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace

Creates or replaces a function for a custom workflow action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum;
import org.openapis.openapi.models.operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest;
import org.openapis.openapi.models.operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse;
import org.openapis.openapi.models.operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest req = new PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest("atque", 148268, "ut", "fugiat", PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum.PRE_ACTION_EXECUTION);            

            PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse res = sdk.functions.putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace(req, new PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity("culpa") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.actionFunctionIdentifier != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType

Creates or replaces a function for a custom workflow action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum;
import org.openapis.openapi.models.operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest;
import org.openapis.openapi.models.operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse;
import org.openapis.openapi.models.operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest req = new PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest("expedita", 299643, "consequatur", PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum.PRE_FETCH_OPTIONS);            

            PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse res = sdk.functions.putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType(req, new PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity("ipsam") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.actionFunctionIdentifier != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
