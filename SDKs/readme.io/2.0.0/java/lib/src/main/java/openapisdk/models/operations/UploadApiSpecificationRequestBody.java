package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadApiSpecificationRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public UploadApiSpecificationRequestBodySpec spec;
    public UploadApiSpecificationRequestBody withSpec(UploadApiSpecificationRequestBodySpec spec) {
        this.spec = spec;
        return this;
    }
}