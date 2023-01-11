package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsInstructionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatalabelingProjectsInstructionsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}