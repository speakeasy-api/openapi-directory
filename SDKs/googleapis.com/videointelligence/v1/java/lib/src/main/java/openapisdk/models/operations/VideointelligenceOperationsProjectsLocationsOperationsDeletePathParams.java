package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VideointelligenceOperationsProjectsLocationsOperationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public VideointelligenceOperationsProjectsLocationsOperationsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}