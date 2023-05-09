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
import org.openapis.openapi.models.operations.CreateAttachmentRequest;
import org.openapis.openapi.models.operations.CreateAttachmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAttachmentRequest req = new CreateAttachmentRequest("corrupti", "provident", "distinctio");            

            CreateAttachmentResponse res = sdk.attachment.createAttachment(req);

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


### [attachment](docs/attachment/README.md)

* [createAttachment](docs/attachment/README.md#createattachment)
* [deleteAttachment](docs/attachment/README.md#deleteattachment)

### [batch](docs/batch/README.md)

* [batch](docs/batch/README.md#batch)

### [buckets](docs/buckets/README.md)

* [getBucket](docs/buckets/README.md#getbucket)
* [getBuckets](docs/buckets/README.md#getbuckets)

### [changess](docs/changess/README.md)

* [getChangess](docs/changess/README.md#getchangess)

### [collectionChangeset](docs/collectionchangeset/README.md)

* [getCollectionChangeset](docs/collectionchangeset/README.md#getcollectionchangeset)

### [collections](docs/collections/README.md)

* [getCollection](docs/collections/README.md#getcollection)
* [getCollections](docs/collections/README.md#getcollections)

### [groups](docs/groups/README.md)

* [getGroup](docs/groups/README.md#getgroup)
* [getGroups](docs/groups/README.md#getgroups)

### [records](docs/records/README.md)

* [getRecord](docs/records/README.md#getrecord)
* [getRecords](docs/records/README.md#getrecords)

### [utilities](docs/utilities/README.md)

* [heartbeat](docs/utilities/README.md#heartbeat)
* [lbheartbeat](docs/utilities/README.md#lbheartbeat)
* [version](docs/utilities/README.md#version)
* [contribute](docs/utilities/README.md#contribute)
* [getOpenapiSpec](docs/utilities/README.md#getopenapispec)
* [serverInfo](docs/utilities/README.md#serverinfo)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
