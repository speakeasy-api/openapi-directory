package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public StorageObjectsInsertPathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
}