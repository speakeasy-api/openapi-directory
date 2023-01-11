package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStringsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetStringsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source_language")
    public String sourceLanguage;
    public GetStringsQueryParams withSourceLanguage(String sourceLanguage) {
        this.sourceLanguage = sourceLanguage;
        return this;
    }
}