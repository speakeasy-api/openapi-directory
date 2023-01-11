package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DnsPeering
 * DNS peering configuration. These configurations are used to create DNS peering with the customer Cloud DNS.
**/
public class DnsPeering {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DnsPeering withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public DnsPeering withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DnsPeering withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetNetwork")
    public String targetNetwork;
    public DnsPeering withTargetNetwork(String targetNetwork) {
        this.targetNetwork = targetNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetProject")
    public String targetProject;
    public DnsPeering withTargetProject(String targetProject) {
        this.targetProject = targetProject;
        return this;
    }
}