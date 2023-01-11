package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateUrlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public ValidateUrlQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}