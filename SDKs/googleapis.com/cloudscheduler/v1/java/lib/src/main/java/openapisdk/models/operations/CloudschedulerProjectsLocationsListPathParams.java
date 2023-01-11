package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudschedulerProjectsLocationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudschedulerProjectsLocationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}