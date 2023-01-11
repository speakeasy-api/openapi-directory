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
 * Comment
 * A comment on a file.
**/
public class Comment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anchor")
    public String anchor;
    public Comment withAnchor(String anchor) {
        this.anchor = anchor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public User author;
    public Comment withAuthor(User author) {
        this.author = author;
        return this;
    }
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
    @JsonProperty("createdTime")
    public OffsetDateTime createdTime;
    public Comment withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public Comment withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlContent")
    public String htmlContent;
    public Comment withHtmlContent(String htmlContent) {
        this.htmlContent = htmlContent;
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
    @JsonProperty("kind")
    public String kind;
    public Comment withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modifiedTime")
    public OffsetDateTime modifiedTime;
    public Comment withModifiedTime(OffsetDateTime modifiedTime) {
        this.modifiedTime = modifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotedFileContent")
    public CommentQuotedFileContent quotedFileContent;
    public Comment withQuotedFileContent(CommentQuotedFileContent quotedFileContent) {
        this.quotedFileContent = quotedFileContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replies")
    public Reply[] replies;
    public Comment withReplies(Reply[] replies) {
        this.replies = replies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolved")
    public Boolean resolved;
    public Comment withResolved(Boolean resolved) {
        this.resolved = resolved;
        return this;
    }
}