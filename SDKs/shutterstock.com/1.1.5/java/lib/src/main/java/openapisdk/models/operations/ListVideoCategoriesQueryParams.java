package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVideoCategoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public openapisdk.models.shared.LanguageEnum language;
    public ListVideoCategoriesQueryParams withLanguage(openapisdk.models.shared.LanguageEnum language) {
        this.language = language;
        return this;
    }
}