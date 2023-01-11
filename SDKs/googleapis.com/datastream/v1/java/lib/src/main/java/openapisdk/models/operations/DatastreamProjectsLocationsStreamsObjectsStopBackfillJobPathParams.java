package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsStreamsObjectsStopBackfillJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public DatastreamProjectsLocationsStreamsObjectsStopBackfillJobPathParams withObject(String object) {
        this.object = object;
        return this;
    }
}