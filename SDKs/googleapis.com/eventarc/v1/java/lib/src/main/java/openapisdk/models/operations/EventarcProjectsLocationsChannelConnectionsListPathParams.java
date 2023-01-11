package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsChannelConnectionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public EventarcProjectsLocationsChannelConnectionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}