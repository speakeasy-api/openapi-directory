package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserContentUrlJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public GetUserContentUrlJsonQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}