package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsTriggersSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public EventarcProjectsLocationsTriggersSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}