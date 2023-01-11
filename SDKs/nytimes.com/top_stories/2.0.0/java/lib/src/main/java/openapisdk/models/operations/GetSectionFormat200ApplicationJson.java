package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSectionFormat200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.Article[] results;
    public GetSectionFormat200ApplicationJson withResults(openapisdk.models.shared.Article[] results) {
        this.results = results;
        return this;
    }
}