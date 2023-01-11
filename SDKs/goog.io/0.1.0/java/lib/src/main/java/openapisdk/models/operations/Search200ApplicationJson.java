package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Search200ApplicationJson
 * results
**/
public class Search200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer")
    public String answer;
    public Search200ApplicationJson withAnswer(String answer) {
        this.answer = answer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public Search200ApplicationJsonResults[] results;
    public Search200ApplicationJson withResults(Search200ApplicationJsonResults[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public String total;
    public Search200ApplicationJson withTotal(String total) {
        this.total = total;
        return this;
    }
}