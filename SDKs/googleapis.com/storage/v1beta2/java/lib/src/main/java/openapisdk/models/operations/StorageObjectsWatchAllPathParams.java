package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsWatchAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public StorageObjectsWatchAllPathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
}