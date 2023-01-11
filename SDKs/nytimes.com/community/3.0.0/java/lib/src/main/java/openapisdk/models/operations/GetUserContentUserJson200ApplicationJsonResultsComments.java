package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentUserJson200ApplicationJsonResultsComments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approveDate")
    public String approveDate;
    public GetUserContentUserJson200ApplicationJsonResultsComments withApproveDate(String approveDate) {
        this.approveDate = approveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset")
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAsset asset;
    public GetUserContentUserJson200ApplicationJsonResultsComments withAsset(GetUserContentUserJson200ApplicationJsonResultsCommentsAsset asset) {
        this.asset = asset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentBody")
    public String commentBody;
    public GetUserContentUserJson200ApplicationJsonResultsComments withCommentBody(String commentBody) {
        this.commentBody = commentBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentID")
    public Long commentID;
    public GetUserContentUserJson200ApplicationJsonResultsComments withCommentId(Long commentID) {
        this.commentID = commentID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentSequence")
    public Long commentSequence;
    public GetUserContentUserJson200ApplicationJsonResultsComments withCommentSequence(Long commentSequence) {
        this.commentSequence = commentSequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentTitle")
    public String commentTitle;
    public GetUserContentUserJson200ApplicationJsonResultsComments withCommentTitle(String commentTitle) {
        this.commentTitle = commentTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentType")
    public String commentType;
    public GetUserContentUserJson200ApplicationJsonResultsComments withCommentType(String commentType) {
        this.commentType = commentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createDate")
    public String createDate;
    public GetUserContentUserJson200ApplicationJsonResultsComments withCreateDate(String createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editorsSelection")
    public Boolean editorsSelection;
    public GetUserContentUserJson200ApplicationJsonResultsComments withEditorsSelection(Boolean editorsSelection) {
        this.editorsSelection = editorsSelection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, Object>[] labels;
    public GetUserContentUserJson200ApplicationJsonResultsComments withLabels(java.util.Map<String, Object>[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentID")
    public Object parentID;
    public GetUserContentUserJson200ApplicationJsonResultsComments withParentId(Object parentID) {
        this.parentID = parentID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permid")
    public Long permid;
    public GetUserContentUserJson200ApplicationJsonResultsComments withPermid(Long permid) {
        this.permid = permid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("picURL")
    public String picURL;
    public GetUserContentUserJson200ApplicationJsonResultsComments withPicUrl(String picURL) {
        this.picURL = picURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendations")
    public Long recommendations;
    public GetUserContentUserJson200ApplicationJsonResultsComments withRecommendations(Long recommendations) {
        this.recommendations = recommendations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replies")
    public java.util.Map<String, Object>[] replies;
    public GetUserContentUserJson200ApplicationJsonResultsComments withReplies(java.util.Map<String, Object>[] replies) {
        this.replies = replies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyCount")
    public Long replyCount;
    public GetUserContentUserJson200ApplicationJsonResultsComments withReplyCount(Long replyCount) {
        this.replyCount = replyCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetUserContentUserJson200ApplicationJsonResultsComments withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateDate")
    public String updateDate;
    public GetUserContentUserJson200ApplicationJsonResultsComments withUpdateDate(String updateDate) {
        this.updateDate = updateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userDisplayName")
    public Object userDisplayName;
    public GetUserContentUserJson200ApplicationJsonResultsComments withUserDisplayName(Object userDisplayName) {
        this.userDisplayName = userDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userID")
    public Long userID;
    public GetUserContentUserJson200ApplicationJsonResultsComments withUserId(Long userID) {
        this.userID = userID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLocation")
    public Object userLocation;
    public GetUserContentUserJson200ApplicationJsonResultsComments withUserLocation(Object userLocation) {
        this.userLocation = userLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userSubmittedDisplayName")
    public String userSubmittedDisplayName;
    public GetUserContentUserJson200ApplicationJsonResultsComments withUserSubmittedDisplayName(String userSubmittedDisplayName) {
        this.userSubmittedDisplayName = userSubmittedDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userSubmittedLocation")
    public String userSubmittedLocation;
    public GetUserContentUserJson200ApplicationJsonResultsComments withUserSubmittedLocation(String userSubmittedLocation) {
        this.userSubmittedLocation = userSubmittedLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userSubmittedTitle")
    public Object userSubmittedTitle;
    public GetUserContentUserJson200ApplicationJsonResultsComments withUserSubmittedTitle(Object userSubmittedTitle) {
        this.userSubmittedTitle = userSubmittedTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userSubmittedURL")
    public Object userSubmittedURL;
    public GetUserContentUserJson200ApplicationJsonResultsComments withUserSubmittedUrl(Object userSubmittedURL) {
        this.userSubmittedURL = userSubmittedURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userTitle")
    public Object userTitle;
    public GetUserContentUserJson200ApplicationJsonResultsComments withUserTitle(Object userTitle) {
        this.userTitle = userTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userURL")
    public Object userURL;
    public GetUserContentUserJson200ApplicationJsonResultsComments withUserUrl(Object userURL) {
        this.userURL = userURL;
        return this;
    }
}