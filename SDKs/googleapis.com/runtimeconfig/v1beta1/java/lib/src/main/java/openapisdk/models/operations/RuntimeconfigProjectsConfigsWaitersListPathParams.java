package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsWaitersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RuntimeconfigProjectsConfigsWaitersListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}