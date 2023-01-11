package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
 * Response for TroubleshootIamPolicy.
**/
public class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access")
    public GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum access;
    public GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse withAccess(GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explainedPolicies")
    public GoogleCloudPolicytroubleshooterV1betaExplainedPolicy[] explainedPolicies;
    public GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse withExplainedPolicies(GoogleCloudPolicytroubleshooterV1betaExplainedPolicy[] explainedPolicies) {
        this.explainedPolicies = explainedPolicies;
        return this;
    }
}