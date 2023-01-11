package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class MessagingV1Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public MessagingV1Service withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("area_code_geomatch")
    public Boolean areaCodeGeomatch;
    public MessagingV1Service withAreaCodeGeomatch(Boolean areaCodeGeomatch) {
        this.areaCodeGeomatch = areaCodeGeomatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public MessagingV1Service withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public MessagingV1Service withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fallback_method")
    public MessagingV1ServiceFallbackMethodEnum fallbackMethod;
    public MessagingV1Service withFallbackMethod(MessagingV1ServiceFallbackMethodEnum fallbackMethod) {
        this.fallbackMethod = fallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fallback_to_long_code")
    public Boolean fallbackToLongCode;
    public MessagingV1Service withFallbackToLongCode(Boolean fallbackToLongCode) {
        this.fallbackToLongCode = fallbackToLongCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fallback_url")
    public String fallbackUrl;
    public MessagingV1Service withFallbackUrl(String fallbackUrl) {
        this.fallbackUrl = fallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public MessagingV1Service withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_method")
    public MessagingV1ServiceInboundMethodEnum inboundMethod;
    public MessagingV1Service withInboundMethod(MessagingV1ServiceInboundMethodEnum inboundMethod) {
        this.inboundMethod = inboundMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_request_url")
    public String inboundRequestUrl;
    public MessagingV1Service withInboundRequestUrl(String inboundRequestUrl) {
        this.inboundRequestUrl = inboundRequestUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public MessagingV1Service withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mms_converter")
    public Boolean mmsConverter;
    public MessagingV1Service withMmsConverter(Boolean mmsConverter) {
        this.mmsConverter = mmsConverter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scan_message_content")
    public ServiceEnumScanMessageContentEnum scanMessageContent;
    public MessagingV1Service withScanMessageContent(ServiceEnumScanMessageContentEnum scanMessageContent) {
        this.scanMessageContent = scanMessageContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public MessagingV1Service withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smart_encoding")
    public Boolean smartEncoding;
    public MessagingV1Service withSmartEncoding(Boolean smartEncoding) {
        this.smartEncoding = smartEncoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback")
    public String statusCallback;
    public MessagingV1Service withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sticky_sender")
    public Boolean stickySender;
    public MessagingV1Service withStickySender(Boolean stickySender) {
        this.stickySender = stickySender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("synchronous_validation")
    public Boolean synchronousValidation;
    public MessagingV1Service withSynchronousValidation(Boolean synchronousValidation) {
        this.synchronousValidation = synchronousValidation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public MessagingV1Service withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("us_app_to_person_registered")
    public Boolean usAppToPersonRegistered;
    public MessagingV1Service withUsAppToPersonRegistered(Boolean usAppToPersonRegistered) {
        this.usAppToPersonRegistered = usAppToPersonRegistered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_inbound_webhook_on_number")
    public Boolean useInboundWebhookOnNumber;
    public MessagingV1Service withUseInboundWebhookOnNumber(Boolean useInboundWebhookOnNumber) {
        this.useInboundWebhookOnNumber = useInboundWebhookOnNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usecase")
    public String usecase;
    public MessagingV1Service withUsecase(String usecase) {
        this.usecase = usecase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validity_period")
    public Long validityPeriod;
    public MessagingV1Service withValidityPeriod(Long validityPeriod) {
        this.validityPeriod = validityPeriod;
        return this;
    }
}