package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerProjectsBrokersInstancesBindingsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ServicebrokerProjectsBrokersInstancesBindingsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}