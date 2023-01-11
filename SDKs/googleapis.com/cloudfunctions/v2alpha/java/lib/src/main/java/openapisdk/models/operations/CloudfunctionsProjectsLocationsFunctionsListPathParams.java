package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudfunctionsProjectsLocationsFunctionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudfunctionsProjectsLocationsFunctionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}