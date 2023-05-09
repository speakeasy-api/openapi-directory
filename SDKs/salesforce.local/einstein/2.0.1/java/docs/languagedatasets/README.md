# languageDatasets

## Overview

Resources that manage text datasets.

### Available Operations

* [deleteDataset](#deletedataset) - Delete a Dataset
* [get](#get) - Get Deletion Status
* [getDataset](#getdataset) - Get a Dataset
* [listDatasets](#listdatasets) - Get All Datasets
* [uploadDatasetAsync](#uploaddatasetasync) - Create a Dataset From a File Asynchronously
* [uploadDatasetSync](#uploaddatasetsync) - Create a Dataset From a File Synchronously

## deleteDataset

Deletes the specified dataset and associated labels and examples.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatasetRequest;
import org.openapis.openapi.models.operations.DeleteDatasetResponse;
import org.openapis.openapi.models.operations.DeleteDatasetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDatasetRequest req = new DeleteDatasetRequest("quibusdam");            

            DeleteDatasetResponse res = sdk.languageDatasets.deleteDataset(req, new DeleteDatasetSecurity("unde") {{
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

## get

Returns the status of a language dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;
import org.openapis.openapi.models.operations.GetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequest req = new GetRequest("nulla");            

            GetResponse res = sdk.languageDatasets.get(req, new GetSecurity("corrupti") {{
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

## getDataset

Returns a single dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatasetRequest;
import org.openapis.openapi.models.operations.GetDatasetResponse;
import org.openapis.openapi.models.operations.GetDatasetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDatasetRequest req = new GetDatasetRequest("illum");            

            GetDatasetResponse res = sdk.languageDatasets.getDataset(req, new GetDatasetSecurity("vel") {{
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

## listDatasets

Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatasetsRequest;
import org.openapis.openapi.models.operations.ListDatasetsResponse;
import org.openapis.openapi.models.operations.ListDatasetsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDatasetsRequest req = new ListDatasetsRequest() {{
                count = "error";
                global = false;
                offset = "deserunt";
            }};            

            ListDatasetsResponse res = sdk.languageDatasets.listDatasets(req, new ListDatasetsSecurity("suscipit") {{
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

## uploadDatasetAsync

Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns immediately and continues to upload data in the background.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadDatasetAsyncRequestBody;
import org.openapis.openapi.models.operations.UploadDatasetAsyncRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.UploadDatasetAsyncResponse;
import org.openapis.openapi.models.operations.UploadDatasetAsyncSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadDatasetAsyncRequestBody req = new UploadDatasetAsyncRequestBody() {{
                data = "iure";
                name = "weather";
                path = "magnam";
                type = UploadDatasetAsyncRequestBodyTypeEnum.TEXT_SENTIMENT;
            }};            

            UploadDatasetAsyncResponse res = sdk.languageDatasets.uploadDatasetAsync(req, new UploadDatasetAsyncSecurity("ipsa") {{
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

## uploadDatasetSync

Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns after the dataset is created and all of the data is uploaded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadDatasetSyncRequestBody;
import org.openapis.openapi.models.operations.UploadDatasetSyncRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.UploadDatasetSyncResponse;
import org.openapis.openapi.models.operations.UploadDatasetSyncSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadDatasetSyncRequestBody req = new UploadDatasetSyncRequestBody() {{
                data = "delectus";
                name = "weather";
                path = "tempora";
                type = UploadDatasetSyncRequestBodyTypeEnum.TEXT_INTENT;
            }};            

            UploadDatasetSyncResponse res = sdk.languageDatasets.uploadDatasetSync(req, new UploadDatasetSyncSecurity("molestiae") {{
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
