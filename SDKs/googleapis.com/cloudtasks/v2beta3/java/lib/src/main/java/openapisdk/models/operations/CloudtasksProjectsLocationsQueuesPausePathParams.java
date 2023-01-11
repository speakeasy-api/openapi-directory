package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesPausePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudtasksProjectsLocationsQueuesPausePathParams withName(String name) {
        this.name = name;
        return this;
    }
}