package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsTriggersTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public EventarcProjectsLocationsTriggersTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}