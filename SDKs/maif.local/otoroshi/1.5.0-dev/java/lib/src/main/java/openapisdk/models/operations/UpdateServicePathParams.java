package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public UpdateServicePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}