package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest {
    @SpeakeasyMetadata("form:name=PolicySid")
    public String policySid;
    public CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest withPolicySid(String policySid) {
        this.policySid = policySid;
        return this;
    }
}