package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class MessagingV1ServiceUsAppToPerson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public MessagingV1ServiceUsAppToPerson withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand_registration_sid")
    public String brandRegistrationSid;
    public MessagingV1ServiceUsAppToPerson withBrandRegistrationSid(String brandRegistrationSid) {
        this.brandRegistrationSid = brandRegistrationSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaign_id")
    public String campaignId;
    public MessagingV1ServiceUsAppToPerson withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaign_status")
    public String campaignStatus;
    public MessagingV1ServiceUsAppToPerson withCampaignStatus(String campaignStatus) {
        this.campaignStatus = campaignStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public MessagingV1ServiceUsAppToPerson withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public MessagingV1ServiceUsAppToPerson withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public MessagingV1ServiceUsAppToPerson withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_embedded_links")
    public Boolean hasEmbeddedLinks;
    public MessagingV1ServiceUsAppToPerson withHasEmbeddedLinks(Boolean hasEmbeddedLinks) {
        this.hasEmbeddedLinks = hasEmbeddedLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_embedded_phone")
    public Boolean hasEmbeddedPhone;
    public MessagingV1ServiceUsAppToPerson withHasEmbeddedPhone(Boolean hasEmbeddedPhone) {
        this.hasEmbeddedPhone = hasEmbeddedPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("help_keywords")
    public String[] helpKeywords;
    public MessagingV1ServiceUsAppToPerson withHelpKeywords(String[] helpKeywords) {
        this.helpKeywords = helpKeywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("help_message")
    public String helpMessage;
    public MessagingV1ServiceUsAppToPerson withHelpMessage(String helpMessage) {
        this.helpMessage = helpMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_externally_registered")
    public Boolean isExternallyRegistered;
    public MessagingV1ServiceUsAppToPerson withIsExternallyRegistered(Boolean isExternallyRegistered) {
        this.isExternallyRegistered = isExternallyRegistered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_flow")
    public String messageFlow;
    public MessagingV1ServiceUsAppToPerson withMessageFlow(String messageFlow) {
        this.messageFlow = messageFlow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_samples")
    public String[] messageSamples;
    public MessagingV1ServiceUsAppToPerson withMessageSamples(String[] messageSamples) {
        this.messageSamples = messageSamples;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messaging_service_sid")
    public String messagingServiceSid;
    public MessagingV1ServiceUsAppToPerson withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mock")
    public Boolean mock;
    public MessagingV1ServiceUsAppToPerson withMock(Boolean mock) {
        this.mock = mock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opt_in_keywords")
    public String[] optInKeywords;
    public MessagingV1ServiceUsAppToPerson withOptInKeywords(String[] optInKeywords) {
        this.optInKeywords = optInKeywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opt_in_message")
    public String optInMessage;
    public MessagingV1ServiceUsAppToPerson withOptInMessage(String optInMessage) {
        this.optInMessage = optInMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opt_out_keywords")
    public String[] optOutKeywords;
    public MessagingV1ServiceUsAppToPerson withOptOutKeywords(String[] optOutKeywords) {
        this.optOutKeywords = optOutKeywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opt_out_message")
    public String optOutMessage;
    public MessagingV1ServiceUsAppToPerson withOptOutMessage(String optOutMessage) {
        this.optOutMessage = optOutMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate_limits")
    public Object rateLimits;
    public MessagingV1ServiceUsAppToPerson withRateLimits(Object rateLimits) {
        this.rateLimits = rateLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public MessagingV1ServiceUsAppToPerson withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public MessagingV1ServiceUsAppToPerson withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("us_app_to_person_usecase")
    public String usAppToPersonUsecase;
    public MessagingV1ServiceUsAppToPerson withUsAppToPersonUsecase(String usAppToPersonUsecase) {
        this.usAppToPersonUsecase = usAppToPersonUsecase;
        return this;
    }
}