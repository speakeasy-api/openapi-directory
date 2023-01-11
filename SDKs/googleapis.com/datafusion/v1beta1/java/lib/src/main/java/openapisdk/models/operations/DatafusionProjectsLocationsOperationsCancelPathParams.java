package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DatafusionProjectsLocationsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}