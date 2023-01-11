package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceNotificationUpdateServiceNotificationRequest {
    @SpeakeasyMetadata("form:name=AddedToConversation.Enabled")
    public Boolean addedToConversationEnabled;
    public UpdateServiceNotificationUpdateServiceNotificationRequest withAddedToConversationEnabled(Boolean addedToConversationEnabled) {
        this.addedToConversationEnabled = addedToConversationEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=AddedToConversation.Sound")
    public String addedToConversationSound;
    public UpdateServiceNotificationUpdateServiceNotificationRequest withAddedToConversationSound(String addedToConversationSound) {
        this.addedToConversationSound = addedToConversationSound;
        return this;
    }
    @SpeakeasyMetadata("form:name=AddedToConversation.Template")
    public String addedToConversationTemplate;
    public UpdateServiceNotificationUpdateServiceNotificationRequest withAddedToConversationTemplate(String addedToConversationTemplate) {
        this.addedToConversationTemplate = addedToConversationTemplate;
        return this;
    }
    @SpeakeasyMetadata("form:name=LogEnabled")
    public Boolean logEnabled;
    public UpdateServiceNotificationUpdateServiceNotificationRequest withLogEnabled(Boolean logEnabled) {
        this.logEnabled = logEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=NewMessage.BadgeCountEnabled")
    public Boolean newMessageBadgeCountEnabled;
    public UpdateServiceNotificationUpdateServiceNotificationRequest withNewMessageBadgeCountEnabled(Boolean newMessageBadgeCountEnabled) {
        this.newMessageBadgeCountEnabled = newMessageBadgeCountEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=NewMessage.Enabled")
    public Boolean newMessageEnabled;
    public UpdateServiceNotificationUpdateServiceNotificationRequest withNewMessageEnabled(Boolean newMessageEnabled) {
        this.newMessageEnabled = newMessageEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=NewMessage.Sound")
    public String newMessageSound;
    public UpdateServiceNotificationUpdateServiceNotificationRequest withNewMessageSound(String newMessageSound) {
        this.newMessageSound = newMessageSound;
        return this;
    }
    @SpeakeasyMetadata("form:name=NewMessage.Template")
    public String newMessageTemplate;
    public UpdateServiceNotificationUpdateServiceNotificationRequest withNewMessageTemplate(String newMessageTemplate) {
        this.newMessageTemplate = newMessageTemplate;
        return this;
    }
    @SpeakeasyMetadata("form:name=NewMessage.WithMedia.Enabled")
    public Boolean newMessageWithMediaEnabled;
    public UpdateServiceNotificationUpdateServiceNotificationRequest withNewMessageWithMediaEnabled(Boolean newMessageWithMediaEnabled) {
        this.newMessageWithMediaEnabled = newMessageWithMediaEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=NewMessage.WithMedia.Template")
    public String newMessageWithMediaTemplate;
    public UpdateServiceNotificationUpdateServiceNotificationRequest withNewMessageWithMediaTemplate(String newMessageWithMediaTemplate) {
        this.newMessageWithMediaTemplate = newMessageWithMediaTemplate;
        return this;
    }
    @SpeakeasyMetadata("form:name=RemovedFromConversation.Enabled")
    public Boolean removedFromConversationEnabled;
    public UpdateServiceNotificationUpdateServiceNotificationRequest withRemovedFromConversationEnabled(Boolean removedFromConversationEnabled) {
        this.removedFromConversationEnabled = removedFromConversationEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=RemovedFromConversation.Sound")
    public String removedFromConversationSound;
    public UpdateServiceNotificationUpdateServiceNotificationRequest withRemovedFromConversationSound(String removedFromConversationSound) {
        this.removedFromConversationSound = removedFromConversationSound;
        return this;
    }
    @SpeakeasyMetadata("form:name=RemovedFromConversation.Template")
    public String removedFromConversationTemplate;
    public UpdateServiceNotificationUpdateServiceNotificationRequest withRemovedFromConversationTemplate(String removedFromConversationTemplate) {
        this.removedFromConversationTemplate = removedFromConversationTemplate;
        return this;
    }
}