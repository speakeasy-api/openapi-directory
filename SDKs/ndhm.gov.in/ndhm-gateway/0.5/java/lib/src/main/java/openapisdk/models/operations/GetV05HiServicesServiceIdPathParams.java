package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV05HiServicesServiceIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=service-id")
    public String serviceId;
    public GetV05HiServicesServiceIdPathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}