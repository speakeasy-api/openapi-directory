package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VideointelligenceOperationsProjectsLocationsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public VideointelligenceOperationsProjectsLocationsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}