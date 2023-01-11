package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationPathParams withName(String name) {
        this.name = name;
        return this;
    }
}