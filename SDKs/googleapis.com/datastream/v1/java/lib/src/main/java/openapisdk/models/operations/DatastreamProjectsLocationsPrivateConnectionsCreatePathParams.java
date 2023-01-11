package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsPrivateConnectionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatastreamProjectsLocationsPrivateConnectionsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}