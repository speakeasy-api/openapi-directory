package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public StorageBucketsUpdatePathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
}