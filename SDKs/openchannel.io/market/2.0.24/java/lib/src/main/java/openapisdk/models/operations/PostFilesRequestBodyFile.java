package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFilesRequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostFilesRequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public PostFilesRequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}