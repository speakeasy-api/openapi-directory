package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelID")
    public Long labelID;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels withLabelId(Long labelID) {
        this.labelID = labelID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelName")
    public String labelName;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels withLabelName(String labelName) {
        this.labelName = labelName;
        return this;
    }
}