package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasestorageProjectsBucketsAddFirebasePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bucket")
    public String bucket;
    public FirebasestorageProjectsBucketsAddFirebasePathParams withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
}