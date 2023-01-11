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
 * CommentSnippet
 * Basic details about a comment, such as its author and text.
**/
public class CommentSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorChannelId")
    public CommentSnippetAuthorChannelId authorChannelId;
    public CommentSnippet withAuthorChannelId(CommentSnippetAuthorChannelId authorChannelId) {
        this.authorChannelId = authorChannelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorChannelUrl")
    public String authorChannelUrl;
    public CommentSnippet withAuthorChannelUrl(String authorChannelUrl) {
        this.authorChannelUrl = authorChannelUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorDisplayName")
    public String authorDisplayName;
    public CommentSnippet withAuthorDisplayName(String authorDisplayName) {
        this.authorDisplayName = authorDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorProfileImageUrl")
    public String authorProfileImageUrl;
    public CommentSnippet withAuthorProfileImageUrl(String authorProfileImageUrl) {
        this.authorProfileImageUrl = authorProfileImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRate")
    public Boolean canRate;
    public CommentSnippet withCanRate(Boolean canRate) {
        this.canRate = canRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public CommentSnippet withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("likeCount")
    public Long likeCount;
    public CommentSnippet withLikeCount(Long likeCount) {
        this.likeCount = likeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moderationStatus")
    public CommentSnippetModerationStatusEnum moderationStatus;
    public CommentSnippet withModerationStatus(CommentSnippetModerationStatusEnum moderationStatus) {
        this.moderationStatus = moderationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentId")
    public String parentId;
    public CommentSnippet withParentId(String parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("publishedAt")
    public OffsetDateTime publishedAt;
    public CommentSnippet withPublishedAt(OffsetDateTime publishedAt) {
        this.publishedAt = publishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textDisplay")
    public String textDisplay;
    public CommentSnippet withTextDisplay(String textDisplay) {
        this.textDisplay = textDisplay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textOriginal")
    public String textOriginal;
    public CommentSnippet withTextOriginal(String textOriginal) {
        this.textOriginal = textOriginal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public CommentSnippet withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoId")
    public String videoId;
    public CommentSnippet withVideoId(String videoId) {
        this.videoId = videoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewerRating")
    public CommentSnippetViewerRatingEnum viewerRating;
    public CommentSnippet withViewerRating(CommentSnippetViewerRatingEnum viewerRating) {
        this.viewerRating = viewerRating;
        return this;
    }
}