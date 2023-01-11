package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageNotificationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public StorageNotificationsGetPathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=notification")
    public String notification;
    public StorageNotificationsGetPathParams withNotification(String notification) {
        this.notification = notification;
        return this;
    }
}