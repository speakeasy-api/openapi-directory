package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GameservicesProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GameservicesProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}