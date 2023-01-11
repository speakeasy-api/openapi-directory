package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudschedulerProjectsLocationsJobsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudschedulerProjectsLocationsJobsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}