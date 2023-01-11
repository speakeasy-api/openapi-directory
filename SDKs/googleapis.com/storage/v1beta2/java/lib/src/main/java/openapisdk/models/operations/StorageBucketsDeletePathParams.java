package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public StorageBucketsDeletePathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
}