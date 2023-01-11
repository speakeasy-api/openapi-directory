package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public DeleteServicePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}