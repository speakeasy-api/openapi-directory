package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesAuthorizeddomainsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RunNamespacesAuthorizeddomainsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}