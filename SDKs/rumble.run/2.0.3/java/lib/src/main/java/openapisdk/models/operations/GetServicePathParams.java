package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=service_id")
    public String serviceId;
    public GetServicePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}