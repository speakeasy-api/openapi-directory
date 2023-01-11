package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentRecentJson200ApplicationJsonResultsComments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approveDate")
    public String approveDate;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withApproveDate(String approveDate) {
        this.approveDate = approveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset")
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset asset;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withAsset(GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset asset) {
        this.asset = asset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetID")
    public Long assetID;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withAssetId(Long assetID) {
        this.assetID = assetID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentBody")
    public String commentBody;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withCommentBody(String commentBody) {
        this.commentBody = commentBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentID")
    public Long commentID;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withCommentId(Long commentID) {
        this.commentID = commentID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentSequence")
    public Long commentSequence;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withCommentSequence(Long commentSequence) {
        this.commentSequence = commentSequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentTitle")
    public String commentTitle;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withCommentTitle(String commentTitle) {
        this.commentTitle = commentTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentType")
    public String commentType;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withCommentType(String commentType) {
        this.commentType = commentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createDate")
    public String createDate;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withCreateDate(String createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editorsSelection")
    public Long editorsSelection;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withEditorsSelection(Long editorsSelection) {
        this.editorsSelection = editorsSelection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentID")
    public Object parentID;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withParentId(Object parentID) {
        this.parentID = parentID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationCount")
    public Long recommendationCount;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withRecommendationCount(Long recommendationCount) {
        this.recommendationCount = recommendationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replies")
    public java.util.Map<String, Object>[] replies;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withReplies(java.util.Map<String, Object>[] replies) {
        this.replies = replies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusID")
    public Long statusID;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withStatusId(Long statusID) {
        this.statusID = statusID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateDate")
    public String updateDate;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withUpdateDate(String updateDate) {
        this.updateDate = updateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userDisplayName")
    public String userDisplayName;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withUserDisplayName(String userDisplayName) {
        this.userDisplayName = userDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userID")
    public Long userID;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withUserId(Long userID) {
        this.userID = userID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLocation")
    public String userLocation;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withUserLocation(String userLocation) {
        this.userLocation = userLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userTitle")
    public String userTitle;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withUserTitle(String userTitle) {
        this.userTitle = userTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userURL")
    public String userURL;
    public GetUserContentRecentJson200ApplicationJsonResultsComments withUserUrl(String userURL) {
        this.userURL = userURL;
        return this;
    }
}