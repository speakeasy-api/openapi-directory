package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomerProfileEvaluationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CustomerProfileSid")
    public String customerProfileSid;
    public CreateCustomerProfileEvaluationPathParams withCustomerProfileSid(String customerProfileSid) {
        this.customerProfileSid = customerProfileSid;
        return this;
    }
}