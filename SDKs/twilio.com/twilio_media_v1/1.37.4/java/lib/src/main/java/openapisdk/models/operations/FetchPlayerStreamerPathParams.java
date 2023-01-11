package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchPlayerStreamerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchPlayerStreamerPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}