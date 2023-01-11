package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStyleGuideRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public UpdateStyleGuideRequestBodyStyleguides styleguides;
    public UpdateStyleGuideRequestBody withStyleguides(UpdateStyleGuideRequestBodyStyleguides styleguides) {
        this.styleguides = styleguides;
        return this;
    }
}