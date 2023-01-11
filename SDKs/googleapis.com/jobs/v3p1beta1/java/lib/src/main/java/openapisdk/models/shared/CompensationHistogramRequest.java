package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompensationHistogramRequest
 * Input only. Compensation based histogram request.
**/
public class CompensationHistogramRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketingOption")
    public NumericBucketingOption bucketingOption;
    public CompensationHistogramRequest withBucketingOption(NumericBucketingOption bucketingOption) {
        this.bucketingOption = bucketingOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CompensationHistogramRequestTypeEnum type;
    public CompensationHistogramRequest withType(CompensationHistogramRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}