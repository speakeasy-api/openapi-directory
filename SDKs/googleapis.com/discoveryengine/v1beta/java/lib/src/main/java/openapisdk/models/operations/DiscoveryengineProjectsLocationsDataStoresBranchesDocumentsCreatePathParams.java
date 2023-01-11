package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}