package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendTokenRequestMetadataRulesFeesItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public SendTokenRequestMetadataRulesFeesItems withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenId")
    public String tokenId;
    public SendTokenRequestMetadataRulesFeesItems withTokenId(String tokenId) {
        this.tokenId = tokenId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public SendTokenRequestMetadataRulesFeesItems withValue(String value) {
        this.value = value;
        return this;
    }
}