package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerProjectsBrokersInstancesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ServicebrokerProjectsBrokersInstancesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}