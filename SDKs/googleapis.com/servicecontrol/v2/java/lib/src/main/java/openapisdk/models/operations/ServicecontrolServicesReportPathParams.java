package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicecontrolServicesReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceName")
    public String serviceName;
    public ServicecontrolServicesReportPathParams withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}