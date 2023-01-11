package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automoderation-off")
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff automoderationOff;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties withAutomoderationOff(GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff automoderationOff) {
        this.automoderationOff = automoderationOff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment-list-sort-approvedate-desc")
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc commentListSortApprovedateDesc;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties withCommentListSortApprovedateDesc(GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc commentListSortApprovedateDesc) {
        this.commentListSortApprovedateDesc = commentListSortApprovedateDesc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reached-max-com-on")
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn reachedMaxComOn;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties withReachedMaxComOn(GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn reachedMaxComOn) {
        this.reachedMaxComOn = reachedMaxComOn;
        return this;
    }
}