package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudschedulerProjectsLocationsJobsRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudschedulerProjectsLocationsJobsRunPathParams withName(String name) {
        this.name = name;
        return this;
    }
}