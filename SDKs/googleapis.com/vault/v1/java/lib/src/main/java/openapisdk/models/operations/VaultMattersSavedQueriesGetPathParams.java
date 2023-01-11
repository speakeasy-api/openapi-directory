package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersSavedQueriesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=matterId")
    public String matterId;
    public VaultMattersSavedQueriesGetPathParams withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=savedQueryId")
    public String savedQueryId;
    public VaultMattersSavedQueriesGetPathParams withSavedQueryId(String savedQueryId) {
        this.savedQueryId = savedQueryId;
        return this;
    }
}