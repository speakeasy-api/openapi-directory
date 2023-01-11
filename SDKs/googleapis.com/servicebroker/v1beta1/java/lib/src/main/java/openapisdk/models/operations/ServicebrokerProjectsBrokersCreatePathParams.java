package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerProjectsBrokersCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ServicebrokerProjectsBrokersCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}