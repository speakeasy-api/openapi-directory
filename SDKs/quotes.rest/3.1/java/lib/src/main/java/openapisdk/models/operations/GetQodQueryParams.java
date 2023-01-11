package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQodQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String category;
    public GetQodQueryParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetQodQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
}