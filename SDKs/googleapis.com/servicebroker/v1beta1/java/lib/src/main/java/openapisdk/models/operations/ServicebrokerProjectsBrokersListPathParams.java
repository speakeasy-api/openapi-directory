package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerProjectsBrokersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ServicebrokerProjectsBrokersListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}