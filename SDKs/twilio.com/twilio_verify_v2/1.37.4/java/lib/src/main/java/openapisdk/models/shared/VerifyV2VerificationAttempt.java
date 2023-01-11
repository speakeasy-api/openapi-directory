package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class VerifyV2VerificationAttempt {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public VerifyV2VerificationAttempt withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public VerificationAttemptEnumChannelsEnum channel;
    public VerifyV2VerificationAttempt withChannel(VerificationAttemptEnumChannelsEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel_data")
    public Object channelData;
    public VerifyV2VerificationAttempt withChannelData(Object channelData) {
        this.channelData = channelData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversion_status")
    public VerificationAttemptEnumConversionStatusEnum conversionStatus;
    public VerifyV2VerificationAttempt withConversionStatus(VerificationAttemptEnumConversionStatusEnum conversionStatus) {
        this.conversionStatus = conversionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public VerifyV2VerificationAttempt withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public VerifyV2VerificationAttempt withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Object price;
    public VerifyV2VerificationAttempt withPrice(Object price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public VerifyV2VerificationAttempt withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public VerifyV2VerificationAttempt withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public VerifyV2VerificationAttempt withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_sid")
    public String verificationSid;
    public VerifyV2VerificationAttempt withVerificationSid(String verificationSid) {
        this.verificationSid = verificationSid;
        return this;
    }
}