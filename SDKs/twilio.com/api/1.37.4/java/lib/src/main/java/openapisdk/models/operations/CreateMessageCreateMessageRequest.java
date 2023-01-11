package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class CreateMessageCreateMessageRequest {
    @SpeakeasyMetadata("form:name=AddressRetention")
    public openapisdk.models.shared.MessageEnumAddressRetentionEnum addressRetention;
    public CreateMessageCreateMessageRequest withAddressRetention(openapisdk.models.shared.MessageEnumAddressRetentionEnum addressRetention) {
        this.addressRetention = addressRetention;
        return this;
    }
    @SpeakeasyMetadata("form:name=ApplicationSid")
    public String applicationSid;
    public CreateMessageCreateMessageRequest withApplicationSid(String applicationSid) {
        this.applicationSid = applicationSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Attempt")
    public Long attempt;
    public CreateMessageCreateMessageRequest withAttempt(Long attempt) {
        this.attempt = attempt;
        return this;
    }
    @SpeakeasyMetadata("form:name=Body")
    public String body;
    public CreateMessageCreateMessageRequest withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("form:name=ContentRetention")
    public openapisdk.models.shared.MessageEnumContentRetentionEnum contentRetention;
    public CreateMessageCreateMessageRequest withContentRetention(openapisdk.models.shared.MessageEnumContentRetentionEnum contentRetention) {
        this.contentRetention = contentRetention;
        return this;
    }
    @SpeakeasyMetadata("form:name=ContentSid")
    public String contentSid;
    public CreateMessageCreateMessageRequest withContentSid(String contentSid) {
        this.contentSid = contentSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=ContentVariables")
    public String contentVariables;
    public CreateMessageCreateMessageRequest withContentVariables(String contentVariables) {
        this.contentVariables = contentVariables;
        return this;
    }
    @SpeakeasyMetadata("form:name=ForceDelivery")
    public Boolean forceDelivery;
    public CreateMessageCreateMessageRequest withForceDelivery(Boolean forceDelivery) {
        this.forceDelivery = forceDelivery;
        return this;
    }
    @SpeakeasyMetadata("form:name=From")
    public String from;
    public CreateMessageCreateMessageRequest withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("form:name=MaxPrice")
    public Double maxPrice;
    public CreateMessageCreateMessageRequest withMaxPrice(Double maxPrice) {
        this.maxPrice = maxPrice;
        return this;
    }
    @SpeakeasyMetadata("form:name=MediaUrl")
    public String[] mediaUrl;
    public CreateMessageCreateMessageRequest withMediaUrl(String[] mediaUrl) {
        this.mediaUrl = mediaUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingServiceSid")
    public String messagingServiceSid;
    public CreateMessageCreateMessageRequest withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=PersistentAction")
    public String[] persistentAction;
    public CreateMessageCreateMessageRequest withPersistentAction(String[] persistentAction) {
        this.persistentAction = persistentAction;
        return this;
    }
    @SpeakeasyMetadata("form:name=ProvideFeedback")
    public Boolean provideFeedback;
    public CreateMessageCreateMessageRequest withProvideFeedback(Boolean provideFeedback) {
        this.provideFeedback = provideFeedback;
        return this;
    }
    @SpeakeasyMetadata("form:name=ScheduleType")
    public openapisdk.models.shared.MessageEnumScheduleTypeEnum scheduleType;
    public CreateMessageCreateMessageRequest withScheduleType(openapisdk.models.shared.MessageEnumScheduleTypeEnum scheduleType) {
        this.scheduleType = scheduleType;
        return this;
    }
    @SpeakeasyMetadata("form:name=SendAsMms")
    public Boolean sendAsMms;
    public CreateMessageCreateMessageRequest withSendAsMms(Boolean sendAsMms) {
        this.sendAsMms = sendAsMms;
        return this;
    }
    @SpeakeasyMetadata("form:name=SendAt")
    public OffsetDateTime sendAt;
    public CreateMessageCreateMessageRequest withSendAt(OffsetDateTime sendAt) {
        this.sendAt = sendAt;
        return this;
    }
    @SpeakeasyMetadata("form:name=ShortenUrls")
    public Boolean shortenUrls;
    public CreateMessageCreateMessageRequest withShortenUrls(Boolean shortenUrls) {
        this.shortenUrls = shortenUrls;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmartEncoded")
    public Boolean smartEncoded;
    public CreateMessageCreateMessageRequest withSmartEncoded(Boolean smartEncoded) {
        this.smartEncoded = smartEncoded;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateMessageCreateMessageRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=To")
    public String to;
    public CreateMessageCreateMessageRequest withTo(String to) {
        this.to = to;
        return this;
    }
    @SpeakeasyMetadata("form:name=ValidityPeriod")
    public Long validityPeriod;
    public CreateMessageCreateMessageRequest withValidityPeriod(Long validityPeriod) {
        this.validityPeriod = validityPeriod;
        return this;
    }
}