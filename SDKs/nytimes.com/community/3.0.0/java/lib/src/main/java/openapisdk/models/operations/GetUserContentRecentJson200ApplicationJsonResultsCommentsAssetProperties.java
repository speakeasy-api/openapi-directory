package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automoderation-on")
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn automoderationOn;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties withAutomoderationOn(GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn automoderationOn) {
        this.automoderationOn = automoderationOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment-list-sort-editors")
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors commentListSortEditors;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties withCommentListSortEditors(GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors commentListSortEditors) {
        this.commentListSortEditors = commentListSortEditors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reached-max-com-off")
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff reachedMaxComOff;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties withReachedMaxComOff(GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff reachedMaxComOff) {
        this.reachedMaxComOff = reachedMaxComOff;
        return this;
    }
}