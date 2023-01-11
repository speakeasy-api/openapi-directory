package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOneServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public GetOneServicePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}