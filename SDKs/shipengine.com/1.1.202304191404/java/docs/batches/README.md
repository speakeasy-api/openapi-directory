# batches

## Overview

batches


### Available Operations

* [addToBatch](#addtobatch) - Add to a Batch
* [createBatch](#createbatch) - Create A Batch
* [deleteBatch](#deletebatch) - Delete Batch By Id
* [getBatchByExternalId](#getbatchbyexternalid) - Get Batch By External ID
* [getBatchById](#getbatchbyid) - Get Batch By ID
* [listBatchErrors](#listbatcherrors) - Get Batch Errors
* [listBatches](#listbatches) - List Batches
* [processBatch](#processbatch) - Process Batch ID Labels
* [removeFromBatch](#removefrombatch) - Remove From Batch
* [updateBatch](#updatebatch) - Update Batch By Id

## addToBatch

Add a Shipment or Rate to a Batch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddToBatchRequest;
import org.openapis.openapi.models.operations.AddToBatchResponse;
import org.openapis.openapi.models.shared.AddToBatchRequestBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddToBatchRequest req = new AddToBatchRequest(                new AddToBatchRequestBody() {{
                                rateIds = new String[]{{
                                    add("se-28529731"),
                                    add("se-28529731"),
                                    add("se-28529731"),
                                    add("se-28529731"),
                                }};
                                shipmentIds = new String[]{{
                                    add("se-28529731"),
                                }};
                            }};, "se-28529731");            

            AddToBatchResponse res = sdk.batches.addToBatch(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBatch

Create a Batch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBatchResponse;
import org.openapis.openapi.models.shared.CreateBatchRequestBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateBatchRequestBody req = new CreateBatchRequestBody() {{
                batchNotes = "This is my batch";
                externalBatchId = "se-28529731";
                rateIds = new String[]{{
                    add("se-28529731"),
                    add("se-28529731"),
                }};
                shipmentIds = new String[]{{
                    add("se-28529731"),
                    add("se-28529731"),
                }};
            }};            

            CreateBatchResponse res = sdk.batches.createBatch(req);

            if (res.createBatchResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBatch

Delete Batch By Id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBatchRequest;
import org.openapis.openapi.models.operations.DeleteBatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBatchRequest req = new DeleteBatchRequest("se-28529731");            

            DeleteBatchResponse res = sdk.batches.deleteBatch(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBatchByExternalId

Get Batch By External ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBatchByExternalIdRequest;
import org.openapis.openapi.models.operations.GetBatchByExternalIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBatchByExternalIdRequest req = new GetBatchByExternalIdRequest("placeat");            

            GetBatchByExternalIdResponse res = sdk.batches.getBatchByExternalId(req);

            if (res.getBatchByExternalIdResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBatchById

Get Batch By ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBatchByIdRequest;
import org.openapis.openapi.models.operations.GetBatchByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBatchByIdRequest req = new GetBatchByIdRequest("se-28529731");            

            GetBatchByIdResponse res = sdk.batches.getBatchById(req);

            if (res.getBatchByIdResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBatchErrors

Error handling in batches are handled differently than in a single synchronous request.
You must retrieve the status of your batch by [getting a batch](https://www.shipengine.com/docs/reference/get-batch-by-id/) and getting an overview of the statuses or you can list errors directly here below to get detailed information about the errors.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBatchErrorsRequest;
import org.openapis.openapi.models.operations.ListBatchErrorsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBatchErrorsRequest req = new ListBatchErrorsRequest("se-28529731") {{
                page = 568045;
                pagesize = 392785;
            }};            

            ListBatchErrorsResponse res = sdk.batches.listBatchErrors(req);

            if (res.listBatchErrorsResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBatches

List Batches associated with your Shipengine account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBatchesRequest;
import org.openapis.openapi.models.operations.ListBatchesResponse;
import org.openapis.openapi.models.operations.ListBatchesSortDirSortDirEnum;
import org.openapis.openapi.models.shared.BatchStatusEnum;
import org.openapis.openapi.models.shared.BatchesSortByEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBatchesRequest req = new ListBatchesRequest() {{
                batchNumber = "temporibus";
                page = 71036;
                pageSize = 337396;
                sortBy = BatchesSortByEnum.SHIP_DATE;
                sortDir = ListBatchesSortDirSortDirEnum.DESC;
                status = BatchStatusEnum.OPEN;
            }};            

            ListBatchesResponse res = sdk.batches.listBatches(req);

            if (res.listBatchesResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## processBatch

Process Batch ID Labels

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProcessBatchRequest;
import org.openapis.openapi.models.operations.ProcessBatchResponse;
import org.openapis.openapi.models.shared.ProcessBatchRequestBody;
import org.openapis.openapi.models.shared.ProcessBatchRequestBodyDisplaySchemeEnum;
import org.openapis.openapi.models.shared.ProcessBatchRequestBodyLabelFormatEnum;
import org.openapis.openapi.models.shared.ProcessBatchRequestBodyLabelLayoutEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProcessBatchRequest req = new ProcessBatchRequest("se-28529731",                 new ProcessBatchRequestBody() {{
                                displayScheme = ProcessBatchRequestBodyDisplaySchemeEnum.LABEL_AND_QR_CODE;
                                labelFormat = ProcessBatchRequestBodyLabelFormatEnum.ZPL;
                                labelLayout = ProcessBatchRequestBodyLabelLayoutEnum.LETTER;
                                shipDate = OffsetDateTime.parse("2018-09-23T15:00:00.000Z");
                            }};);            

            ProcessBatchResponse res = sdk.batches.processBatch(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeFromBatch

Remove a shipment or rate from a batch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveFromBatchRequest;
import org.openapis.openapi.models.operations.RemoveFromBatchResponse;
import org.openapis.openapi.models.shared.RemoveFromBatchRequestBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveFromBatchRequest req = new RemoveFromBatchRequest("se-28529731",                 new RemoveFromBatchRequestBody() {{
                                rateIds = new String[]{{
                                    add("se-28529731"),
                                    add("se-28529731"),
                                    add("se-28529731"),
                                    add("se-28529731"),
                                }};
                                shipmentIds = new String[]{{
                                    add("se-28529731"),
                                    add("se-28529731"),
                                    add("se-28529731"),
                                    add("se-28529731"),
                                }};
                            }};);            

            RemoveFromBatchResponse res = sdk.batches.removeFromBatch(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBatch

Update Batch By Id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBatchRequest;
import org.openapis.openapi.models.operations.UpdateBatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBatchRequest req = new UpdateBatchRequest("se-28529731");            

            UpdateBatchResponse res = sdk.batches.updateBatch(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
