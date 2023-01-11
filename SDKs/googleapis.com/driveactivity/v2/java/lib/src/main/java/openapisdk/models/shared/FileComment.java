package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileComment
 * A comment on a file.
**/
public class FileComment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyCommentId")
    public String legacyCommentId;
    public FileComment withLegacyCommentId(String legacyCommentId) {
        this.legacyCommentId = legacyCommentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyDiscussionId")
    public String legacyDiscussionId;
    public FileComment withLegacyDiscussionId(String legacyDiscussionId) {
        this.legacyDiscussionId = legacyDiscussionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkToDiscussion")
    public String linkToDiscussion;
    public FileComment withLinkToDiscussion(String linkToDiscussion) {
        this.linkToDiscussion = linkToDiscussion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public DriveItem parent;
    public FileComment withParent(DriveItem parent) {
        this.parent = parent;
        return this;
    }
}