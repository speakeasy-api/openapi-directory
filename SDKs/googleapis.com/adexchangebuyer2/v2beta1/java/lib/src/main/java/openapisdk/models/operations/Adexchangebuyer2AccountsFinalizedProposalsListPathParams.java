package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsFinalizedProposalsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public Adexchangebuyer2AccountsFinalizedProposalsListPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}