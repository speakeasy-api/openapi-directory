package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentTranslationsForLanguagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public Long documentId;
    public GetDocumentTranslationsForLanguagePathParams withDocumentId(Long documentId) {
        this.documentId = documentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=language")
    public String language;
    public GetDocumentTranslationsForLanguagePathParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetDocumentTranslationsForLanguagePathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}