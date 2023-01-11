package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServiceGroupServicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceGroupId")
    public String serviceGroupId;
    public ServiceGroupServicesPathParams withServiceGroupId(String serviceGroupId) {
        this.serviceGroupId = serviceGroupId;
        return this;
    }
}