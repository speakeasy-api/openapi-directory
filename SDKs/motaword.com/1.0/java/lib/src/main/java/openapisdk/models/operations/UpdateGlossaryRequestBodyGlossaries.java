package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGlossaryRequestBodyGlossaries {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UpdateGlossaryRequestBodyGlossaries withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=glossaries")
    public String glossaries;
    public UpdateGlossaryRequestBodyGlossaries withGlossaries(String glossaries) {
        this.glossaries = glossaries;
        return this;
    }
}