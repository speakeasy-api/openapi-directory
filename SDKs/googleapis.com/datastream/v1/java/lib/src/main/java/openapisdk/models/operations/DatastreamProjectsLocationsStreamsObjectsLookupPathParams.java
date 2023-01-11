package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsStreamsObjectsLookupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatastreamProjectsLocationsStreamsObjectsLookupPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}