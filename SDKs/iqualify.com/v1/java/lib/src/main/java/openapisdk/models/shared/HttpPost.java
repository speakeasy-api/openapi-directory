package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class HttpPost {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachments")
    public DocumentResponse[] attachments;
    public HttpPost withAttachments(DocumentResponse[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public HttpPost withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public HttpPost withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public HttpPost withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public HttpPost withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isFacilitatorPost")
    public Boolean isFacilitatorPost;
    public HttpPost withIsFacilitatorPost(Boolean isFacilitatorPost) {
        this.isFacilitatorPost = isFacilitatorPost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moderation")
    public Moderation moderation;
    public HttpPost withModeration(Moderation moderation) {
        this.moderation = moderation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public HttpPost withTitle(String title) {
        this.title = title;
        return this;
    }
}