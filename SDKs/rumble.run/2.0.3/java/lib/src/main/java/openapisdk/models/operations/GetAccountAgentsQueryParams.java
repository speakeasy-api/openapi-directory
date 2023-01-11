package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountAgentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetAccountAgentsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}