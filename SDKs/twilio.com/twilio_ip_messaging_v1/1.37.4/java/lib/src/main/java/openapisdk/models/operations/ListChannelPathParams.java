package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListChannelPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}