package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCustomerProfileEntityAssignmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CustomerProfileSid")
    public String customerProfileSid;
    public ListCustomerProfileEntityAssignmentPathParams withCustomerProfileSid(String customerProfileSid) {
        this.customerProfileSid = customerProfileSid;
        return this;
    }
}