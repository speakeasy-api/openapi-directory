package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsStreamsObjectsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DatastreamProjectsLocationsStreamsObjectsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}