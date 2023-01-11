package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsConnectionProfilesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatamigrationProjectsLocationsConnectionProfilesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}