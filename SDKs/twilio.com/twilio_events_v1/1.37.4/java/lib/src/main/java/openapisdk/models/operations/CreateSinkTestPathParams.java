package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSinkTestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public CreateSinkTestPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}