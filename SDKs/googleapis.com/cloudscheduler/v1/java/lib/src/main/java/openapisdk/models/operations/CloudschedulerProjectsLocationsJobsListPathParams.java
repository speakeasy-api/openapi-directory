package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudschedulerProjectsLocationsJobsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudschedulerProjectsLocationsJobsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}