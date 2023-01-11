package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesRoutesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RunNamespacesRoutesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}