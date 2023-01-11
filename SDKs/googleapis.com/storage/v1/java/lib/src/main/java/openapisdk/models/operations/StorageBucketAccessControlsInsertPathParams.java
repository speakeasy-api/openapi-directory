package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketAccessControlsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public StorageBucketAccessControlsInsertPathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
}