package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUnderstandAssistantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteUnderstandAssistantPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}