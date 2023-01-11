package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RuntimeconfigProjectsConfigsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}