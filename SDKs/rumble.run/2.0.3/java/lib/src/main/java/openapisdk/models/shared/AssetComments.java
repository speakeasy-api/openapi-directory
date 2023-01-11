package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssetComments {
    @JsonProperty("comments")
    public String comments;
    public AssetComments withComments(String comments) {
        this.comments = comments;
        return this;
    }
}