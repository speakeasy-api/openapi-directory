package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsVariablesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RuntimeconfigProjectsConfigsVariablesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}