package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdsProjectsLocationsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IdsProjectsLocationsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}