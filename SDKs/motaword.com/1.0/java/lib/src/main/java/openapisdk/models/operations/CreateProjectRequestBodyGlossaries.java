package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectRequestBodyGlossaries {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public CreateProjectRequestBodyGlossaries withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=glossaries[]")
    public String glossaries;
    public CreateProjectRequestBodyGlossaries withGlossaries(String glossaries) {
        this.glossaries = glossaries;
        return this;
    }
}