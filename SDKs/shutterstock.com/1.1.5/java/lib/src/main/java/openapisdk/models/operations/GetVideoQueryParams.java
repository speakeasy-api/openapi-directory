package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public openapisdk.models.shared.LanguageEnum language;
    public GetVideoQueryParams withLanguage(openapisdk.models.shared.LanguageEnum language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public GetVideoViewEnum view;
    public GetVideoQueryParams withView(GetVideoViewEnum view) {
        this.view = view;
        return this;
    }
}