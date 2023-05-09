# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureIndexRequest;
import org.openapis.openapi.models.operations.ConfigureIndexResponse;
import org.openapis.openapi.models.shared.IndexConfiguration;
import org.openapis.openapi.models.shared.PodTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConfigureIndexRequest req = new ConfigureIndexRequest(                new IndexConfiguration() {{
                                podType = PodTypeEnum.P1_X8;
                                replicas = 715190;
                            }};, "example");            

            ConfigureIndexResponse res = sdk.indexOperations.configureIndex(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [indexOperations](docs/indexoperations/README.md)

* [configureIndex](docs/indexoperations/README.md#configureindex) - Configure index
* [createCollection](docs/indexoperations/README.md#createcollection) - Create collection
* [createIndex](docs/indexoperations/README.md#createindex) - Create index
* [deleteCollection](docs/indexoperations/README.md#deletecollection) - Delete Collection
* [deleteIndex](docs/indexoperations/README.md#deleteindex) - Delete Index
* [describeCollection](docs/indexoperations/README.md#describecollection) - Describe collection
* [describeIndex](docs/indexoperations/README.md#describeindex) - Describe index
* [listCollections](docs/indexoperations/README.md#listcollections) - List collections
* [listIndexes](docs/indexoperations/README.md#listindexes) - List indexes

### [vectorOperations](docs/vectoroperations/README.md)

* [delete](docs/vectoroperations/README.md#delete) - Delete
* [describeIndexStats](docs/vectoroperations/README.md#describeindexstats) - Describe Index Stats
* [fetch](docs/vectoroperations/README.md#fetch) - Fetch
* [query](docs/vectoroperations/README.md#query) - Query
* [update](docs/vectoroperations/README.md#update) - Fetch
* [upsert](docs/vectoroperations/README.md#upsert) - Upsert
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
