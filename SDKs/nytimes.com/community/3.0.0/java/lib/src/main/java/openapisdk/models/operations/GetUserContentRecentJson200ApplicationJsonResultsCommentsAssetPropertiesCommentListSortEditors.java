package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupID")
    public Long groupID;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors withGroupId(Long groupID) {
        this.groupID = groupID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxonomyID")
    public Long taxonomyID;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors withTaxonomyId(Long taxonomyID) {
        this.taxonomyID = taxonomyID;
        return this;
    }
}