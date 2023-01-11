package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasestorageProjectsBucketsRemoveFirebasePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public FirebasestorageProjectsBucketsRemoveFirebasePathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
}