package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageDefaultObjectAccessControlsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public StorageDefaultObjectAccessControlsListPathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
}