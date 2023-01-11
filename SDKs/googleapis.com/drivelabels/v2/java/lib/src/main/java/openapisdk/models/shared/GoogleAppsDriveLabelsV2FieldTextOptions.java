package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2FieldTextOptions
 * Options for the Text field type.
**/
public class GoogleAppsDriveLabelsV2FieldTextOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxLength")
    public Integer maxLength;
    public GoogleAppsDriveLabelsV2FieldTextOptions withMaxLength(Integer maxLength) {
        this.maxLength = maxLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minLength")
    public Integer minLength;
    public GoogleAppsDriveLabelsV2FieldTextOptions withMinLength(Integer minLength) {
        this.minLength = minLength;
        return this;
    }
}