package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchModelBuildPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public FetchModelBuildPathParams withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchModelBuildPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}