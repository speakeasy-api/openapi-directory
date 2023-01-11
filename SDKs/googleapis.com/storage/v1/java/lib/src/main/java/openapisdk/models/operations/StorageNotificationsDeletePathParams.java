package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageNotificationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public StorageNotificationsDeletePathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=notification")
    public String notification;
    public StorageNotificationsDeletePathParams withNotification(String notification) {
        this.notification = notification;
        return this;
    }
}