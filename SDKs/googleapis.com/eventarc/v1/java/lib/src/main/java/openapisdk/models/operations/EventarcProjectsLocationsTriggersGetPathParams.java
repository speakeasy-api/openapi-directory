package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsTriggersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public EventarcProjectsLocationsTriggersGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}