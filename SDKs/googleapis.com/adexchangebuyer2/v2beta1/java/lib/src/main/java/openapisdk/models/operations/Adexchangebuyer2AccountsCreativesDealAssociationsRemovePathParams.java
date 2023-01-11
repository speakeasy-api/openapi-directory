package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsCreativesDealAssociationsRemovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public Adexchangebuyer2AccountsCreativesDealAssociationsRemovePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creativeId")
    public String creativeId;
    public Adexchangebuyer2AccountsCreativesDealAssociationsRemovePathParams withCreativeId(String creativeId) {
        this.creativeId = creativeId;
        return this;
    }
}