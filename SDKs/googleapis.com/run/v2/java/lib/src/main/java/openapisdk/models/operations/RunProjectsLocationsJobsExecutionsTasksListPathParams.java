package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsJobsExecutionsTasksListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RunProjectsLocationsJobsExecutionsTasksListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}