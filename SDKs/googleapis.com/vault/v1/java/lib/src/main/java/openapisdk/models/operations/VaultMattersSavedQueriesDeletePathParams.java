package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersSavedQueriesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=matterId")
    public String matterId;
    public VaultMattersSavedQueriesDeletePathParams withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=savedQueryId")
    public String savedQueryId;
    public VaultMattersSavedQueriesDeletePathParams withSavedQueryId(String savedQueryId) {
        this.savedQueryId = savedQueryId;
        return this;
    }
}