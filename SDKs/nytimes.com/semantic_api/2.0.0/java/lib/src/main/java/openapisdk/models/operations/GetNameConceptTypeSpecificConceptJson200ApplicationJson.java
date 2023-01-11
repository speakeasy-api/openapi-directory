package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetNameConceptTypeSpecificConceptJson200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyright")
    public String copyright;
    public GetNameConceptTypeSpecificConceptJson200ApplicationJson withCopyright(String copyright) {
        this.copyright = copyright;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_results")
    public Long numResults;
    public GetNameConceptTypeSpecificConceptJson200ApplicationJson withNumResults(Long numResults) {
        this.numResults = numResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.Concept[] results;
    public GetNameConceptTypeSpecificConceptJson200ApplicationJson withResults(openapisdk.models.shared.Concept[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetNameConceptTypeSpecificConceptJson200ApplicationJson withStatus(String status) {
        this.status = status;
        return this;
    }
}