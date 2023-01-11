package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RuntimeconfigProjectsConfigsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}