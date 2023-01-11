package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TemplateDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSettings")
    public TemplateDefinitionDataSettings dataSettings;
    public TemplateDefinition withDataSettings(TemplateDefinitionDataSettings dataSettings) {
        this.dataSettings = dataSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editor")
    public TemplateDefinitionEditor editor;
    public TemplateDefinition withEditor(TemplateDefinitionEditor editor) {
        this.editor = editor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public TemplateDefinition withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDraft")
    public Boolean isDraft;
    public TemplateDefinition withIsDraft(Boolean isDraft) {
        this.isDraft = isDraft;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layout")
    public TemplateDefinitionLayout layout;
    public TemplateDefinition withLayout(TemplateDefinitionLayout layout) {
        this.layout = layout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TemplateDefinition withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pages")
    public TemplateDefinitionPages[] pages;
    public TemplateDefinition withPages(TemplateDefinitionPages[] pages) {
        this.pages = pages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public TemplateDefinition withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}