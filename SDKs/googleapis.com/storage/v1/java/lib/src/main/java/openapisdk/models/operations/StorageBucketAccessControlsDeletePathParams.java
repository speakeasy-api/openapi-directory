package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketAccessControlsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public StorageBucketAccessControlsDeletePathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=entity")
    public String entity;
    public StorageBucketAccessControlsDeletePathParams withEntity(String entity) {
        this.entity = entity;
        return this;
    }
}