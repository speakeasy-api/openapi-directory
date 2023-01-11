package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadSwaggerRequestBodySwagger {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UploadSwaggerRequestBodySwagger withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=swagger")
    public String swagger;
    public UploadSwaggerRequestBodySwagger withSwagger(String swagger) {
        this.swagger = swagger;
        return this;
    }
}