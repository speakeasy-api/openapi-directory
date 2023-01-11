package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSwaggerRequestBodySwagger {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UpdateSwaggerRequestBodySwagger withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=swagger")
    public String swagger;
    public UpdateSwaggerRequestBodySwagger withSwagger(String swagger) {
        this.swagger = swagger;
        return this;
    }
}