package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryengineProjectsLocationsDataStoresUserEventsImportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsImportPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}