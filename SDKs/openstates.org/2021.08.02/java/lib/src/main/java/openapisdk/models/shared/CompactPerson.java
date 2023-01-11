package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CompactPerson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_role")
    public CurrentRole currentRole;
    public CompactPerson withCurrentRole(CurrentRole currentRole) {
        this.currentRole = currentRole;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CompactPerson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CompactPerson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("party")
    public String party;
    public CompactPerson withParty(String party) {
        this.party = party;
        return this;
    }
}