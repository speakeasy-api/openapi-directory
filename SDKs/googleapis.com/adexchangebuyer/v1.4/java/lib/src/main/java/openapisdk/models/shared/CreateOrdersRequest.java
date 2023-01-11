package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrdersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposals")
    public Proposal[] proposals;
    public CreateOrdersRequest withProposals(Proposal[] proposals) {
        this.proposals = proposals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyCode")
    public String webPropertyCode;
    public CreateOrdersRequest withWebPropertyCode(String webPropertyCode) {
        this.webPropertyCode = webPropertyCode;
        return this;
    }
}