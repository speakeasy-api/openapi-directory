package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicecontrolServicesCheckPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceName")
    public String serviceName;
    public ServicecontrolServicesCheckPathParams withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}