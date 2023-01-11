package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RestoreConfig
 * Configuration of a restore. Next id: 9
**/
public class RestoreConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allNamespaces")
    public Boolean allNamespaces;
    public RestoreConfig withAllNamespaces(Boolean allNamespaces) {
        this.allNamespaces = allNamespaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterResourceConflictPolicy")
    public RestoreConfigClusterResourceConflictPolicyEnum clusterResourceConflictPolicy;
    public RestoreConfig withClusterResourceConflictPolicy(RestoreConfigClusterResourceConflictPolicyEnum clusterResourceConflictPolicy) {
        this.clusterResourceConflictPolicy = clusterResourceConflictPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterResourceRestoreScope")
    public ClusterResourceRestoreScope clusterResourceRestoreScope;
    public RestoreConfig withClusterResourceRestoreScope(ClusterResourceRestoreScope clusterResourceRestoreScope) {
        this.clusterResourceRestoreScope = clusterResourceRestoreScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespacedResourceRestoreMode")
    public RestoreConfigNamespacedResourceRestoreModeEnum namespacedResourceRestoreMode;
    public RestoreConfig withNamespacedResourceRestoreMode(RestoreConfigNamespacedResourceRestoreModeEnum namespacedResourceRestoreMode) {
        this.namespacedResourceRestoreMode = namespacedResourceRestoreMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedApplications")
    public NamespacedNames selectedApplications;
    public RestoreConfig withSelectedApplications(NamespacedNames selectedApplications) {
        this.selectedApplications = selectedApplications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedNamespaces")
    public Namespaces selectedNamespaces;
    public RestoreConfig withSelectedNamespaces(Namespaces selectedNamespaces) {
        this.selectedNamespaces = selectedNamespaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("substitutionRules")
    public SubstitutionRule[] substitutionRules;
    public RestoreConfig withSubstitutionRules(SubstitutionRule[] substitutionRules) {
        this.substitutionRules = substitutionRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeDataRestorePolicy")
    public RestoreConfigVolumeDataRestorePolicyEnum volumeDataRestorePolicy;
    public RestoreConfig withVolumeDataRestorePolicy(RestoreConfigVolumeDataRestorePolicyEnum volumeDataRestorePolicy) {
        this.volumeDataRestorePolicy = volumeDataRestorePolicy;
        return this;
    }
}