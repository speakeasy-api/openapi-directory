package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentByDateJson200ApplicationJsonResultsComments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approveDate")
    public String approveDate;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withApproveDate(String approveDate) {
        this.approveDate = approveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetID")
    public Long assetID;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withAssetId(Long assetID) {
        this.assetID = assetID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetURL")
    public String assetURL;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withAssetUrl(String assetURL) {
        this.assetURL = assetURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentBody")
    public String commentBody;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withCommentBody(String commentBody) {
        this.commentBody = commentBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentID")
    public Long commentID;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withCommentId(Long commentID) {
        this.commentID = commentID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentSequence")
    public Long commentSequence;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withCommentSequence(Long commentSequence) {
        this.commentSequence = commentSequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentTitle")
    public String commentTitle;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withCommentTitle(String commentTitle) {
        this.commentTitle = commentTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentType")
    public String commentType;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withCommentType(String commentType) {
        this.commentType = commentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createDate")
    public String createDate;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withCreateDate(String createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editorsSelection")
    public Long editorsSelection;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withEditorsSelection(Long editorsSelection) {
        this.editorsSelection = editorsSelection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lft")
    public Long lft;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withLft(Long lft) {
        this.lft = lft;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentID")
    public Object parentID;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withParentId(Object parentID) {
        this.parentID = parentID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationCount")
    public Long recommendationCount;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withRecommendationCount(Long recommendationCount) {
        this.recommendationCount = recommendationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replies")
    public java.util.Map<String, Object>[] replies;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withReplies(java.util.Map<String, Object>[] replies) {
        this.replies = replies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyCount")
    public Long replyCount;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withReplyCount(Long replyCount) {
        this.replyCount = replyCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rgt")
    public Long rgt;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withRgt(Long rgt) {
        this.rgt = rgt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusID")
    public Long statusID;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withStatusId(Long statusID) {
        this.statusID = statusID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateDate")
    public String updateDate;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withUpdateDate(String updateDate) {
        this.updateDate = updateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userDisplayName")
    public String userDisplayName;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withUserDisplayName(String userDisplayName) {
        this.userDisplayName = userDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userID")
    public Long userID;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withUserId(Long userID) {
        this.userID = userID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLocation")
    public String userLocation;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withUserLocation(String userLocation) {
        this.userLocation = userLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userTitle")
    public String userTitle;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withUserTitle(String userTitle) {
        this.userTitle = userTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userURL")
    public Long userURL;
    public GetUserContentByDateJson200ApplicationJsonResultsComments withUserUrl(Long userURL) {
        this.userURL = userURL;
        return this;
    }
}