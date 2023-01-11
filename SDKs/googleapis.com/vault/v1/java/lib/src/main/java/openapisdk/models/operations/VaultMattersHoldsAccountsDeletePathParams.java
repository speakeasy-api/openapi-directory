package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersHoldsAccountsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public VaultMattersHoldsAccountsDeletePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=holdId")
    public String holdId;
    public VaultMattersHoldsAccountsDeletePathParams withHoldId(String holdId) {
        this.holdId = holdId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=matterId")
    public String matterId;
    public VaultMattersHoldsAccountsDeletePathParams withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
}