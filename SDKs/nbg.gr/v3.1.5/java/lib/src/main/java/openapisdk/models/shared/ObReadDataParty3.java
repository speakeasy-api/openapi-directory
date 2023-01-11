package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObReadDataParty3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Party")
    public ObParty2[] party;
    public ObReadDataParty3 withParty(ObParty2[] party) {
        this.party = party;
        return this;
    }
}