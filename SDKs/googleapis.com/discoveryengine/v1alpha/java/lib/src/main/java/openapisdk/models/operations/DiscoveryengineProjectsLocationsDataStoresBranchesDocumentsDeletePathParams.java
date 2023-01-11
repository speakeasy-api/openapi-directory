package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}