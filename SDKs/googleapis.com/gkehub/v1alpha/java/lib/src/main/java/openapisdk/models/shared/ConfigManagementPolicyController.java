package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementPolicyController
 * Configuration for Policy Controller
**/
public class ConfigManagementPolicyController {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auditIntervalSeconds")
    public String auditIntervalSeconds;
    public ConfigManagementPolicyController withAuditIntervalSeconds(String auditIntervalSeconds) {
        this.auditIntervalSeconds = auditIntervalSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public ConfigManagementPolicyController withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptableNamespaces")
    public String[] exemptableNamespaces;
    public ConfigManagementPolicyController withExemptableNamespaces(String[] exemptableNamespaces) {
        this.exemptableNamespaces = exemptableNamespaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logDeniesEnabled")
    public Boolean logDeniesEnabled;
    public ConfigManagementPolicyController withLogDeniesEnabled(Boolean logDeniesEnabled) {
        this.logDeniesEnabled = logDeniesEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitoring")
    public ConfigManagementPolicyControllerMonitoring monitoring;
    public ConfigManagementPolicyController withMonitoring(ConfigManagementPolicyControllerMonitoring monitoring) {
        this.monitoring = monitoring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mutationEnabled")
    public Boolean mutationEnabled;
    public ConfigManagementPolicyController withMutationEnabled(Boolean mutationEnabled) {
        this.mutationEnabled = mutationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referentialRulesEnabled")
    public Boolean referentialRulesEnabled;
    public ConfigManagementPolicyController withReferentialRulesEnabled(Boolean referentialRulesEnabled) {
        this.referentialRulesEnabled = referentialRulesEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateLibraryInstalled")
    public Boolean templateLibraryInstalled;
    public ConfigManagementPolicyController withTemplateLibraryInstalled(Boolean templateLibraryInstalled) {
        this.templateLibraryInstalled = templateLibraryInstalled;
        return this;
    }
}