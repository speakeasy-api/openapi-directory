package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public StorageObjectsGetPathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public StorageObjectsGetPathParams withObject(String object) {
        this.object = object;
        return this;
    }
}