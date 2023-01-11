package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsChannelConnectionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public EventarcProjectsLocationsChannelConnectionsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}