package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudassetProjectsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudassetProjectsOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}