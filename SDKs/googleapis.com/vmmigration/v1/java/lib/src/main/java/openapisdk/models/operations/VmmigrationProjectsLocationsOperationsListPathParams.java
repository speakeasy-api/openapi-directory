package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public VmmigrationProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}