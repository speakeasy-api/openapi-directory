package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}