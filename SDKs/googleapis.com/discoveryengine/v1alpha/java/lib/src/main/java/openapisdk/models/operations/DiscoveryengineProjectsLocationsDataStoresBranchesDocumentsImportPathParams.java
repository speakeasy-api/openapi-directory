package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}