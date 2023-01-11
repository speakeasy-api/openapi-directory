package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudfunctionsProjectsLocationsFunctionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudfunctionsProjectsLocationsFunctionsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}