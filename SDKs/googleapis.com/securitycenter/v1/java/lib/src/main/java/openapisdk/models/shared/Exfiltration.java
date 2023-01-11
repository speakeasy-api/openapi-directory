package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Exfiltration
 * Exfiltration represents a data exfiltration attempt of one or more sources to one or more targets. Sources represent the source of data that is exfiltrated, and Targets represents the destination the data was copied to.
**/
public class Exfiltration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public ExfilResource[] sources;
    public Exfiltration withSources(ExfilResource[] sources) {
        this.sources = sources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public ExfilResource[] targets;
    public Exfiltration withTargets(ExfilResource[] targets) {
        this.targets = targets;
        return this;
    }
}