package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPoliciesListPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListPoliciesListPoliciesResponseMeta meta;
    public ListPoliciesListPoliciesResponse withMeta(ListPoliciesListPoliciesResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.TrusthubV1Policies[] results;
    public ListPoliciesListPoliciesResponse withResults(openapisdk.models.shared.TrusthubV1Policies[] results) {
        this.results = results;
        return this;
    }
}