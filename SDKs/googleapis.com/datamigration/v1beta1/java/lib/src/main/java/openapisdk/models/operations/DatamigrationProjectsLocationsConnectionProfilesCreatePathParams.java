package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsConnectionProfilesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatamigrationProjectsLocationsConnectionProfilesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}