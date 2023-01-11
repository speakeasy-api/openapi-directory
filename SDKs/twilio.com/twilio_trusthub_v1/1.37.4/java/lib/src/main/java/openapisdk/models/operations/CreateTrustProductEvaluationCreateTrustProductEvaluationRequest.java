package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTrustProductEvaluationCreateTrustProductEvaluationRequest {
    @SpeakeasyMetadata("form:name=PolicySid")
    public String policySid;
    public CreateTrustProductEvaluationCreateTrustProductEvaluationRequest withPolicySid(String policySid) {
        this.policySid = policySid;
        return this;
    }
}