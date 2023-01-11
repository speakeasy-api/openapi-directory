package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGlobalGlossaryRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public UpdateGlobalGlossaryRequestBodyGlossary glossary;
    public UpdateGlobalGlossaryRequestBody withGlossary(UpdateGlobalGlossaryRequestBodyGlossary glossary) {
        this.glossary = glossary;
        return this;
    }
}