package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCompositionHookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteCompositionHookPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}