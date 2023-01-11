package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServiceTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public ServiceTemplatePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}