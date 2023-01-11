package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStyleGuideRequestBodyStyleguides {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public CreateStyleGuideRequestBodyStyleguides withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=styleguides[]")
    public String styleguides;
    public CreateStyleGuideRequestBodyStyleguides withStyleguides(String styleguides) {
        this.styleguides = styleguides;
        return this;
    }
}