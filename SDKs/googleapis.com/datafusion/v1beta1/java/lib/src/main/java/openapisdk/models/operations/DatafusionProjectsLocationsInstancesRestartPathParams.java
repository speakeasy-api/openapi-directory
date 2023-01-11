package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesRestartPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DatafusionProjectsLocationsInstancesRestartPathParams withName(String name) {
        this.name = name;
        return this;
    }
}