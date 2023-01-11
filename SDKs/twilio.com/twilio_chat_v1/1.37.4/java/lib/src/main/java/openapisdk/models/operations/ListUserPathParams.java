package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListUserPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}