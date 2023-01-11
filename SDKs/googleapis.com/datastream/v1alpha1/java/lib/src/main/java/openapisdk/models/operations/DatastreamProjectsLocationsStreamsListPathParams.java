package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsStreamsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatastreamProjectsLocationsStreamsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}