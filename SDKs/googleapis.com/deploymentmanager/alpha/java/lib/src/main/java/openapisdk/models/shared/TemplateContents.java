package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TemplateContents
 * Files that make up the template contents of a template type.
**/
public class TemplateContents {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imports")
    public ImportFile[] imports;
    public TemplateContents withImports(ImportFile[] imports) {
        this.imports = imports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interpreter")
    public TemplateContentsInterpreterEnum interpreter;
    public TemplateContents withInterpreter(TemplateContentsInterpreterEnum interpreter) {
        this.interpreter = interpreter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainTemplate")
    public String mainTemplate;
    public TemplateContents withMainTemplate(String mainTemplate) {
        this.mainTemplate = mainTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public String schema;
    public TemplateContents withSchema(String schema) {
        this.schema = schema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public String template;
    public TemplateContents withTemplate(String template) {
        this.template = template;
        return this;
    }
}