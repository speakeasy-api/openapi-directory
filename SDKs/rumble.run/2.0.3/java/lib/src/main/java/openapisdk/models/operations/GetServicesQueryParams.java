package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetServicesQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}