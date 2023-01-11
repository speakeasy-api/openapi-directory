package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OndemandscanningProjectsLocationsOperationsWaitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OndemandscanningProjectsLocationsOperationsWaitPathParams withName(String name) {
        this.name = name;
        return this;
    }
}