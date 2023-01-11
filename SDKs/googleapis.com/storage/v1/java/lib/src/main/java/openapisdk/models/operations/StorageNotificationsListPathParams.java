package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageNotificationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public StorageNotificationsListPathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
}