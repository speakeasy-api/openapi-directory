package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchProjectsLocationsJobsTaskGroupsTasksListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BatchProjectsLocationsJobsTaskGroupsTasksListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}