package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudfunctionsProjectsLocationsFunctionsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudfunctionsProjectsLocationsFunctionsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}