package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsProposalsAddNotePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public Adexchangebuyer2AccountsProposalsAddNotePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=proposalId")
    public String proposalId;
    public Adexchangebuyer2AccountsProposalsAddNotePathParams withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
}