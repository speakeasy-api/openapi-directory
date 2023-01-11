package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaLongTextLimits
 * Limits for long text Field type.
**/
public class GoogleAppsDriveLabelsV2betaLongTextLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxLength")
    public Integer maxLength;
    public GoogleAppsDriveLabelsV2betaLongTextLimits withMaxLength(Integer maxLength) {
        this.maxLength = maxLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minLength")
    public Integer minLength;
    public GoogleAppsDriveLabelsV2betaLongTextLimits withMinLength(Integer minLength) {
        this.minLength = minLength;
        return this;
    }
}