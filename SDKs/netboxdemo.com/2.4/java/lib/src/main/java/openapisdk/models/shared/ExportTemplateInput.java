package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExportTemplateInput {
    @JsonProperty("content_type")
    public Long contentType;
    public ExportTemplateInput withContentType(Long contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ExportTemplateInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_extension")
    public String fileExtension;
    public ExportTemplateInput withFileExtension(String fileExtension) {
        this.fileExtension = fileExtension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mime_type")
    public String mimeType;
    public ExportTemplateInput withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ExportTemplateInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("template_code")
    public String templateCode;
    public ExportTemplateInput withTemplateCode(String templateCode) {
        this.templateCode = templateCode;
        return this;
    }
}