package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListsOverviewFormat200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyright")
    public String copyright;
    public GetListsOverviewFormat200ApplicationJson withCopyright(String copyright) {
        this.copyright = copyright;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_results")
    public Long numResults;
    public GetListsOverviewFormat200ApplicationJson withNumResults(Long numResults) {
        this.numResults = numResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GetListsOverviewFormat200ApplicationJsonResults results;
    public GetListsOverviewFormat200ApplicationJson withResults(GetListsOverviewFormat200ApplicationJsonResults results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetListsOverviewFormat200ApplicationJson withStatus(String status) {
        this.status = status;
        return this;
    }
}