package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGlobalGlossaryRequestBodyGlossary {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UpdateGlobalGlossaryRequestBodyGlossary withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=glossary")
    public String glossary;
    public UpdateGlobalGlossaryRequestBodyGlossary withGlossary(String glossary) {
        this.glossary = glossary;
        return this;
    }
}