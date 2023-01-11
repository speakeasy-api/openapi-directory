package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public StorageObjectsPatchPathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public StorageObjectsPatchPathParams withObject(String object) {
        this.object = object;
        return this;
    }
}