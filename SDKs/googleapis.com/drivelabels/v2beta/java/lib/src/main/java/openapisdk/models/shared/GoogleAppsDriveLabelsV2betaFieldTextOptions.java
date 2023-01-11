package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldTextOptions
 * Options for the Text field type.
**/
public class GoogleAppsDriveLabelsV2betaFieldTextOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxLength")
    public Integer maxLength;
    public GoogleAppsDriveLabelsV2betaFieldTextOptions withMaxLength(Integer maxLength) {
        this.maxLength = maxLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minLength")
    public Integer minLength;
    public GoogleAppsDriveLabelsV2betaFieldTextOptions withMinLength(Integer minLength) {
        this.minLength = minLength;
        return this;
    }
}