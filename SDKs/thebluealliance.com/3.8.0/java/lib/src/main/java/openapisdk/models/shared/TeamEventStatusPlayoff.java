package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TeamEventStatusPlayoff
 * Playoff status for this team, may be null if the team did not make playoffs, or playoffs have not begun.
**/
public class TeamEventStatusPlayoff {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_level_record")
    public WltRecord currentLevelRecord;
    public TeamEventStatusPlayoff withCurrentLevelRecord(WltRecord currentLevelRecord) {
        this.currentLevelRecord = currentLevelRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public TeamEventStatusPlayoffLevelEnum level;
    public TeamEventStatusPlayoff withLevel(TeamEventStatusPlayoffLevelEnum level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playoff_average")
    public Long playoffAverage;
    public TeamEventStatusPlayoff withPlayoffAverage(Long playoffAverage) {
        this.playoffAverage = playoffAverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record")
    public WltRecord record;
    public TeamEventStatusPlayoff withRecord(WltRecord record) {
        this.record = record;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TeamEventStatusPlayoffStatusEnum status;
    public TeamEventStatusPlayoff withStatus(TeamEventStatusPlayoffStatusEnum status) {
        this.status = status;
        return this;
    }
}