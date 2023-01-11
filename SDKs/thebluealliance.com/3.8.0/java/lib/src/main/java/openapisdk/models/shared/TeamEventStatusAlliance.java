package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamEventStatusAlliance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backup")
    public TeamEventStatusAllianceBackup backup;
    public TeamEventStatusAlliance withBackup(TeamEventStatusAllianceBackup backup) {
        this.backup = backup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TeamEventStatusAlliance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("number")
    public Long number;
    public TeamEventStatusAlliance withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonProperty("pick")
    public Long pick;
    public TeamEventStatusAlliance withPick(Long pick) {
        this.pick = pick;
        return this;
    }
}