package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteContentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteContentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}