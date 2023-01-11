package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCompositionHookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateCompositionHookPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}