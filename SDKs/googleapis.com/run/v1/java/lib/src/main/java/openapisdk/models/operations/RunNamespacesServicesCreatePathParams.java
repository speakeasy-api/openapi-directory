package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesServicesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RunNamespacesServicesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}