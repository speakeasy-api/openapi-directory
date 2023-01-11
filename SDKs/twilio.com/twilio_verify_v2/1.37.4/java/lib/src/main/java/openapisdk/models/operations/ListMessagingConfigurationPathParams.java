package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMessagingConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListMessagingConfigurationPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}