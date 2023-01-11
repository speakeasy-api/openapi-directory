package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsStreamsObjectsStartBackfillJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public DatastreamProjectsLocationsStreamsObjectsStartBackfillJobPathParams withObject(String object) {
        this.object = object;
        return this;
    }
}