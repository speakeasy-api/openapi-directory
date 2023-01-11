package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompensationHistogramResult
 * Output only. Compensation based histogram result.
**/
public class CompensationHistogramResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public NumericBucketingResult result;
    public CompensationHistogramResult withResult(NumericBucketingResult result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CompensationHistogramResultTypeEnum type;
    public CompensationHistogramResult withType(CompensationHistogramResultTypeEnum type) {
        this.type = type;
        return this;
    }
}