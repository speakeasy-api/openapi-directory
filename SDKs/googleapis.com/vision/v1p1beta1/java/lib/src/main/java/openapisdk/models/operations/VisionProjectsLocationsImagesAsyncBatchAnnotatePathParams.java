package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VisionProjectsLocationsImagesAsyncBatchAnnotatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public VisionProjectsLocationsImagesAsyncBatchAnnotatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}