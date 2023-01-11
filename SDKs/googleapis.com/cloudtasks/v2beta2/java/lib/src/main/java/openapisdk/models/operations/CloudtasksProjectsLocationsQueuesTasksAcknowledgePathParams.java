package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesTasksAcknowledgePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudtasksProjectsLocationsQueuesTasksAcknowledgePathParams withName(String name) {
        this.name = name;
        return this;
    }
}