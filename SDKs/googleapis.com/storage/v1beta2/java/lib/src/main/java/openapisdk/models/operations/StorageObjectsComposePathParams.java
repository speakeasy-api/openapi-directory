package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsComposePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=destinationBucket")
    public String destinationBucket;
    public StorageObjectsComposePathParams withDestinationBucket(String destinationBucket) {
        this.destinationBucket = destinationBucket;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=destinationObject")
    public String destinationObject;
    public StorageObjectsComposePathParams withDestinationObject(String destinationObject) {
        this.destinationObject = destinationObject;
        return this;
    }
}