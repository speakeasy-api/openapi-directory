package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMessagingConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Country")
    public String country;
    public UpdateMessagingConfigurationPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public UpdateMessagingConfigurationPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}