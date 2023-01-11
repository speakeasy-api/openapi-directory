package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsConnectionProfilesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatastreamProjectsLocationsConnectionProfilesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}