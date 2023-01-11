package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCustomerProfileChannelEndpointAssignmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CustomerProfileSid")
    public String customerProfileSid;
    public DeleteCustomerProfileChannelEndpointAssignmentPathParams withCustomerProfileSid(String customerProfileSid) {
        this.customerProfileSid = customerProfileSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteCustomerProfileChannelEndpointAssignmentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}