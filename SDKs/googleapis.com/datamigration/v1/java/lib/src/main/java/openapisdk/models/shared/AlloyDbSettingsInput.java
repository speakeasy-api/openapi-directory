package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlloyDbSettingsInput
 * Settings for creating an AlloyDB cluster.
**/
public class AlloyDbSettingsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialUser")
    public UserPasswordInput initialUser;
    public AlloyDbSettingsInput withInitialUser(UserPasswordInput initialUser) {
        this.initialUser = initialUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public AlloyDbSettingsInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryInstanceSettings")
    public PrimaryInstanceSettingsInput primaryInstanceSettings;
    public AlloyDbSettingsInput withPrimaryInstanceSettings(PrimaryInstanceSettingsInput primaryInstanceSettings) {
        this.primaryInstanceSettings = primaryInstanceSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcNetwork")
    public String vpcNetwork;
    public AlloyDbSettingsInput withVpcNetwork(String vpcNetwork) {
        this.vpcNetwork = vpcNetwork;
        return this;
    }
}