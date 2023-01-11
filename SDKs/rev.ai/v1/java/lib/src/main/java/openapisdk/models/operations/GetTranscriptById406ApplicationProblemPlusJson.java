package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetTranscriptById406ApplicationProblemPlusJson
 * Problem details object returned on errors
**/
public class GetTranscriptById406ApplicationProblemPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_values")
    public String[] allowedValues;
    public GetTranscriptById406ApplicationProblemPlusJson withAllowedValues(String[] allowedValues) {
        this.allowedValues = allowedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_value")
    public String currentValue;
    public GetTranscriptById406ApplicationProblemPlusJson withCurrentValue(String currentValue) {
        this.currentValue = currentValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public GetTranscriptById406ApplicationProblemPlusJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public GetTranscriptById406ApplicationProblemPlusJson withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetTranscriptById406ApplicationProblemPlusJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetTranscriptById406ApplicationProblemPlusJson withType(String type) {
        this.type = type;
        return this;
    }
}