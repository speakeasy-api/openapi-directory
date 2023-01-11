package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsRewritePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=destinationBucket")
    public String destinationBucket;
    public StorageObjectsRewritePathParams withDestinationBucket(String destinationBucket) {
        this.destinationBucket = destinationBucket;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=destinationObject")
    public String destinationObject;
    public StorageObjectsRewritePathParams withDestinationObject(String destinationObject) {
        this.destinationObject = destinationObject;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sourceBucket")
    public String sourceBucket;
    public StorageObjectsRewritePathParams withSourceBucket(String sourceBucket) {
        this.sourceBucket = sourceBucket;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sourceObject")
    public String sourceObject;
    public StorageObjectsRewritePathParams withSourceObject(String sourceObject) {
        this.sourceObject = sourceObject;
        return this;
    }
}