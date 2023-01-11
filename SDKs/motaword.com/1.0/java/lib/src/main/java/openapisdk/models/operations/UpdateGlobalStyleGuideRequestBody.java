package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGlobalStyleGuideRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public UpdateGlobalStyleGuideRequestBodyStyleguide styleguide;
    public UpdateGlobalStyleGuideRequestBody withStyleguide(UpdateGlobalStyleGuideRequestBodyStyleguide styleguide) {
        this.styleguide = styleguide;
        return this;
    }
}