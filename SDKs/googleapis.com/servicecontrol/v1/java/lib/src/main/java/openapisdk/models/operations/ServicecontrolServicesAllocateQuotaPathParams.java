package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicecontrolServicesAllocateQuotaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceName")
    public String serviceName;
    public ServicecontrolServicesAllocateQuotaPathParams withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}