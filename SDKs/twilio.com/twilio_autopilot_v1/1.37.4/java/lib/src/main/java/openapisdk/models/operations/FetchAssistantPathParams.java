package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchAssistantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchAssistantPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}