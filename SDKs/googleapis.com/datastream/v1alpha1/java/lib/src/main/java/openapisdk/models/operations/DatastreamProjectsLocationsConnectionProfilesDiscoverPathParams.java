package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsConnectionProfilesDiscoverPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatastreamProjectsLocationsConnectionProfilesDiscoverPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}