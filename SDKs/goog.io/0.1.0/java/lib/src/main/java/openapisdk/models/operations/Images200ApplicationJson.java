package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Images200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public String[] answers;
    public Images200ApplicationJson withAnswers(String[] answers) {
        this.answers = answers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_results")
    public Images200ApplicationJsonImageResults[] imageResults;
    public Images200ApplicationJson withImageResults(Images200ApplicationJsonImageResults[] imageResults) {
        this.imageResults = imageResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public java.util.Map<String, Object>[] results;
    public Images200ApplicationJson withResults(java.util.Map<String, Object>[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public Images200ApplicationJson withTotal(Long total) {
        this.total = total;
        return this;
    }
}