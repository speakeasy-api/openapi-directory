package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCompositionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteCompositionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}