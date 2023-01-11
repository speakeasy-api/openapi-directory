package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadInventoryRequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UploadInventoryRequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public UploadInventoryRequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}