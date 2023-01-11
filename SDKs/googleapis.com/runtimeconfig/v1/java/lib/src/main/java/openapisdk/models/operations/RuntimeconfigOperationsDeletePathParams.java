package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigOperationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RuntimeconfigOperationsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}