package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketAccessControlsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public StorageBucketAccessControlsListPathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
}