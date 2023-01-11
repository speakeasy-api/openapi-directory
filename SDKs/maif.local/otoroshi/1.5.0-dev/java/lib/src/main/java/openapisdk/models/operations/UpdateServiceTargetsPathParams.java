package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceTargetsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public UpdateServiceTargetsPathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}