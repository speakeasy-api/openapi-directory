package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBindingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListBindingPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}