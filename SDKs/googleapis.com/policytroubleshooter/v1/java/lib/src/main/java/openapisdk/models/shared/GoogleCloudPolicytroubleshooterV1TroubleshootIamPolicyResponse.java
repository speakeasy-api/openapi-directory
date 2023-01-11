package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
 * Response for TroubleshootIamPolicy.
**/
public class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access")
    public GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum access;
    public GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse withAccess(GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public GoogleRpcStatus[] errors;
    public GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse withErrors(GoogleRpcStatus[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explainedPolicies")
    public GoogleCloudPolicytroubleshooterV1ExplainedPolicy[] explainedPolicies;
    public GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse withExplainedPolicies(GoogleCloudPolicytroubleshooterV1ExplainedPolicy[] explainedPolicies) {
        this.explainedPolicies = explainedPolicies;
        return this;
    }
}