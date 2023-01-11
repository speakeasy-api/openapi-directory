package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchInteractionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchInteractionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}