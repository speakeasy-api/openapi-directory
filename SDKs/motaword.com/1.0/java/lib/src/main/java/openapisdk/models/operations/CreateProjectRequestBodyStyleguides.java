package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectRequestBodyStyleguides {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public CreateProjectRequestBodyStyleguides withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=styleguides[]")
    public String styleguides;
    public CreateProjectRequestBodyStyleguides withStyleguides(String styleguides) {
        this.styleguides = styleguides;
        return this;
    }
}