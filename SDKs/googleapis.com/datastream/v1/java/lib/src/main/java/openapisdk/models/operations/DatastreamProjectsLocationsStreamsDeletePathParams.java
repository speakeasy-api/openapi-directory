package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsStreamsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DatastreamProjectsLocationsStreamsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}