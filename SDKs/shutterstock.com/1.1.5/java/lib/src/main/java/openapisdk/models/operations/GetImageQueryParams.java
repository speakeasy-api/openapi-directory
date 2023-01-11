package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public openapisdk.models.shared.LanguageEnum language;
    public GetImageQueryParams withLanguage(openapisdk.models.shared.LanguageEnum language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public GetImageViewEnum view;
    public GetImageQueryParams withView(GetImageViewEnum view) {
        this.view = view;
        return this;
    }
}