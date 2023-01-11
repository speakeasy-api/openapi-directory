package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest {
    @SpeakeasyMetadata("form:name=AccountSid")
    public String accountSid;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=AddressSid")
    public String addressSid;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withAddressSid(String addressSid) {
        this.addressSid = addressSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=CcEmails")
    public String[] ccEmails;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withCcEmails(String[] ccEmails) {
        this.ccEmails = ccEmails;
        return this;
    }
    @SpeakeasyMetadata("form:name=Email")
    public String email;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=PhoneNumber")
    public String phoneNumber;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsApplicationSid")
    public String smsApplicationSid;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withSmsApplicationSid(String smsApplicationSid) {
        this.smsApplicationSid = smsApplicationSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsCapability")
    public Boolean smsCapability;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withSmsCapability(Boolean smsCapability) {
        this.smsCapability = smsCapability;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackMethod")
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum smsFallbackMethod;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withSmsFallbackMethod(CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum smsFallbackMethod) {
        this.smsFallbackMethod = smsFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackUrl")
    public String smsFallbackUrl;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withSmsFallbackUrl(String smsFallbackUrl) {
        this.smsFallbackUrl = smsFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsMethod")
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum smsMethod;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withSmsMethod(CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum smsMethod) {
        this.smsMethod = smsMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsUrl")
    public String smsUrl;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withSmsUrl(String smsUrl) {
        this.smsUrl = smsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum statusCallbackMethod;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withStatusCallbackMethod(CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackUrl")
    public String statusCallbackUrl;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withStatusCallbackUrl(String statusCallbackUrl) {
        this.statusCallbackUrl = statusCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @SpeakeasyMetadata("form:name=VerificationDocumentSid")
    public String verificationDocumentSid;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withVerificationDocumentSid(String verificationDocumentSid) {
        this.verificationDocumentSid = verificationDocumentSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=VerificationType")
    public openapisdk.models.shared.HostedNumberOrderEnumVerificationTypeEnum verificationType;
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest withVerificationType(openapisdk.models.shared.HostedNumberOrderEnumVerificationTypeEnum verificationType) {
        this.verificationType = verificationType;
        return this;
    }
}