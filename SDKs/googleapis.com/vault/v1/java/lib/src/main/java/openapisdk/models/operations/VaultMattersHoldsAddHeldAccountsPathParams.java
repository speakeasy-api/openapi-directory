package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersHoldsAddHeldAccountsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=holdId")
    public String holdId;
    public VaultMattersHoldsAddHeldAccountsPathParams withHoldId(String holdId) {
        this.holdId = holdId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=matterId")
    public String matterId;
    public VaultMattersHoldsAddHeldAccountsPathParams withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
}