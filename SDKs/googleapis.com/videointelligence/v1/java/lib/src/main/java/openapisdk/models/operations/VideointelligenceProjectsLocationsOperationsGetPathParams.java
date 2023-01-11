package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VideointelligenceProjectsLocationsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public VideointelligenceProjectsLocationsOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}