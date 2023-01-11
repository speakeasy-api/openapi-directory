package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchMessagingConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Country")
    public String country;
    public FetchMessagingConfigurationPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchMessagingConfigurationPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}