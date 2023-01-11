package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCustomerProfileEvaluationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CustomerProfileSid")
    public String customerProfileSid;
    public ListCustomerProfileEvaluationPathParams withCustomerProfileSid(String customerProfileSid) {
        this.customerProfileSid = customerProfileSid;
        return this;
    }
}