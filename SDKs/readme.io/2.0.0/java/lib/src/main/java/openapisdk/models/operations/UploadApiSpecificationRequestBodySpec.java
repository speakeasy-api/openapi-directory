package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadApiSpecificationRequestBodySpec {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UploadApiSpecificationRequestBodySpec withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=spec")
    public String spec;
    public UploadApiSpecificationRequestBodySpec withSpec(String spec) {
        this.spec = spec;
        return this;
    }
}