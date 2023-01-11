package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateHostedNumbersHostedNumberOrderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateHostedNumbersHostedNumberOrderPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}