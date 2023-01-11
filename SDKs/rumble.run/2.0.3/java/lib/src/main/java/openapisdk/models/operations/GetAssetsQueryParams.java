package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetAssetsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}