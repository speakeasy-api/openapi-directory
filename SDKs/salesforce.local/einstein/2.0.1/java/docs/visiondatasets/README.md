# visionDatasets

## Overview

Resources that manage image datasets.

### Available Operations

* [createDataset](#createdataset) - Create a Dataset
* [deleteDataset1](#deletedataset1) - Delete a Dataset
* [getDataset1](#getdataset1) - Get a Dataset
* [get1](#get1) - Get Deletion Status
* [listDatasets1](#listdatasets1) - Get All Datasets
* [uploadDatasetAsync1](#uploaddatasetasync1) - Create a Dataset From a Zip File Asynchronously
* [uploadDatasetSync1](#uploaddatasetsync1) - Create a Dataset From a Zip File Synchronously

## createDataset

Creates a dataset and labels, if they're specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatasetRequestBody;
import org.openapis.openapi.models.operations.CreateDatasetRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateDatasetResponse;
import org.openapis.openapi.models.operations.CreateDatasetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDatasetRequestBody req = new CreateDatasetRequestBody() {{
                labels = "beach,mountain";
                name = "Beach and Mountain";
                type = CreateDatasetRequestBodyTypeEnum.IMAGE;
            }};            

            CreateDatasetResponse res = sdk.visionDatasets.createDataset(req, new CreateDatasetSecurity("excepturi") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.dataset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDataset1

Deletes the specified dataset and associated labels and examples.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDataset1Request;
import org.openapis.openapi.models.operations.DeleteDataset1Response;
import org.openapis.openapi.models.operations.DeleteDataset1Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDataset1Request req = new DeleteDataset1Request("aspernatur");            

            DeleteDataset1Response res = sdk.visionDatasets.deleteDataset1(req, new DeleteDataset1Security("perferendis") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.deletionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataset1

Returns a single dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataset1Request;
import org.openapis.openapi.models.operations.GetDataset1Response;
import org.openapis.openapi.models.operations.GetDataset1Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDataset1Request req = new GetDataset1Request("ad");            

            GetDataset1Response res = sdk.visionDatasets.getDataset1(req, new GetDataset1Security("natus") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.dataset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## get1

Returns the status of an image dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Get1Request;
import org.openapis.openapi.models.operations.Get1Response;
import org.openapis.openapi.models.operations.Get1Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Get1Request req = new Get1Request("sed");            

            Get1Response res = sdk.visionDatasets.get1(req, new Get1Security("iste") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.deletionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatasets1

Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatasets1Request;
import org.openapis.openapi.models.operations.ListDatasets1Response;
import org.openapis.openapi.models.operations.ListDatasets1Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDatasets1Request req = new ListDatasets1Request() {{
                count = "dolor";
                global = false;
                offset = "natus";
            }};            

            ListDatasets1Response res = sdk.visionDatasets.listDatasets1(req, new ListDatasets1Security("laboriosam") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.datasetList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadDatasetAsync1

Creates a dataset, labels, and examples from the specified .zip file. The call returns immediately and continues to upload the images in the background.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadDatasetAsync1RequestBody;
import org.openapis.openapi.models.operations.UploadDatasetAsync1RequestBodyTypeEnum;
import org.openapis.openapi.models.operations.UploadDatasetAsync1Response;
import org.openapis.openapi.models.operations.UploadDatasetAsync1Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadDatasetAsync1RequestBody req = new UploadDatasetAsync1RequestBody() {{
                data = "hic";
                name = "mountainvsbeach";
                path = "saepe";
                type = UploadDatasetAsync1RequestBodyTypeEnum.IMAGE_MULTI_LABEL;
            }};            

            UploadDatasetAsync1Response res = sdk.visionDatasets.uploadDatasetAsync1(req, new UploadDatasetAsync1Security("in") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.dataset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadDatasetSync1

Creates a dataset, labels, and examples from the specified .zip file. The call returns after the dataset is created and all of the images are uploaded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadDatasetSync1RequestBody;
import org.openapis.openapi.models.operations.UploadDatasetSync1RequestBodyTypeEnum;
import org.openapis.openapi.models.operations.UploadDatasetSync1Response;
import org.openapis.openapi.models.operations.UploadDatasetSync1Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadDatasetSync1RequestBody req = new UploadDatasetSync1RequestBody() {{
                data = "corporis";
                name = "mountainvsbeach";
                path = "iste";
                type = UploadDatasetSync1RequestBodyTypeEnum.IMAGE_DETECTION;
            }};            

            UploadDatasetSync1Response res = sdk.visionDatasets.uploadDatasetSync1(req, new UploadDatasetSync1Security("saepe") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.dataset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
