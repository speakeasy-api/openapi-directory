package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableExportTemplateInput {
    @JsonProperty("content_type")
    public String contentType;
    public WritableExportTemplateInput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritableExportTemplateInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_extension")
    public String fileExtension;
    public WritableExportTemplateInput withFileExtension(String fileExtension) {
        this.fileExtension = fileExtension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mime_type")
    public String mimeType;
    public WritableExportTemplateInput withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableExportTemplateInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("template_code")
    public String templateCode;
    public WritableExportTemplateInput withTemplateCode(String templateCode) {
        this.templateCode = templateCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template_language")
    public WritableExportTemplateTemplateLanguageEnum templateLanguage;
    public WritableExportTemplateInput withTemplateLanguage(WritableExportTemplateTemplateLanguageEnum templateLanguage) {
        this.templateLanguage = templateLanguage;
        return this;
    }
}