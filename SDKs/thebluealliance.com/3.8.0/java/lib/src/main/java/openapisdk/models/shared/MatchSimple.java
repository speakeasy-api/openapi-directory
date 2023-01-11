package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MatchSimple {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actual_time")
    public Long actualTime;
    public MatchSimple withActualTime(Long actualTime) {
        this.actualTime = actualTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alliances")
    public MatchSimpleAlliances alliances;
    public MatchSimple withAlliances(MatchSimpleAlliances alliances) {
        this.alliances = alliances;
        return this;
    }
    @JsonProperty("comp_level")
    public MatchSimpleCompLevelEnum compLevel;
    public MatchSimple withCompLevel(MatchSimpleCompLevelEnum compLevel) {
        this.compLevel = compLevel;
        return this;
    }
    @JsonProperty("event_key")
    public String eventKey;
    public MatchSimple withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public MatchSimple withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("match_number")
    public Long matchNumber;
    public MatchSimple withMatchNumber(Long matchNumber) {
        this.matchNumber = matchNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predicted_time")
    public Long predictedTime;
    public MatchSimple withPredictedTime(Long predictedTime) {
        this.predictedTime = predictedTime;
        return this;
    }
    @JsonProperty("set_number")
    public Long setNumber;
    public MatchSimple withSetNumber(Long setNumber) {
        this.setNumber = setNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public Long time;
    public MatchSimple withTime(Long time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("winning_alliance")
    public MatchSimpleWinningAllianceEnum winningAlliance;
    public MatchSimple withWinningAlliance(MatchSimpleWinningAllianceEnum winningAlliance) {
        this.winningAlliance = winningAlliance;
        return this;
    }
}