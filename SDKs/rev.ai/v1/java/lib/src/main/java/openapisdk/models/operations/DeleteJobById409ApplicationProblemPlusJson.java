package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteJobById409ApplicationProblemPlusJson
 * Problem details object returned on errors
**/
public class DeleteJobById409ApplicationProblemPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_values")
    public String[] allowedValues;
    public DeleteJobById409ApplicationProblemPlusJson withAllowedValues(String[] allowedValues) {
        this.allowedValues = allowedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_value")
    public String currentValue;
    public DeleteJobById409ApplicationProblemPlusJson withCurrentValue(String currentValue) {
        this.currentValue = currentValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public DeleteJobById409ApplicationProblemPlusJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public DeleteJobById409ApplicationProblemPlusJson withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public DeleteJobById409ApplicationProblemPlusJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public DeleteJobById409ApplicationProblemPlusJson withType(String type) {
        this.type = type;
        return this;
    }
}