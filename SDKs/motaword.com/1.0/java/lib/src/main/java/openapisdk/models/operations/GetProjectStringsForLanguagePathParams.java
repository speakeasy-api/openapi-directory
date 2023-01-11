package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectStringsForLanguagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=language")
    public String language;
    public GetProjectStringsForLanguagePathParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetProjectStringsForLanguagePathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}