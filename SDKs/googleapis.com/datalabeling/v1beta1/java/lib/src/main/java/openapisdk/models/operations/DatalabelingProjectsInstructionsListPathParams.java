package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsInstructionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatalabelingProjectsInstructionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}