package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_sid")
    public String addressSid;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withAddressSid(String addressSid) {
        this.addressSid = addressSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_delay")
    public Long callDelay;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withCallDelay(Long callDelay) {
        this.callDelay = callDelay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities capabilities;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withCapabilities(PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cc_emails")
    public String[] ccEmails;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withCcEmails(String[] ccEmails) {
        this.ccEmails = ccEmails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension")
    public String extension;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withExtension(String extension) {
        this.extension = extension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failure_reason")
    public String failureReason;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incoming_phone_number_sid")
    public String incomingPhoneNumberSid;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withIncomingPhoneNumberSid(String incomingPhoneNumberSid) {
        this.incomingPhoneNumberSid = incomingPhoneNumberSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signing_document_sid")
    public String signingDocumentSid;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withSigningDocumentSid(String signingDocumentSid) {
        this.signingDocumentSid = signingDocumentSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DependentHostedNumberOrderEnumStatusEnum status;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withStatus(DependentHostedNumberOrderEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_name")
    public String uniqueName;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_attempts")
    public Long verificationAttempts;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withVerificationAttempts(Long verificationAttempts) {
        this.verificationAttempts = verificationAttempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_call_sids")
    public String[] verificationCallSids;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withVerificationCallSids(String[] verificationCallSids) {
        this.verificationCallSids = verificationCallSids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_code")
    public String verificationCode;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_document_sid")
    public String verificationDocumentSid;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withVerificationDocumentSid(String verificationDocumentSid) {
        this.verificationDocumentSid = verificationDocumentSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_type")
    public DependentHostedNumberOrderEnumVerificationTypeEnum verificationType;
    public PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder withVerificationType(DependentHostedNumberOrderEnumVerificationTypeEnum verificationType) {
        this.verificationType = verificationType;
        return this;
    }
}