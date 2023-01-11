package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMessagingConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Country")
    public String country;
    public DeleteMessagingConfigurationPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public DeleteMessagingConfigurationPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}