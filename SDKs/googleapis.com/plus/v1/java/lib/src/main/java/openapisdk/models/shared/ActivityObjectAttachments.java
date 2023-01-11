package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActivityObjectAttachments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public ActivityObjectAttachments withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ActivityObjectAttachments withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public ActivityObjectAttachmentsEmbed embed;
    public ActivityObjectAttachments withEmbed(ActivityObjectAttachmentsEmbed embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullImage")
    public ActivityObjectAttachmentsFullImage fullImage;
    public ActivityObjectAttachments withFullImage(ActivityObjectAttachmentsFullImage fullImage) {
        this.fullImage = fullImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ActivityObjectAttachments withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public ActivityObjectAttachmentsImage image;
    public ActivityObjectAttachments withImage(ActivityObjectAttachmentsImage image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectType")
    public String objectType;
    public ActivityObjectAttachments withObjectType(String objectType) {
        this.objectType = objectType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnails")
    public ActivityObjectAttachmentsThumbnails[] thumbnails;
    public ActivityObjectAttachments withThumbnails(ActivityObjectAttachmentsThumbnails[] thumbnails) {
        this.thumbnails = thumbnails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ActivityObjectAttachments withUrl(String url) {
        this.url = url;
        return this;
    }
}