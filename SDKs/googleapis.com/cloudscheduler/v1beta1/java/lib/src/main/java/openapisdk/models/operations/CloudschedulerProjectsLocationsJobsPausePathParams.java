package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudschedulerProjectsLocationsJobsPausePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudschedulerProjectsLocationsJobsPausePathParams withName(String name) {
        this.name = name;
        return this;
    }
}