package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBuildPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListBuildPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}