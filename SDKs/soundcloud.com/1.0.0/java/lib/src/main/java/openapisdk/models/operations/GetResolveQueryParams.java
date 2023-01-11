package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResolveQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public GetResolveQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}