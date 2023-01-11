package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SvgconvertFileToConvertFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public SvgconvertFileToConvertFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public SvgconvertFileToConvertFile withFile(String file) {
        this.file = file;
        return this;
    }
}