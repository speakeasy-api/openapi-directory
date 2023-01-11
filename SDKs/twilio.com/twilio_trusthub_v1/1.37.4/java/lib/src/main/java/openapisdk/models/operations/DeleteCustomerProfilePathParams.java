package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCustomerProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteCustomerProfilePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}