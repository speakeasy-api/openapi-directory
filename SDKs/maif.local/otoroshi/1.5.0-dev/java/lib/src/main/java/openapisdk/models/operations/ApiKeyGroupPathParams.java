package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApiKeyGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientId")
    public String clientId;
    public ApiKeyGroupPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public ApiKeyGroupPathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}