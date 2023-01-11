package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityObject
 * The object of this activity.
**/
public class ActivityObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actor")
    public ActivityObjectActor actor;
    public ActivityObject withActor(ActivityObjectActor actor) {
        this.actor = actor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachments")
    public ActivityObjectAttachments[] attachments;
    public ActivityObject withAttachments(ActivityObjectAttachments[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public ActivityObject withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ActivityObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectType")
    public String objectType;
    public ActivityObject withObjectType(String objectType) {
        this.objectType = objectType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalContent")
    public String originalContent;
    public ActivityObject withOriginalContent(String originalContent) {
        this.originalContent = originalContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plusoners")
    public ActivityObjectPlusoners plusoners;
    public ActivityObject withPlusoners(ActivityObjectPlusoners plusoners) {
        this.plusoners = plusoners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replies")
    public ActivityObjectReplies replies;
    public ActivityObject withReplies(ActivityObjectReplies replies) {
        this.replies = replies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resharers")
    public ActivityObjectResharers resharers;
    public ActivityObject withResharers(ActivityObjectResharers resharers) {
        this.resharers = resharers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ActivityObject withUrl(String url) {
        this.url = url;
        return this;
    }
}