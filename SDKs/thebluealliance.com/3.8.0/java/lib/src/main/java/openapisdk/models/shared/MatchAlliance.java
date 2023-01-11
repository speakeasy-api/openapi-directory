package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MatchAlliance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dq_team_keys")
    public String[] dqTeamKeys;
    public MatchAlliance withDqTeamKeys(String[] dqTeamKeys) {
        this.dqTeamKeys = dqTeamKeys;
        return this;
    }
    @JsonProperty("score")
    public Long score;
    public MatchAlliance withScore(Long score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surrogate_team_keys")
    public String[] surrogateTeamKeys;
    public MatchAlliance withSurrogateTeamKeys(String[] surrogateTeamKeys) {
        this.surrogateTeamKeys = surrogateTeamKeys;
        return this;
    }
    @JsonProperty("team_keys")
    public String[] teamKeys;
    public MatchAlliance withTeamKeys(String[] teamKeys) {
        this.teamKeys = teamKeys;
        return this;
    }
}