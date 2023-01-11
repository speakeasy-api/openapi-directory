package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBadgeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public GetBadgeQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}