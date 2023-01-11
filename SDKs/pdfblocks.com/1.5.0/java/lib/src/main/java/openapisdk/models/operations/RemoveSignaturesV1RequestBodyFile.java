package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveSignaturesV1RequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public RemoveSignaturesV1RequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public RemoveSignaturesV1RequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}