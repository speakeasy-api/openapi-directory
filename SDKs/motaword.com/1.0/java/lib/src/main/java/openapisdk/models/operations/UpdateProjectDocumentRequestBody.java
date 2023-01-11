package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProjectDocumentRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public UpdateProjectDocumentRequestBodyDocuments documents;
    public UpdateProjectDocumentRequestBody withDocuments(UpdateProjectDocumentRequestBodyDocuments documents) {
        this.documents = documents;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=schemes")
    public String schemes;
    public UpdateProjectDocumentRequestBody withSchemes(String schemes) {
        this.schemes = schemes;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=source-link,json")
    public openapisdk.models.shared.LinkedSourceDocument sourceLink;
    public UpdateProjectDocumentRequestBody withSourceLink(openapisdk.models.shared.LinkedSourceDocument sourceLink) {
        this.sourceLink = sourceLink;
        return this;
    }
}