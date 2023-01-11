package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchCustomerProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchCustomerProfilePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}