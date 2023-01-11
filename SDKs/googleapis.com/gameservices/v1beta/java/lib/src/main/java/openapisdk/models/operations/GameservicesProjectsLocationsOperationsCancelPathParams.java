package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GameservicesProjectsLocationsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GameservicesProjectsLocationsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}