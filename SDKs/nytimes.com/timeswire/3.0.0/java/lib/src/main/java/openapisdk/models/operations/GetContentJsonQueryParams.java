package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContentJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public GetContentJsonQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}