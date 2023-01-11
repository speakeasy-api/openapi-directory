package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersHoldsRemoveHeldAccountsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=holdId")
    public String holdId;
    public VaultMattersHoldsRemoveHeldAccountsPathParams withHoldId(String holdId) {
        this.holdId = holdId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=matterId")
    public String matterId;
    public VaultMattersHoldsRemoveHeldAccountsPathParams withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
}