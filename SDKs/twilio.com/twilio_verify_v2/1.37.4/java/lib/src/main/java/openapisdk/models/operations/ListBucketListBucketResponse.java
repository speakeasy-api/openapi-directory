package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBucketListBucketResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buckets")
    public openapisdk.models.shared.VerifyV2ServiceRateLimitBucket[] buckets;
    public ListBucketListBucketResponse withBuckets(openapisdk.models.shared.VerifyV2ServiceRateLimitBucket[] buckets) {
        this.buckets = buckets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListBucketListBucketResponseMeta meta;
    public ListBucketListBucketResponse withMeta(ListBucketListBucketResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}