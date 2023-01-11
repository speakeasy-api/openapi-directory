package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExportTemplate {
    @JsonProperty("content_type")
    public Long contentType;
    public ExportTemplate withContentType(Long contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ExportTemplate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_extension")
    public String fileExtension;
    public ExportTemplate withFileExtension(String fileExtension) {
        this.fileExtension = fileExtension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ExportTemplate withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mime_type")
    public String mimeType;
    public ExportTemplate withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ExportTemplate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("template_code")
    public String templateCode;
    public ExportTemplate withTemplateCode(String templateCode) {
        this.templateCode = templateCode;
        return this;
    }
}