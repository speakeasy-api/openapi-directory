package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEndUserListEndUserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListEndUserListEndUserResponseMeta meta;
    public ListEndUserListEndUserResponse withMeta(ListEndUserListEndUserResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUser[] results;
    public ListEndUserListEndUserResponse withResults(openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUser[] results) {
        this.results = results;
        return this;
    }
}