package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VisionProjectsLocationsFilesAnnotatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public VisionProjectsLocationsFilesAnnotatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}