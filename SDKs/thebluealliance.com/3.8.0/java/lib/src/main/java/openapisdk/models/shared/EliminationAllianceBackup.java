package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EliminationAllianceBackup
 * Backup team called in, may be null.
**/
public class EliminationAllianceBackup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in")
    public String in;
    public EliminationAllianceBackup withIn(String in) {
        this.in = in;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("out")
    public String out;
    public EliminationAllianceBackup withOut(String out) {
        this.out = out;
        return this;
    }
}