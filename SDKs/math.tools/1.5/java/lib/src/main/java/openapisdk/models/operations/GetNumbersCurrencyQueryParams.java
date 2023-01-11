package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumbersCurrencyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetNumbersCurrencyQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public Long number;
    public GetNumbersCurrencyQueryParams withNumber(Long number) {
        this.number = number;
        return this;
    }
}