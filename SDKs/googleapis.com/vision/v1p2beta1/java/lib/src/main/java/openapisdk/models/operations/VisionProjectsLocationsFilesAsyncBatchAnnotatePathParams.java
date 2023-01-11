package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VisionProjectsLocationsFilesAsyncBatchAnnotatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public VisionProjectsLocationsFilesAsyncBatchAnnotatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}