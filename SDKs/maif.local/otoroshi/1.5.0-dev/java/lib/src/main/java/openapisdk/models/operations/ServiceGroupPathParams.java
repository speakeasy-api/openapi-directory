package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServiceGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceGroupId")
    public String serviceGroupId;
    public ServiceGroupPathParams withServiceGroupId(String serviceGroupId) {
        this.serviceGroupId = serviceGroupId;
        return this;
    }
}