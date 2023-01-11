package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSwaggerRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public UpdateSwaggerRequestBodySwagger swagger;
    public UpdateSwaggerRequestBody withSwagger(UpdateSwaggerRequestBodySwagger swagger) {
        this.swagger = swagger;
        return this;
    }
}