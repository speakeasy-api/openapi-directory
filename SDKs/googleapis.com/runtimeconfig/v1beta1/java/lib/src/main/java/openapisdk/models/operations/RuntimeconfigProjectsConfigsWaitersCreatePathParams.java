package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsWaitersCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RuntimeconfigProjectsConfigsWaitersCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}