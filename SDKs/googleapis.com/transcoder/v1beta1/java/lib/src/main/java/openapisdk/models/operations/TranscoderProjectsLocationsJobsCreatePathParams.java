package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranscoderProjectsLocationsJobsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TranscoderProjectsLocationsJobsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}