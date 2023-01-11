package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProjectDocumentRequestBodyDocuments {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UpdateProjectDocumentRequestBodyDocuments withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=documents")
    public String documents;
    public UpdateProjectDocumentRequestBodyDocuments withDocuments(String documents) {
        this.documents = documents;
        return this;
    }
}