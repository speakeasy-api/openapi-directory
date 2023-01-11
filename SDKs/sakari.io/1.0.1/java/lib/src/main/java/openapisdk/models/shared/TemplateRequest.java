package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TemplateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TemplateRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public String template;
    public TemplateRequest withTemplate(String template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TemplateRequestTypeEnum type;
    public TemplateRequest withType(TemplateRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}