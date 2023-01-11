package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EliminationAlliance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backup")
    public EliminationAllianceBackup backup;
    public EliminationAlliance withBackup(EliminationAllianceBackup backup) {
        this.backup = backup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("declines")
    public String[] declines;
    public EliminationAlliance withDeclines(String[] declines) {
        this.declines = declines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EliminationAlliance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("picks")
    public String[] picks;
    public EliminationAlliance withPicks(String[] picks) {
        this.picks = picks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public EliminationAllianceStatus status;
    public EliminationAlliance withStatus(EliminationAllianceStatus status) {
        this.status = status;
        return this;
    }
}