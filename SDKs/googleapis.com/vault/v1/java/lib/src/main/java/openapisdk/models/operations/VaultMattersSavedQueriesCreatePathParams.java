package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersSavedQueriesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=matterId")
    public String matterId;
    public VaultMattersSavedQueriesCreatePathParams withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
}