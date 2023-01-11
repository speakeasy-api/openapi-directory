package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}