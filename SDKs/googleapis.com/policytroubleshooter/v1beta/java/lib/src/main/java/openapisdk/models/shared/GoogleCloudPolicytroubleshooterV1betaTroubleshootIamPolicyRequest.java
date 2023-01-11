package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest
 * Request for TroubleshootIamPolicy.
**/
public class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessTuple")
    public GoogleCloudPolicytroubleshooterV1betaAccessTuple accessTuple;
    public GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest withAccessTuple(GoogleCloudPolicytroubleshooterV1betaAccessTuple accessTuple) {
        this.accessTuple = accessTuple;
        return this;
    }
}