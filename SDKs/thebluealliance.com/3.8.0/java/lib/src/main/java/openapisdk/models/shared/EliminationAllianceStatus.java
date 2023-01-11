package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EliminationAllianceStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_level_record")
    public WltRecord currentLevelRecord;
    public EliminationAllianceStatus withCurrentLevelRecord(WltRecord currentLevelRecord) {
        this.currentLevelRecord = currentLevelRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public String level;
    public EliminationAllianceStatus withLevel(String level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playoff_average")
    public Double playoffAverage;
    public EliminationAllianceStatus withPlayoffAverage(Double playoffAverage) {
        this.playoffAverage = playoffAverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record")
    public WltRecord record;
    public EliminationAllianceStatus withRecord(WltRecord record) {
        this.record = record;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public EliminationAllianceStatus withStatus(String status) {
        this.status = status;
        return this;
    }
}