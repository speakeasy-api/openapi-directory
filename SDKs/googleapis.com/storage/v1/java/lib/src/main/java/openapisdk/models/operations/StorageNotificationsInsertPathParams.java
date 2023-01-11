package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageNotificationsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public StorageNotificationsInsertPathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
}