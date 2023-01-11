package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateManifestLabelIdsRequestBody
 * A create manifest request body
**/
public class CreateManifestLabelIdsRequestBody {
    @JsonProperty("label_ids")
    public String[] labelIds;
    public CreateManifestLabelIdsRequestBody withLabelIds(String[] labelIds) {
        this.labelIds = labelIds;
        return this;
    }
}