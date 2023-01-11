package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchCompositionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchCompositionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}