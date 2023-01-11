package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudfunctionsProjectsLocationsFunctionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudfunctionsProjectsLocationsFunctionsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}