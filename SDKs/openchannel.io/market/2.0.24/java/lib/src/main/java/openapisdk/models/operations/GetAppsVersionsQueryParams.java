package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppsVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=developerId")
    public String developerId;
    public GetAppsVersionsQueryParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetAppsVersionsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageNumber")
    public Long pageNumber;
    public GetAppsVersionsQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetAppsVersionsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetAppsVersionsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}