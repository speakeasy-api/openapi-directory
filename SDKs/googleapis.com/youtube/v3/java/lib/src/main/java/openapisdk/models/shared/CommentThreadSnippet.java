package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentThreadSnippet
 * Basic details about a comment thread.
**/
public class CommentThreadSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canReply")
    public Boolean canReply;
    public CommentThreadSnippet withCanReply(Boolean canReply) {
        this.canReply = canReply;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public CommentThreadSnippet withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPublic")
    public Boolean isPublic;
    public CommentThreadSnippet withIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topLevelComment")
    public Comment topLevelComment;
    public CommentThreadSnippet withTopLevelComment(Comment topLevelComment) {
        this.topLevelComment = topLevelComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalReplyCount")
    public Long totalReplyCount;
    public CommentThreadSnippet withTotalReplyCount(Long totalReplyCount) {
        this.totalReplyCount = totalReplyCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoId")
    public String videoId;
    public CommentThreadSnippet withVideoId(String videoId) {
        this.videoId = videoId;
        return this;
    }
}