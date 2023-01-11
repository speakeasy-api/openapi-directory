package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsFetchStaticIpsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DatastreamProjectsLocationsFetchStaticIpsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}