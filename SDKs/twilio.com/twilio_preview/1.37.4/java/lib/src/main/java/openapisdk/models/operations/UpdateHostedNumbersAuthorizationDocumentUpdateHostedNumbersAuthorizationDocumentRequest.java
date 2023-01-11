package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest {
    @SpeakeasyMetadata("form:name=AddressSid")
    public String addressSid;
    public UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest withAddressSid(String addressSid) {
        this.addressSid = addressSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=CcEmails")
    public String[] ccEmails;
    public UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest withCcEmails(String[] ccEmails) {
        this.ccEmails = ccEmails;
        return this;
    }
    @SpeakeasyMetadata("form:name=ContactPhoneNumber")
    public String contactPhoneNumber;
    public UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest withContactPhoneNumber(String contactPhoneNumber) {
        this.contactPhoneNumber = contactPhoneNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=ContactTitle")
    public String contactTitle;
    public UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest withContactTitle(String contactTitle) {
        this.contactTitle = contactTitle;
        return this;
    }
    @SpeakeasyMetadata("form:name=Email")
    public String email;
    public UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("form:name=HostedNumberOrderSids")
    public String[] hostedNumberOrderSids;
    public UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest withHostedNumberOrderSids(String[] hostedNumberOrderSids) {
        this.hostedNumberOrderSids = hostedNumberOrderSids;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.AuthorizationDocumentEnumStatusEnum status;
    public UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest withStatus(openapisdk.models.shared.AuthorizationDocumentEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}