package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StandardResourceMetadata
 * The standard metadata of a cloud resource.
**/
public class StandardResourceMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalAttributes")
    public String[] additionalAttributes;
    public StandardResourceMetadata withAdditionalAttributes(String[] additionalAttributes) {
        this.additionalAttributes = additionalAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetType")
    public String assetType;
    public StandardResourceMetadata withAssetType(String assetType) {
        this.assetType = assetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public StandardResourceMetadata withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public StandardResourceMetadata withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public StandardResourceMetadata withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public StandardResourceMetadata withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public StandardResourceMetadata withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkTags")
    public String[] networkTags;
    public StandardResourceMetadata withNetworkTags(String[] networkTags) {
        this.networkTags = networkTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public String project;
    public StandardResourceMetadata withProject(String project) {
        this.project = project;
        return this;
    }
}