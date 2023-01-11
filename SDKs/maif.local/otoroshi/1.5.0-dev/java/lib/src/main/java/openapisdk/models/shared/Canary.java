package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Canary
 * The configuration of the canary mode for a service descriptor
**/
public class Canary {
    @JsonProperty("enabled")
    public Boolean enabled;
    public Canary withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("root")
    public String root;
    public Canary withRoot(String root) {
        this.root = root;
        return this;
    }
    @JsonProperty("targets")
    public Target[] targets;
    public Canary withTargets(Target[] targets) {
        this.targets = targets;
        return this;
    }
    @JsonProperty("traffic")
    public Integer traffic;
    public Canary withTraffic(Integer traffic) {
        this.traffic = traffic;
        return this;
    }
}