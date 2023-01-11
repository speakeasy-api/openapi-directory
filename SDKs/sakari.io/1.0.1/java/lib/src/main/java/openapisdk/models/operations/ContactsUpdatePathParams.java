package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public ContactsUpdatePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contactId")
    public String contactId;
    public ContactsUpdatePathParams withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
}