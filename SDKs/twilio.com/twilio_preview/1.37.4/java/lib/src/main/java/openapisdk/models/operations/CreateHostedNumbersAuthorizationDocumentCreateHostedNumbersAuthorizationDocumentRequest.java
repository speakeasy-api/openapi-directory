package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest {
    @SpeakeasyMetadata("form:name=AddressSid")
    public String addressSid;
    public CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest withAddressSid(String addressSid) {
        this.addressSid = addressSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=CcEmails")
    public String[] ccEmails;
    public CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest withCcEmails(String[] ccEmails) {
        this.ccEmails = ccEmails;
        return this;
    }
    @SpeakeasyMetadata("form:name=ContactPhoneNumber")
    public String contactPhoneNumber;
    public CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest withContactPhoneNumber(String contactPhoneNumber) {
        this.contactPhoneNumber = contactPhoneNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=ContactTitle")
    public String contactTitle;
    public CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest withContactTitle(String contactTitle) {
        this.contactTitle = contactTitle;
        return this;
    }
    @SpeakeasyMetadata("form:name=Email")
    public String email;
    public CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("form:name=HostedNumberOrderSids")
    public String[] hostedNumberOrderSids;
    public CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest withHostedNumberOrderSids(String[] hostedNumberOrderSids) {
        this.hostedNumberOrderSids = hostedNumberOrderSids;
        return this;
    }
}