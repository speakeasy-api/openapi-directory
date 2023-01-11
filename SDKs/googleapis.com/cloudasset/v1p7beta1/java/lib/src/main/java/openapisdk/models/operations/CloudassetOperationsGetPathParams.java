package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudassetOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudassetOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}