package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsStreamsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DatastreamProjectsLocationsStreamsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}