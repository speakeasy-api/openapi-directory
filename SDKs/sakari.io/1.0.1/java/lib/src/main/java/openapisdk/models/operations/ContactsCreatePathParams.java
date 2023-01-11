package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public ContactsCreatePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}