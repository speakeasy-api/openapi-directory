package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudtasksProjectsLocationsQueuesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}