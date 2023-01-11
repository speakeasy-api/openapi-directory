package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBucketCreateBucketRequest {
    @SpeakeasyMetadata("form:name=Interval")
    public Long interval;
    public CreateBucketCreateBucketRequest withInterval(Long interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("form:name=Max")
    public Long max;
    public CreateBucketCreateBucketRequest withMax(Long max) {
        this.max = max;
        return this;
    }
}