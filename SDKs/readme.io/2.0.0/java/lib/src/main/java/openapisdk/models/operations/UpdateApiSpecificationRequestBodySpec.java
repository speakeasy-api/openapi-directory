package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApiSpecificationRequestBodySpec {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UpdateApiSpecificationRequestBodySpec withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=spec")
    public String spec;
    public UpdateApiSpecificationRequestBodySpec withSpec(String spec) {
        this.spec = spec;
        return this;
    }
}