package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchProjectsLocationsJobsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BatchProjectsLocationsJobsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}