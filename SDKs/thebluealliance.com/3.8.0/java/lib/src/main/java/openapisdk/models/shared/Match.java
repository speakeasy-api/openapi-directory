package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Match {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actual_time")
    public Long actualTime;
    public Match withActualTime(Long actualTime) {
        this.actualTime = actualTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alliances")
    public MatchAlliances alliances;
    public Match withAlliances(MatchAlliances alliances) {
        this.alliances = alliances;
        return this;
    }
    @JsonProperty("comp_level")
    public MatchCompLevelEnum compLevel;
    public Match withCompLevel(MatchCompLevelEnum compLevel) {
        this.compLevel = compLevel;
        return this;
    }
    @JsonProperty("event_key")
    public String eventKey;
    public Match withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public Match withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("match_number")
    public Long matchNumber;
    public Match withMatchNumber(Long matchNumber) {
        this.matchNumber = matchNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post_result_time")
    public Long postResultTime;
    public Match withPostResultTime(Long postResultTime) {
        this.postResultTime = postResultTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predicted_time")
    public Long predictedTime;
    public Match withPredictedTime(Long predictedTime) {
        this.predictedTime = predictedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score_breakdown")
    public java.util.Map<String, Object> scoreBreakdown;
    public Match withScoreBreakdown(java.util.Map<String, Object> scoreBreakdown) {
        this.scoreBreakdown = scoreBreakdown;
        return this;
    }
    @JsonProperty("set_number")
    public Long setNumber;
    public Match withSetNumber(Long setNumber) {
        this.setNumber = setNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public Long time;
    public Match withTime(Long time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos")
    public MatchVideos[] videos;
    public Match withVideos(MatchVideos[] videos) {
        this.videos = videos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("winning_alliance")
    public MatchWinningAllianceEnum winningAlliance;
    public Match withWinningAlliance(MatchWinningAllianceEnum winningAlliance) {
        this.winningAlliance = winningAlliance;
        return this;
    }
}