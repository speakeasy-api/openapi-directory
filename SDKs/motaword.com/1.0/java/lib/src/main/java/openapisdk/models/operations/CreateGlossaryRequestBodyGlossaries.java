package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGlossaryRequestBodyGlossaries {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public CreateGlossaryRequestBodyGlossaries withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=glossaries")
    public String glossaries;
    public CreateGlossaryRequestBodyGlossaries withGlossaries(String glossaries) {
        this.glossaries = glossaries;
        return this;
    }
}