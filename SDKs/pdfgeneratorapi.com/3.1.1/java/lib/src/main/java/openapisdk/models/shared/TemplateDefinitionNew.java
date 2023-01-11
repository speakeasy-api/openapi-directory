package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TemplateDefinitionNew
 * Template configuration
**/
public class TemplateDefinitionNew {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDraft")
    public Boolean isDraft;
    public TemplateDefinitionNew withIsDraft(Boolean isDraft) {
        this.isDraft = isDraft;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layout")
    public TemplateDefinitionNewLayout layout;
    public TemplateDefinitionNew withLayout(TemplateDefinitionNewLayout layout) {
        this.layout = layout;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public TemplateDefinitionNew withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pages")
    public TemplateDefinitionNewPages[] pages;
    public TemplateDefinitionNew withPages(TemplateDefinitionNewPages[] pages) {
        this.pages = pages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public TemplateDefinitionNew withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}