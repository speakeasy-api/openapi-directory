package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchApiKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientId")
    public String clientId;
    public PatchApiKeyPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public PatchApiKeyPathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}