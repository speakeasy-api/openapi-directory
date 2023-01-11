package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ContactRequest contactRequest;
    public ContactsCreateRequests withContactRequest(openapisdk.models.shared.ContactRequest contactRequest) {
        this.contactRequest = contactRequest;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/csv")
    public String string;
    public ContactsCreateRequests withString(String string) {
        this.string = string;
        return this;
    }
}