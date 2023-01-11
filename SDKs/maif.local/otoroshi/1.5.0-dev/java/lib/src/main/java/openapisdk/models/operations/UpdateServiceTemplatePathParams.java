package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public UpdateServiceTemplatePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}