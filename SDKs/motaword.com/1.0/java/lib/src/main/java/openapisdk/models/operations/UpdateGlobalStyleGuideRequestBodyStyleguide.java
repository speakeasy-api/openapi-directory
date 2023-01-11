package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGlobalStyleGuideRequestBodyStyleguide {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UpdateGlobalStyleGuideRequestBodyStyleguide withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=styleguide")
    public String styleguide;
    public UpdateGlobalStyleGuideRequestBodyStyleguide withStyleguide(String styleguide) {
        this.styleguide = styleguide;
        return this;
    }
}