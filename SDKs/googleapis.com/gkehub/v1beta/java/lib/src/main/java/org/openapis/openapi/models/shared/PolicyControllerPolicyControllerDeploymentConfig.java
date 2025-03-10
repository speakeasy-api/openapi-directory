/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PolicyControllerPolicyControllerDeploymentConfig - Deployment-specific configuration.
 */
public class PolicyControllerPolicyControllerDeploymentConfig {
    /**
     * ResourceRequirements describes the compute resource requirements.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerResources")
    public PolicyControllerResourceRequirements containerResources;

    public PolicyControllerPolicyControllerDeploymentConfig withContainerResources(PolicyControllerResourceRequirements containerResources) {
        this.containerResources = containerResources;
        return this;
    }
    
    /**
     * Pod anti-affinity enablement.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("podAntiAffinity")
    public Boolean podAntiAffinity;

    public PolicyControllerPolicyControllerDeploymentConfig withPodAntiAffinity(Boolean podAntiAffinity) {
        this.podAntiAffinity = podAntiAffinity;
        return this;
    }
    
    /**
     * Pod tolerations of node taints.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("podTolerations")
    public PolicyControllerToleration[] podTolerations;

    public PolicyControllerPolicyControllerDeploymentConfig withPodTolerations(PolicyControllerToleration[] podTolerations) {
        this.podTolerations = podTolerations;
        return this;
    }
    
    /**
     * Pod replica count.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicaCount")
    public String replicaCount;

    public PolicyControllerPolicyControllerDeploymentConfig withReplicaCount(String replicaCount) {
        this.replicaCount = replicaCount;
        return this;
    }
    
    public PolicyControllerPolicyControllerDeploymentConfig(){}
}
