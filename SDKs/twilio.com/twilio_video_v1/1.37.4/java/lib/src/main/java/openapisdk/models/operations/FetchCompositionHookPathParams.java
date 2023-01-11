package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchCompositionHookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchCompositionHookPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}