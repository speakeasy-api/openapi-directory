package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesTasksCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudtasksProjectsLocationsQueuesTasksCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}