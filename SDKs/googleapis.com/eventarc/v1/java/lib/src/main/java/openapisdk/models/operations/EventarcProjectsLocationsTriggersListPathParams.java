package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsTriggersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public EventarcProjectsLocationsTriggersListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}