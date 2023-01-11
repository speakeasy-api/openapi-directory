package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsProvidersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public EventarcProjectsLocationsProvidersListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}