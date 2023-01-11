package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateStreamMessagePathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=StreamSid")
    public String streamSid;
    public CreateStreamMessagePathParams withStreamSid(String streamSid) {
        this.streamSid = streamSid;
        return this;
    }
}