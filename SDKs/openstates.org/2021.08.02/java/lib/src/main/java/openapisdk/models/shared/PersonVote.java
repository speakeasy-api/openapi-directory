package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PersonVote {
    @JsonProperty("option")
    public String option;
    public PersonVote withOption(String option) {
        this.option = option;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voter")
    public CompactPerson voter;
    public PersonVote withVoter(CompactPerson voter) {
        this.voter = voter;
        return this;
    }
    @JsonProperty("voter_name")
    public String voterName;
    public PersonVote withVoterName(String voterName) {
        this.voterName = voterName;
        return this;
    }
}