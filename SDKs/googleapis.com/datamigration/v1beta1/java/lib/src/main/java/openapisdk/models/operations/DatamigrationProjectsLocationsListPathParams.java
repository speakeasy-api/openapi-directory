package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DatamigrationProjectsLocationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}