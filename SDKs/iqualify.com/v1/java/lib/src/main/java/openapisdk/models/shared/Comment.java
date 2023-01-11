package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Comment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public Comment withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Comment withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Comment withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Comment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isFacilitatorPost")
    public Boolean isFacilitatorPost;
    public Comment withIsFacilitatorPost(Boolean isFacilitatorPost) {
        this.isFacilitatorPost = isFacilitatorPost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moderation")
    public Moderation moderation;
    public Comment withModeration(Moderation moderation) {
        this.moderation = moderation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentCommentId")
    public String parentCommentId;
    public Comment withParentCommentId(String parentCommentId) {
        this.parentCommentId = parentCommentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postId")
    public String postId;
    public Comment withPostId(String postId) {
        this.postId = postId;
        return this;
    }
}