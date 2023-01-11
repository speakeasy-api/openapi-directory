package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObParty2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ObParty2 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("PartyId")
    public String partyId;
    public ObParty2 withPartyId(String partyId) {
        this.partyId = partyId;
        return this;
    }
}