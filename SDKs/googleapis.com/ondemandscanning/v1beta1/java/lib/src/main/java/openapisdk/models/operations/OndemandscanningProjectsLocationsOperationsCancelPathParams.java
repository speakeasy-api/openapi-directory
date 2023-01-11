package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OndemandscanningProjectsLocationsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OndemandscanningProjectsLocationsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}