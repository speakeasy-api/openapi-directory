package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMediaProcessorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateMediaProcessorPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}