package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetTasksQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public GetTasksQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}