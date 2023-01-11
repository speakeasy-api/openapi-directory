package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest
 * Request for TroubleshootIamPolicy.
**/
public class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessTuple")
    public GoogleCloudPolicytroubleshooterV1AccessTuple accessTuple;
    public GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest withAccessTuple(GoogleCloudPolicytroubleshooterV1AccessTuple accessTuple) {
        this.accessTuple = accessTuple;
        return this;
    }
}