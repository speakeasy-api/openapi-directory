package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApiKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientId")
    public String clientId;
    public ApiKeyPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public ApiKeyPathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}