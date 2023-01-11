package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListImageCategoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public openapisdk.models.shared.LanguageEnum language;
    public ListImageCategoriesQueryParams withLanguage(openapisdk.models.shared.LanguageEnum language) {
        this.language = language;
        return this;
    }
}