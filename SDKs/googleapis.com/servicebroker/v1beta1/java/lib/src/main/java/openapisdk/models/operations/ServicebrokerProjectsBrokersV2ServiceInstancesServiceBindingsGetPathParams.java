package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}