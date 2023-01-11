package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuoteRandomQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetQuoteRandomQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetQuoteRandomQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}