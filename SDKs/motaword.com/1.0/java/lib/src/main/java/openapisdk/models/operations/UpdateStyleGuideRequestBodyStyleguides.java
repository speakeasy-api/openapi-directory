package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStyleGuideRequestBodyStyleguides {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UpdateStyleGuideRequestBodyStyleguides withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=styleguides")
    public String styleguides;
    public UpdateStyleGuideRequestBodyStyleguides withStyleguides(String styleguides) {
        this.styleguides = styleguides;
        return this;
    }
}