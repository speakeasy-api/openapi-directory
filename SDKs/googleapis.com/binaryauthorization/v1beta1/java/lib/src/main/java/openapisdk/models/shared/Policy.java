package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Policy
 * A policy for Binary Authorization.
**/
public class Policy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admissionWhitelistPatterns")
    public AdmissionWhitelistPattern[] admissionWhitelistPatterns;
    public Policy withAdmissionWhitelistPatterns(AdmissionWhitelistPattern[] admissionWhitelistPatterns) {
        this.admissionWhitelistPatterns = admissionWhitelistPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterAdmissionRules")
    public java.util.Map<String, AdmissionRule> clusterAdmissionRules;
    public Policy withClusterAdmissionRules(java.util.Map<String, AdmissionRule> clusterAdmissionRules) {
        this.clusterAdmissionRules = clusterAdmissionRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAdmissionRule")
    public AdmissionRule defaultAdmissionRule;
    public Policy withDefaultAdmissionRule(AdmissionRule defaultAdmissionRule) {
        this.defaultAdmissionRule = defaultAdmissionRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Policy withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Policy withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("globalPolicyEvaluationMode")
    public PolicyGlobalPolicyEvaluationModeEnum globalPolicyEvaluationMode;
    public Policy withGlobalPolicyEvaluationMode(PolicyGlobalPolicyEvaluationModeEnum globalPolicyEvaluationMode) {
        this.globalPolicyEvaluationMode = globalPolicyEvaluationMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("istioServiceIdentityAdmissionRules")
    public java.util.Map<String, AdmissionRule> istioServiceIdentityAdmissionRules;
    public Policy withIstioServiceIdentityAdmissionRules(java.util.Map<String, AdmissionRule> istioServiceIdentityAdmissionRules) {
        this.istioServiceIdentityAdmissionRules = istioServiceIdentityAdmissionRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetesNamespaceAdmissionRules")
    public java.util.Map<String, AdmissionRule> kubernetesNamespaceAdmissionRules;
    public Policy withKubernetesNamespaceAdmissionRules(java.util.Map<String, AdmissionRule> kubernetesNamespaceAdmissionRules) {
        this.kubernetesNamespaceAdmissionRules = kubernetesNamespaceAdmissionRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetesServiceAccountAdmissionRules")
    public java.util.Map<String, AdmissionRule> kubernetesServiceAccountAdmissionRules;
    public Policy withKubernetesServiceAccountAdmissionRules(java.util.Map<String, AdmissionRule> kubernetesServiceAccountAdmissionRules) {
        this.kubernetesServiceAccountAdmissionRules = kubernetesServiceAccountAdmissionRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Policy withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Policy withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}