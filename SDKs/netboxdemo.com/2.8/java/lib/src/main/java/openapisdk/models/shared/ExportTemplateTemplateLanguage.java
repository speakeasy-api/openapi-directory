package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ExportTemplateTemplateLanguage {
    @JsonProperty("label")
    public ExportTemplateTemplateLanguageLabelEnum label;
    public ExportTemplateTemplateLanguage withLabel(ExportTemplateTemplateLanguageLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public ExportTemplateTemplateLanguageValueEnum value;
    public ExportTemplateTemplateLanguage withValue(ExportTemplateTemplateLanguageValueEnum value) {
        this.value = value;
        return this;
    }
}