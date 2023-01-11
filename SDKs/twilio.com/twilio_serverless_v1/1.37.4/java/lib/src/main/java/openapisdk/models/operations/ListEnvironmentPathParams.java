package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEnvironmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListEnvironmentPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}