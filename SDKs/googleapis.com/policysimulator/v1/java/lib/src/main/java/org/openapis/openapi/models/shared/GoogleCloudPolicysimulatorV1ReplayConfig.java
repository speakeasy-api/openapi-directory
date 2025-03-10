/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudPolicysimulatorV1ReplayConfig - The configuration used for a Replay.
 */
public class GoogleCloudPolicysimulatorV1ReplayConfig {
    /**
     * The logs to use as input for the Replay.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logSource")
    public GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum logSource;

    public GoogleCloudPolicysimulatorV1ReplayConfig withLogSource(GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum logSource) {
        this.logSource = logSource;
        return this;
    }
    
    /**
     * A mapping of the resources that you want to simulate policies for and the policies that you want to simulate. Keys are the full resource names for the resources. For example, `//cloudresourcemanager.googleapis.com/projects/my-project`. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. Values are Policy objects representing the policies that you want to simulate. Replays automatically take into account any IAM policies inherited through the resource hierarchy, and any policies set on descendant resources. You do not need to include these policies in the policy overlay.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyOverlay")
    public java.util.Map<String, GoogleIamV1Policy> policyOverlay;

    public GoogleCloudPolicysimulatorV1ReplayConfig withPolicyOverlay(java.util.Map<String, GoogleIamV1Policy> policyOverlay) {
        this.policyOverlay = policyOverlay;
        return this;
    }
    
    public GoogleCloudPolicysimulatorV1ReplayConfig(){}
}
