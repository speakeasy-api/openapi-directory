package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQodCategoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=detailed")
    public Boolean detailed;
    public GetQodCategoriesQueryParams withDetailed(Boolean detailed) {
        this.detailed = detailed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetQodCategoriesQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
}