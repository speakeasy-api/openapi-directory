package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchCustomerProfileEntityAssignmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CustomerProfileSid")
    public String customerProfileSid;
    public FetchCustomerProfileEntityAssignmentPathParams withCustomerProfileSid(String customerProfileSid) {
        this.customerProfileSid = customerProfileSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchCustomerProfileEntityAssignmentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}