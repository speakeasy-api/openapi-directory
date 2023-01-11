package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=binding_id")
    public String bindingId;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreatePathParams withBindingId(String bindingId) {
        this.bindingId = bindingId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}