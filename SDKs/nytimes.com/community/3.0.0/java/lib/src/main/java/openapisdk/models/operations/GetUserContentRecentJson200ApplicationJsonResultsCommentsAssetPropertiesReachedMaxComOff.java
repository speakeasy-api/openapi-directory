package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupID")
    public Long groupID;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff withGroupId(Long groupID) {
        this.groupID = groupID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxonomyID")
    public Long taxonomyID;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff withTaxonomyId(Long taxonomyID) {
        this.taxonomyID = taxonomyID;
        return this;
    }
}