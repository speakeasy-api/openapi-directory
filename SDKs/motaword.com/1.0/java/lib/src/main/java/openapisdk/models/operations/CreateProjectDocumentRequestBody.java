package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectDocumentRequestBody {
    @SpeakeasyMetadata("multipartForm:name=documents[],json")
    public byte[][] documents;
    public CreateProjectDocumentRequestBody withDocuments(byte[][] documents) {
        this.documents = documents;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=schemes[]")
    public String schemes;
    public CreateProjectDocumentRequestBody withSchemes(String schemes) {
        this.schemes = schemes;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=source-links[],json")
    public openapisdk.models.shared.LinkedSourceDocument[] sourceLinks;
    public CreateProjectDocumentRequestBody withSourceLinks(openapisdk.models.shared.LinkedSourceDocument[] sourceLinks) {
        this.sourceLinks = sourceLinks;
        return this;
    }
}