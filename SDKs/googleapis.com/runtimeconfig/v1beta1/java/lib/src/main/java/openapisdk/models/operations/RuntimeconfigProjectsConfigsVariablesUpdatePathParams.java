package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsVariablesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RuntimeconfigProjectsConfigsVariablesUpdatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}