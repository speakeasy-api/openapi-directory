package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsTriggersGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public EventarcProjectsLocationsTriggersGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}