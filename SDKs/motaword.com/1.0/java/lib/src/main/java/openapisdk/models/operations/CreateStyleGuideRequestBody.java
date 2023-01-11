package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStyleGuideRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public CreateStyleGuideRequestBodyStyleguides styleguides;
    public CreateStyleGuideRequestBody withStyleguides(CreateStyleGuideRequestBodyStyleguides styleguides) {
        this.styleguides = styleguides;
        return this;
    }
}