package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public EventarcProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}