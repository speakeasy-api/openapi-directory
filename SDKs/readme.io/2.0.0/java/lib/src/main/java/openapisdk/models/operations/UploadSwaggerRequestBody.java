package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadSwaggerRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public UploadSwaggerRequestBodySwagger swagger;
    public UploadSwaggerRequestBody withSwagger(UploadSwaggerRequestBodySwagger swagger) {
        this.swagger = swagger;
        return this;
    }
}