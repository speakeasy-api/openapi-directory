package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectTranslationsForLanguagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=language")
    public String language;
    public GetProjectTranslationsForLanguagePathParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetProjectTranslationsForLanguagePathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}