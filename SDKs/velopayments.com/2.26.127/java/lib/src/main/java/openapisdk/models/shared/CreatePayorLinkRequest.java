package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreatePayorLinkRequest {
    @JsonProperty("fromPayorId")
    public String fromPayorId;
    public CreatePayorLinkRequest withFromPayorId(String fromPayorId) {
        this.fromPayorId = fromPayorId;
        return this;
    }
    @JsonProperty("linkType")
    public CreatePayorLinkRequestLinkTypeEnum linkType;
    public CreatePayorLinkRequest withLinkType(CreatePayorLinkRequestLinkTypeEnum linkType) {
        this.linkType = linkType;
        return this;
    }
    @JsonProperty("toPayorId")
    public String toPayorId;
    public CreatePayorLinkRequest withToPayorId(String toPayorId) {
        this.toPayorId = toPayorId;
        return this;
    }
}