package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TeamEventStatusAllianceBackup
 * Backup status, may be null.
**/
public class TeamEventStatusAllianceBackup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in")
    public String in;
    public TeamEventStatusAllianceBackup withIn(String in) {
        this.in = in;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("out")
    public String out;
    public TeamEventStatusAllianceBackup withOut(String out) {
        this.out = out;
        return this;
    }
}