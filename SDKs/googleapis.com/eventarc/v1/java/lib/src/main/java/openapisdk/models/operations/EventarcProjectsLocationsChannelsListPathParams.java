package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsChannelsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public EventarcProjectsLocationsChannelsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}