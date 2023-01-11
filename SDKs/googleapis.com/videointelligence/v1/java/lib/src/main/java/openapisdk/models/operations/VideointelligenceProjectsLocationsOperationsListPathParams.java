package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VideointelligenceProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public VideointelligenceProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}