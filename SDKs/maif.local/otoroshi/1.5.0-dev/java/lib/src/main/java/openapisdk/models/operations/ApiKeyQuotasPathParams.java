package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApiKeyQuotasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientId")
    public String clientId;
    public ApiKeyQuotasPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public ApiKeyQuotasPathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}