package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public PatchServicePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}