package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public ServicePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}