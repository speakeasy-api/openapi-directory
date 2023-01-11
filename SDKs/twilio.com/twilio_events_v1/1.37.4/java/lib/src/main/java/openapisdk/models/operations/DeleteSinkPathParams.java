package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSinkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteSinkPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}