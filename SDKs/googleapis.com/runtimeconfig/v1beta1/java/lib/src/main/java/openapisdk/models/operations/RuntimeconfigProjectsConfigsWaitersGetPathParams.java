package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsWaitersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RuntimeconfigProjectsConfigsWaitersGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}