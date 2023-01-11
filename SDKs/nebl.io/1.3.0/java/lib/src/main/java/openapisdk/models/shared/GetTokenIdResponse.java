package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTokenIdResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenId")
    public String tokenId;
    public GetTokenIdResponse withTokenId(String tokenId) {
        this.tokenId = tokenId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenName")
    public String tokenName;
    public GetTokenIdResponse withTokenName(String tokenName) {
        this.tokenName = tokenName;
        return this;
    }
}