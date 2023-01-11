package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VisionProjectsLocationsImagesAnnotatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public VisionProjectsLocationsImagesAnnotatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}