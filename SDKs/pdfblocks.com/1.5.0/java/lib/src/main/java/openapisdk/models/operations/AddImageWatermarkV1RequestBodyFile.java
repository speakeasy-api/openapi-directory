package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddImageWatermarkV1RequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public AddImageWatermarkV1RequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public AddImageWatermarkV1RequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}