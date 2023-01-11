package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteHostedNumbersHostedNumberOrderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteHostedNumbersHostedNumberOrderPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}