package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCustomerProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateCustomerProfilePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}