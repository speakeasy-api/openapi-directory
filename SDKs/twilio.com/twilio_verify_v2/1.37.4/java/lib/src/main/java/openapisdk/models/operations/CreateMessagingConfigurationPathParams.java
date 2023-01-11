package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMessagingConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateMessagingConfigurationPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}