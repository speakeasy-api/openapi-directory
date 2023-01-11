package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteServiceTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public DeleteServiceTemplatePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}