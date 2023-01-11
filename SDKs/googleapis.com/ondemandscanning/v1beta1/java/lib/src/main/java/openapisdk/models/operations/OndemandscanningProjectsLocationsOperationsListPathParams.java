package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OndemandscanningProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OndemandscanningProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}