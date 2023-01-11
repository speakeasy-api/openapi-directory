package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSinkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateSinkPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}