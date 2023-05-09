# Batch

### Available Operations

* [Batch](#batch)

## Batch

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Batch.Batch(ctx, operations.BatchBatchPayloadSchema{
        Defaults: &operations.BatchBatchPayloadSchemaDefaults{
            Body: map[string]interface{}{
                "excepturi": "accusantium",
                "iure": "culpa",
            },
            Headers: map[string]interface{}{
                "sapiente": "architecto",
                "mollitia": "dolorem",
                "culpa": "consequuntur",
                "repellat": "mollitia",
            },
            Method: operations.BatchBatchPayloadSchemaDefaultsMethodEnumPost.ToPointer(),
            Path: sdk.String("numquam"),
        },
        Requests: []BatchBatchPayloadSchemaRequests{
            operations.BatchBatchPayloadSchemaRequests{
                Body: map[string]interface{}{
                    "molestiae": "velit",
                    "error": "quia",
                },
                Headers: map[string]interface{}{
                    "vitae": "laborum",
                    "animi": "enim",
                },
                Method: operations.BatchBatchPayloadSchemaRequestsMethodEnumGet.ToPointer(),
                Path: "quo",
            },
            operations.BatchBatchPayloadSchemaRequests{
                Body: map[string]interface{}{
                    "tenetur": "ipsam",
                },
                Headers: map[string]interface{}{
                    "possimus": "aut",
                    "quasi": "error",
                    "temporibus": "laborum",
                },
                Method: operations.BatchBatchPayloadSchemaRequestsMethodEnumGet.ToPointer(),
                Path: "reiciendis",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchResponseBodySchema != nil {
        // handle response
    }
}
```
