package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ApigeeregistryProjectsLocationsOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}