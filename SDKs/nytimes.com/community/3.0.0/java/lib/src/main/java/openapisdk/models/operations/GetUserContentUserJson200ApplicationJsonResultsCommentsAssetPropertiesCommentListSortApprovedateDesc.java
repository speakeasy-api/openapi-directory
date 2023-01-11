package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupID")
    public Long groupID;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc withGroupId(Long groupID) {
        this.groupID = groupID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxonomyID")
    public Long taxonomyID;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc withTaxonomyId(Long taxonomyID) {
        this.taxonomyID = taxonomyID;
        return this;
    }
}