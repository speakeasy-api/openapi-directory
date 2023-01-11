package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsTriggersPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public EventarcProjectsLocationsTriggersPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}