package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PreviewHostedNumbersHostedNumberOrder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public PreviewHostedNumbersHostedNumberOrder withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_sid")
    public String addressSid;
    public PreviewHostedNumbersHostedNumberOrder withAddressSid(String addressSid) {
        this.addressSid = addressSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_delay")
    public Long callDelay;
    public PreviewHostedNumbersHostedNumberOrder withCallDelay(Long callDelay) {
        this.callDelay = callDelay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public PreviewHostedNumbersHostedNumberOrderCapabilities capabilities;
    public PreviewHostedNumbersHostedNumberOrder withCapabilities(PreviewHostedNumbersHostedNumberOrderCapabilities capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cc_emails")
    public String[] ccEmails;
    public PreviewHostedNumbersHostedNumberOrder withCcEmails(String[] ccEmails) {
        this.ccEmails = ccEmails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public PreviewHostedNumbersHostedNumberOrder withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public PreviewHostedNumbersHostedNumberOrder withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PreviewHostedNumbersHostedNumberOrder withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension")
    public String extension;
    public PreviewHostedNumbersHostedNumberOrder withExtension(String extension) {
        this.extension = extension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failure_reason")
    public String failureReason;
    public PreviewHostedNumbersHostedNumberOrder withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public PreviewHostedNumbersHostedNumberOrder withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incoming_phone_number_sid")
    public String incomingPhoneNumberSid;
    public PreviewHostedNumbersHostedNumberOrder withIncomingPhoneNumberSid(String incomingPhoneNumberSid) {
        this.incomingPhoneNumberSid = incomingPhoneNumberSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public PreviewHostedNumbersHostedNumberOrder withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public PreviewHostedNumbersHostedNumberOrder withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signing_document_sid")
    public String signingDocumentSid;
    public PreviewHostedNumbersHostedNumberOrder withSigningDocumentSid(String signingDocumentSid) {
        this.signingDocumentSid = signingDocumentSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public HostedNumberOrderEnumStatusEnum status;
    public PreviewHostedNumbersHostedNumberOrder withStatus(HostedNumberOrderEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_name")
    public String uniqueName;
    public PreviewHostedNumbersHostedNumberOrder withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PreviewHostedNumbersHostedNumberOrder withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_attempts")
    public Long verificationAttempts;
    public PreviewHostedNumbersHostedNumberOrder withVerificationAttempts(Long verificationAttempts) {
        this.verificationAttempts = verificationAttempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_call_sids")
    public String[] verificationCallSids;
    public PreviewHostedNumbersHostedNumberOrder withVerificationCallSids(String[] verificationCallSids) {
        this.verificationCallSids = verificationCallSids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_code")
    public String verificationCode;
    public PreviewHostedNumbersHostedNumberOrder withVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_document_sid")
    public String verificationDocumentSid;
    public PreviewHostedNumbersHostedNumberOrder withVerificationDocumentSid(String verificationDocumentSid) {
        this.verificationDocumentSid = verificationDocumentSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_type")
    public HostedNumberOrderEnumVerificationTypeEnum verificationType;
    public PreviewHostedNumbersHostedNumberOrder withVerificationType(HostedNumberOrderEnumVerificationTypeEnum verificationType) {
        this.verificationType = verificationType;
        return this;
    }
}