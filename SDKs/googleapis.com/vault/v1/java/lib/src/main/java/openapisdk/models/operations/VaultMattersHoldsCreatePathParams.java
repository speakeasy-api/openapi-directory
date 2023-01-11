package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersHoldsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=matterId")
    public String matterId;
    public VaultMattersHoldsCreatePathParams withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
}