package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetAccountTasksQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}