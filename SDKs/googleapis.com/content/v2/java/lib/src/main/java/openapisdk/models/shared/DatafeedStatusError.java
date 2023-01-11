package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatafeedStatusError
 * An error occurring in the feed, like "invalid price".
**/
public class DatafeedStatusError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public DatafeedStatusError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public DatafeedStatusError withCount(String count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("examples")
    public DatafeedStatusExample[] examples;
    public DatafeedStatusError withExamples(DatafeedStatusExample[] examples) {
        this.examples = examples;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public DatafeedStatusError withMessage(String message) {
        this.message = message;
        return this;
    }
}