package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEditorUrlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public GetEditorUrlLanguageEnum language;
    public GetEditorUrlQueryParams withLanguage(GetEditorUrlLanguageEnum language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=templateId")
    public Long templateId;
    public GetEditorUrlQueryParams withTemplateId(Long templateId) {
        this.templateId = templateId;
        return this;
    }
}