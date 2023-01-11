package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesServicesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RunNamespacesServicesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}