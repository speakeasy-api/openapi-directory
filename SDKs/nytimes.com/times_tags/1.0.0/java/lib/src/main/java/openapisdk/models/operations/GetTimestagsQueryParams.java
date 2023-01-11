package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTimestagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetTimestagsFilterEnum filter;
    public GetTimestagsQueryParams withFilter(GetTimestagsFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public GetTimestagsQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetTimestagsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}