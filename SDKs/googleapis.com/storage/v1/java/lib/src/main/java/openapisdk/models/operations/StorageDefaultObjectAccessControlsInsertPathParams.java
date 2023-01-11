package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageDefaultObjectAccessControlsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public StorageDefaultObjectAccessControlsInsertPathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
}