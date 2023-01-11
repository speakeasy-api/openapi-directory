package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConvertUrlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public ConvertUrlQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}