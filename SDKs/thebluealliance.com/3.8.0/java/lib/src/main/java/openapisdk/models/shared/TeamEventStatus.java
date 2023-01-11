package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamEventStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alliance")
    public TeamEventStatusAlliance alliance;
    public TeamEventStatus withAlliance(TeamEventStatusAlliance alliance) {
        this.alliance = alliance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alliance_status_str")
    public String allianceStatusStr;
    public TeamEventStatus withAllianceStatusStr(String allianceStatusStr) {
        this.allianceStatusStr = allianceStatusStr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_match_key")
    public String lastMatchKey;
    public TeamEventStatus withLastMatchKey(String lastMatchKey) {
        this.lastMatchKey = lastMatchKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_match_key")
    public String nextMatchKey;
    public TeamEventStatus withNextMatchKey(String nextMatchKey) {
        this.nextMatchKey = nextMatchKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overall_status_str")
    public String overallStatusStr;
    public TeamEventStatus withOverallStatusStr(String overallStatusStr) {
        this.overallStatusStr = overallStatusStr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playoff")
    public TeamEventStatusPlayoff playoff;
    public TeamEventStatus withPlayoff(TeamEventStatusPlayoff playoff) {
        this.playoff = playoff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playoff_status_str")
    public String playoffStatusStr;
    public TeamEventStatus withPlayoffStatusStr(String playoffStatusStr) {
        this.playoffStatusStr = playoffStatusStr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qual")
    public TeamEventStatusRank qual;
    public TeamEventStatus withQual(TeamEventStatusRank qual) {
        this.qual = qual;
        return this;
    }
}