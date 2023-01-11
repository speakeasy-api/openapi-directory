package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchHostedNumbersHostedNumberOrderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchHostedNumbersHostedNumberOrderPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}