package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OndemandscanningProjectsLocationsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OndemandscanningProjectsLocationsOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}