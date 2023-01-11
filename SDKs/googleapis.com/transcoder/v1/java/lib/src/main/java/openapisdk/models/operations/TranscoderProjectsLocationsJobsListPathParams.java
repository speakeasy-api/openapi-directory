package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranscoderProjectsLocationsJobsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TranscoderProjectsLocationsJobsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}