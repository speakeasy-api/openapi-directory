package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, Object>[] properties;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties withProperties(java.util.Map<String, Object>[] properties) {
        this.properties = properties;
        return this;
    }
}