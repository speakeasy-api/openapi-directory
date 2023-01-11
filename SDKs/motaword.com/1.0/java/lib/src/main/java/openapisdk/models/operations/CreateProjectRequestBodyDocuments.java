package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectRequestBodyDocuments {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public CreateProjectRequestBodyDocuments withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=documents[]")
    public String documents;
    public CreateProjectRequestBodyDocuments withDocuments(String documents) {
        this.documents = documents;
        return this;
    }
}