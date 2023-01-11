package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest {
    @SpeakeasyMetadata("form:name=CallDelay")
    public Long callDelay;
    public UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest withCallDelay(Long callDelay) {
        this.callDelay = callDelay;
        return this;
    }
    @SpeakeasyMetadata("form:name=CcEmails")
    public String[] ccEmails;
    public UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest withCcEmails(String[] ccEmails) {
        this.ccEmails = ccEmails;
        return this;
    }
    @SpeakeasyMetadata("form:name=Email")
    public String email;
    public UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("form:name=Extension")
    public String extension;
    public UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest withExtension(String extension) {
        this.extension = extension;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.HostedNumberOrderEnumStatusEnum status;
    public UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest withStatus(openapisdk.models.shared.HostedNumberOrderEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @SpeakeasyMetadata("form:name=VerificationCode")
    public String verificationCode;
    public UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest withVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=VerificationDocumentSid")
    public String verificationDocumentSid;
    public UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest withVerificationDocumentSid(String verificationDocumentSid) {
        this.verificationDocumentSid = verificationDocumentSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=VerificationType")
    public openapisdk.models.shared.HostedNumberOrderEnumVerificationTypeEnum verificationType;
    public UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest withVerificationType(openapisdk.models.shared.HostedNumberOrderEnumVerificationTypeEnum verificationType) {
        this.verificationType = verificationType;
        return this;
    }
}