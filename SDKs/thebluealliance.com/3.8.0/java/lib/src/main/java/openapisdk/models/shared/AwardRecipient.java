package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwardRecipient
 * An `Award_Recipient` object represents the team and/or person who received an award at an event.
**/
public class AwardRecipient {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awardee")
    public String awardee;
    public AwardRecipient withAwardee(String awardee) {
        this.awardee = awardee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team_key")
    public String teamKey;
    public AwardRecipient withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}