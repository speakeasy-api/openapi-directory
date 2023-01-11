package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsCreativesDealAssociationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public Adexchangebuyer2AccountsCreativesDealAssociationsListPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creativeId")
    public String creativeId;
    public Adexchangebuyer2AccountsCreativesDealAssociationsListPathParams withCreativeId(String creativeId) {
        this.creativeId = creativeId;
        return this;
    }
}