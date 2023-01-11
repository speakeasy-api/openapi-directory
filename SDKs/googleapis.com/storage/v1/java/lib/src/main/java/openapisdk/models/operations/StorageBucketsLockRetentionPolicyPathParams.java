package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketsLockRetentionPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public StorageBucketsLockRetentionPolicyPathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
}