package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodesCreateNodeAttributesInput
 * The properties of the node entity.
**/
public class NodesCreateNodeAttributesInput {
    @JsonProperty("category")
    public NodesCreateNodeAttributesCategoryEnum category;
    public NodesCreateNodeAttributesInput withCategory(NodesCreateNodeAttributesCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public NodesCreateNodeAttributesInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node_license")
    public String nodeLicense;
    public NodesCreateNodeAttributesInput withNodeLicense(String nodeLicense) {
        this.nodeLicense = nodeLicense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public Boolean public_;
    public NodesCreateNodeAttributesInput withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public NodesCreateNodeAttributesInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template_from")
    public String templateFrom;
    public NodesCreateNodeAttributesInput withTemplateFrom(String templateFrom) {
        this.templateFrom = templateFrom;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public NodesCreateNodeAttributesInput withTitle(String title) {
        this.title = title;
        return this;
    }
}