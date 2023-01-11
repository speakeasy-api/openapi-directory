package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssueTokenRequestMetadataRulesHolders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public IssueTokenRequestMetadataRulesHolders withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locked")
    public Boolean locked;
    public IssueTokenRequestMetadataRulesHolders withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
}