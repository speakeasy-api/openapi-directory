package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersSavedQueriesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=matterId")
    public String matterId;
    public VaultMattersSavedQueriesListPathParams withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
}