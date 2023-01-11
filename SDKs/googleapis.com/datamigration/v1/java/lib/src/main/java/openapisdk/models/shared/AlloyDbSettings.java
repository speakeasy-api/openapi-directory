package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlloyDbSettings
 * Settings for creating an AlloyDB cluster.
**/
public class AlloyDbSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialUser")
    public UserPassword initialUser;
    public AlloyDbSettings withInitialUser(UserPassword initialUser) {
        this.initialUser = initialUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public AlloyDbSettings withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryInstanceSettings")
    public PrimaryInstanceSettings primaryInstanceSettings;
    public AlloyDbSettings withPrimaryInstanceSettings(PrimaryInstanceSettings primaryInstanceSettings) {
        this.primaryInstanceSettings = primaryInstanceSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcNetwork")
    public String vpcNetwork;
    public AlloyDbSettings withVpcNetwork(String vpcNetwork) {
        this.vpcNetwork = vpcNetwork;
        return this;
    }
}