package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * TimelineItem
 * Each item in the user's timeline is represented as a TimelineItem JSON structure, described below.
**/
public class TimelineItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachments")
    public Attachment[] attachments;
    public TimelineItem withAttachments(Attachment[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleId")
    public String bundleId;
    public TimelineItem withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canonicalUrl")
    public String canonicalUrl;
    public TimelineItem withCanonicalUrl(String canonicalUrl) {
        this.canonicalUrl = canonicalUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public TimelineItem withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public Contact creator;
    public TimelineItem withCreator(Contact creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("displayTime")
    public OffsetDateTime displayTime;
    public TimelineItem withDisplayTime(OffsetDateTime displayTime) {
        this.displayTime = displayTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public TimelineItem withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html")
    public String html;
    public TimelineItem withHtml(String html) {
        this.html = html;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public TimelineItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inReplyTo")
    public String inReplyTo;
    public TimelineItem withInReplyTo(String inReplyTo) {
        this.inReplyTo = inReplyTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isBundleCover")
    public Boolean isBundleCover;
    public TimelineItem withIsBundleCover(Boolean isBundleCover) {
        this.isBundleCover = isBundleCover;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDeleted")
    public Boolean isDeleted;
    public TimelineItem withIsDeleted(Boolean isDeleted) {
        this.isDeleted = isDeleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPinned")
    public Boolean isPinned;
    public TimelineItem withIsPinned(Boolean isPinned) {
        this.isPinned = isPinned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public TimelineItem withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public TimelineItem withLocation(Location location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("menuItems")
    public MenuItem[] menuItems;
    public TimelineItem withMenuItems(MenuItem[] menuItems) {
        this.menuItems = menuItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification")
    public NotificationConfig notification;
    public TimelineItem withNotification(NotificationConfig notification) {
        this.notification = notification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pinScore")
    public Integer pinScore;
    public TimelineItem withPinScore(Integer pinScore) {
        this.pinScore = pinScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipients")
    public Contact[] recipients;
    public TimelineItem withRecipients(Contact[] recipients) {
        this.recipients = recipients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public TimelineItem withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceItemId")
    public String sourceItemId;
    public TimelineItem withSourceItemId(String sourceItemId) {
        this.sourceItemId = sourceItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speakableText")
    public String speakableText;
    public TimelineItem withSpeakableText(String speakableText) {
        this.speakableText = speakableText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speakableType")
    public String speakableType;
    public TimelineItem withSpeakableType(String speakableType) {
        this.speakableType = speakableType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public TimelineItem withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public TimelineItem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated")
    public OffsetDateTime updated;
    public TimelineItem withUpdated(OffsetDateTime updated) {
        this.updated = updated;
        return this;
    }
}