package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectorVersion
 * ConnectorVersion indicates a specific version of a connector.
**/
public class ConnectorVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authConfigTemplates")
    public AuthConfigTemplate[] authConfigTemplates;
    public ConnectorVersion withAuthConfigTemplates(AuthConfigTemplate[] authConfigTemplates) {
        this.authConfigTemplates = authConfigTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configVariableTemplates")
    public ConfigVariableTemplate[] configVariableTemplates;
    public ConnectorVersion withConfigVariableTemplates(ConfigVariableTemplate[] configVariableTemplates) {
        this.configVariableTemplates = configVariableTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public ConnectorVersion withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ConnectorVersion withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egressControlConfig")
    public EgressControlConfig egressControlConfig;
    public ConnectorVersion withEgressControlConfig(EgressControlConfig egressControlConfig) {
        this.egressControlConfig = egressControlConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ConnectorVersion withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchStage")
    public ConnectorVersionLaunchStageEnum launchStage;
    public ConnectorVersion withLaunchStage(ConnectorVersionLaunchStageEnum launchStage) {
        this.launchStage = launchStage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConnectorVersion withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseVersion")
    public String releaseVersion;
    public ConnectorVersion withReleaseVersion(String releaseVersion) {
        this.releaseVersion = releaseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleGrant")
    public RoleGrant roleGrant;
    public ConnectorVersion withRoleGrant(RoleGrant roleGrant) {
        this.roleGrant = roleGrant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleGrants")
    public RoleGrant[] roleGrants;
    public ConnectorVersion withRoleGrants(RoleGrant[] roleGrants) {
        this.roleGrants = roleGrants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedRuntimeFeatures")
    public SupportedRuntimeFeatures supportedRuntimeFeatures;
    public ConnectorVersion withSupportedRuntimeFeatures(SupportedRuntimeFeatures supportedRuntimeFeatures) {
        this.supportedRuntimeFeatures = supportedRuntimeFeatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public ConnectorVersion withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}