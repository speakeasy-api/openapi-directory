package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchCustomerProfileChannelEndpointAssignmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CustomerProfileSid")
    public String customerProfileSid;
    public FetchCustomerProfileChannelEndpointAssignmentPathParams withCustomerProfileSid(String customerProfileSid) {
        this.customerProfileSid = customerProfileSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchCustomerProfileChannelEndpointAssignmentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}