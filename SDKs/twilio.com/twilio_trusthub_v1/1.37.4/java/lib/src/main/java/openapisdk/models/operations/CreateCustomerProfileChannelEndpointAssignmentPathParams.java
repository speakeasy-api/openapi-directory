package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomerProfileChannelEndpointAssignmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CustomerProfileSid")
    public String customerProfileSid;
    public CreateCustomerProfileChannelEndpointAssignmentPathParams withCustomerProfileSid(String customerProfileSid) {
        this.customerProfileSid = customerProfileSid;
        return this;
    }
}