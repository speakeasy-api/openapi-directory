package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isOwner")
    public Boolean isOwner;
    public GetAppsQueryParams withIsOwner(Boolean isOwner) {
        this.isOwner = isOwner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetAppsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageNumber")
    public Long pageNumber;
    public GetAppsQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetAppsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetAppsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public String userId;
    public GetAppsQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}