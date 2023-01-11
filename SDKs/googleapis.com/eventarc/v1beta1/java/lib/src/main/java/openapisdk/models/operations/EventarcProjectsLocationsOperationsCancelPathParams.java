package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public EventarcProjectsLocationsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}