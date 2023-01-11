package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnloadServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public UnloadServicePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}