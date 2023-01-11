package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ErrorDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public ErrorDetail withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public java.util.Map<String, String[]> context;
    public ErrorDetail withContext(java.util.Map<String, String[]> context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in")
    public String in;
    public ErrorDetail withIn(String in) {
        this.in = in;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public ErrorDetail withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subCategory")
    public String subCategory;
    public ErrorDetail withSubCategory(String subCategory) {
        this.subCategory = subCategory;
        return this;
    }
}