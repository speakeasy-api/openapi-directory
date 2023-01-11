package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class VerifyV2ServiceVerification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public VerifyV2ServiceVerification withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public String amount;
    public VerifyV2ServiceVerification withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public VerificationEnumChannelEnum channel;
    public VerifyV2ServiceVerification withChannel(VerificationEnumChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public VerifyV2ServiceVerification withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public VerifyV2ServiceVerification withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lookup")
    public Object lookup;
    public VerifyV2ServiceVerification withLookup(Object lookup) {
        this.lookup = lookup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee")
    public String payee;
    public VerifyV2ServiceVerification withPayee(String payee) {
        this.payee = payee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("send_code_attempts")
    public Object[] sendCodeAttempts;
    public VerifyV2ServiceVerification withSendCodeAttempts(Object[] sendCodeAttempts) {
        this.sendCodeAttempts = sendCodeAttempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public VerifyV2ServiceVerification withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public VerifyV2ServiceVerification withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sna")
    public Object sna;
    public VerifyV2ServiceVerification withSna(Object sna) {
        this.sna = sna;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public VerifyV2ServiceVerification withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public VerifyV2ServiceVerification withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public VerifyV2ServiceVerification withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valid")
    public Boolean valid;
    public VerifyV2ServiceVerification withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
}