package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AggregateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket")
    public AggregateBucket[] bucket;
    public AggregateResponse withBucket(AggregateBucket[] bucket) {
        this.bucket = bucket;
        return this;
    }
}