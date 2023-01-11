package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsStreamsFetchErrorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stream")
    public String stream;
    public DatastreamProjectsLocationsStreamsFetchErrorsPathParams withStream(String stream) {
        this.stream = stream;
        return this;
    }
}