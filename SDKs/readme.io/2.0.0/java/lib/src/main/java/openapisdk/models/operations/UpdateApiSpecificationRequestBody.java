package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApiSpecificationRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public UpdateApiSpecificationRequestBodySpec spec;
    public UpdateApiSpecificationRequestBody withSpec(UpdateApiSpecificationRequestBodySpec spec) {
        this.spec = spec;
        return this;
    }
}