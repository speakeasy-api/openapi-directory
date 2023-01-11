package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBucketUpdateBucketRequest {
    @SpeakeasyMetadata("form:name=Interval")
    public Long interval;
    public UpdateBucketUpdateBucketRequest withInterval(Long interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("form:name=Max")
    public Long max;
    public UpdateBucketUpdateBucketRequest withMax(Long max) {
        this.max = max;
        return this;
    }
}