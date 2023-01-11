package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public CreateServiceTemplatePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}