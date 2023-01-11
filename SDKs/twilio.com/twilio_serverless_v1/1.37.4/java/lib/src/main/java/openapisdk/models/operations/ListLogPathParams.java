package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLogPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EnvironmentSid")
    public String environmentSid;
    public ListLogPathParams withEnvironmentSid(String environmentSid) {
        this.environmentSid = environmentSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListLogPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}