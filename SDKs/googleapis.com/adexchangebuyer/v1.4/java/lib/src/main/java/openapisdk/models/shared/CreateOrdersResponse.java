package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrdersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposals")
    public Proposal[] proposals;
    public CreateOrdersResponse withProposals(Proposal[] proposals) {
        this.proposals = proposals;
        return this;
    }
}