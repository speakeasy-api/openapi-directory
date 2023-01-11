package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncSyncMapItemCreateSyncSyncMapItemRequest {
    @SpeakeasyMetadata("form:name=Data")
    public Object data;
    public CreateSyncSyncMapItemCreateSyncSyncMapItemRequest withData(Object data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("form:name=Key")
    public String key;
    public CreateSyncSyncMapItemCreateSyncSyncMapItemRequest withKey(String key) {
        this.key = key;
        return this;
    }
}