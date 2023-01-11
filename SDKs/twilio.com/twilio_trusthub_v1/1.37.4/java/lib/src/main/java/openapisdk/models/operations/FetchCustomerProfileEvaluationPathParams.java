package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchCustomerProfileEvaluationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CustomerProfileSid")
    public String customerProfileSid;
    public FetchCustomerProfileEvaluationPathParams withCustomerProfileSid(String customerProfileSid) {
        this.customerProfileSid = customerProfileSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchCustomerProfileEvaluationPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}