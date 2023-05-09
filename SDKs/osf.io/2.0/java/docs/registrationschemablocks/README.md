# registrationSchemaBlocks

## Overview

Registration Schema Blocks are read-only entities, they represent question prompts and form inputs known as "blocks" that make up a Registration Schemas. Each block has a designated `block_type` that determines what type of information that Schema Block's corresponding block in the Schema Response.

### Available Operations

* [getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockId](#getschemaresponsesschemaresponseidschemablocksschemaresponseblockid) - Retrieve a Registration Schema Block
* [schemaResponseBlocksRead](#schemaresponseblocksread) - Retrieve a list of Registration Schema Blocks for a Schema Response

## getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockId

This returns a Registration Schema Block by it's ID.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Registration Schemas, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRequest;
import org.openapis.openapi.models.operations.GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRequest req = new GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRequest("voluptate", "autem");            

            GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdResponse res = sdk.registrationSchemaBlocks.getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockId(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## schemaResponseBlocksRead

This returns a list of all the Registration Schema Blocks are contained in Registration Schema.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Registration Schemas, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SchemaResponseBlocksReadRequest;
import org.openapis.openapi.models.operations.SchemaResponseBlocksReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SchemaResponseBlocksReadRequest req = new SchemaResponseBlocksReadRequest("nam");            

            SchemaResponseBlocksReadResponse res = sdk.registrationSchemaBlocks.schemaResponseBlocksRead(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
