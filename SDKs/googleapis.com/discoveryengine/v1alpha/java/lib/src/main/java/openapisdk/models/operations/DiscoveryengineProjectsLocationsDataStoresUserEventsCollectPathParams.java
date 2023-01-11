package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryengineProjectsLocationsDataStoresUserEventsCollectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsCollectPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}