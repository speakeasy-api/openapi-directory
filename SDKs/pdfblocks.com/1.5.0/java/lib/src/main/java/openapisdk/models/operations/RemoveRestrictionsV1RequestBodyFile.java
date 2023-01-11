package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveRestrictionsV1RequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public RemoveRestrictionsV1RequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public RemoveRestrictionsV1RequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}