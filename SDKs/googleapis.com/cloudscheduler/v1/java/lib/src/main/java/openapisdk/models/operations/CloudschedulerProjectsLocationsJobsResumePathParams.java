package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudschedulerProjectsLocationsJobsResumePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudschedulerProjectsLocationsJobsResumePathParams withName(String name) {
        this.name = name;
        return this;
    }
}