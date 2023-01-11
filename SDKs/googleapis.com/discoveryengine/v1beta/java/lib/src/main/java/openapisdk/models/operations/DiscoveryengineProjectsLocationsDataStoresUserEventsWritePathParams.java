package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryengineProjectsLocationsDataStoresUserEventsWritePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsWritePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}