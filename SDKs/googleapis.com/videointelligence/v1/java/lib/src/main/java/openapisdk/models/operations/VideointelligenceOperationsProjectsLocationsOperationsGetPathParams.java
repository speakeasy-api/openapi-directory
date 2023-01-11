package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VideointelligenceOperationsProjectsLocationsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public VideointelligenceOperationsProjectsLocationsOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}