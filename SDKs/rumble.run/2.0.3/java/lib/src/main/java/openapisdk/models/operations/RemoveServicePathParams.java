package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=service_id")
    public String serviceId;
    public RemoveServicePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}