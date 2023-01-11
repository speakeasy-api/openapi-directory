package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PolicyControllerHubConfig
 * Configuration for Policy Controller
**/
public class PolicyControllerHubConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auditIntervalSeconds")
    public String auditIntervalSeconds;
    public PolicyControllerHubConfig withAuditIntervalSeconds(String auditIntervalSeconds) {
        this.auditIntervalSeconds = auditIntervalSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptableNamespaces")
    public String[] exemptableNamespaces;
    public PolicyControllerHubConfig withExemptableNamespaces(String[] exemptableNamespaces) {
        this.exemptableNamespaces = exemptableNamespaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installSpec")
    public PolicyControllerHubConfigInstallSpecEnum installSpec;
    public PolicyControllerHubConfig withInstallSpec(PolicyControllerHubConfigInstallSpecEnum installSpec) {
        this.installSpec = installSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logDeniesEnabled")
    public Boolean logDeniesEnabled;
    public PolicyControllerHubConfig withLogDeniesEnabled(Boolean logDeniesEnabled) {
        this.logDeniesEnabled = logDeniesEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitoring")
    public PolicyControllerMonitoringConfig monitoring;
    public PolicyControllerHubConfig withMonitoring(PolicyControllerMonitoringConfig monitoring) {
        this.monitoring = monitoring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mutationEnabled")
    public Boolean mutationEnabled;
    public PolicyControllerHubConfig withMutationEnabled(Boolean mutationEnabled) {
        this.mutationEnabled = mutationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referentialRulesEnabled")
    public Boolean referentialRulesEnabled;
    public PolicyControllerHubConfig withReferentialRulesEnabled(Boolean referentialRulesEnabled) {
        this.referentialRulesEnabled = referentialRulesEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateLibraryConfig")
    public PolicyControllerTemplateLibraryConfig templateLibraryConfig;
    public PolicyControllerHubConfig withTemplateLibraryConfig(PolicyControllerTemplateLibraryConfig templateLibraryConfig) {
        this.templateLibraryConfig = templateLibraryConfig;
        return this;
    }
}