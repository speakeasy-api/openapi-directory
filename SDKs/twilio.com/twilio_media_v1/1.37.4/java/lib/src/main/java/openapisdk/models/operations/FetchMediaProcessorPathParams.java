package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchMediaProcessorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchMediaProcessorPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}