package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadsCreateRequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UploadsCreateRequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public UploadsCreateRequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}