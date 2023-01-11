package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLinksLinksGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_hint")
    public String apiHint;
    public GetLinksLinksGetQueryParams withApiHint(String apiHint) {
        this.apiHint = apiHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email_address")
    public String emailAddress;
    public GetLinksLinksGetQueryParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetLinksLinksGetQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetLinksLinksGetQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_above")
    public Long pageAbove;
    public GetLinksLinksGetQueryParams withPageAbove(Long pageAbove) {
        this.pageAbove = pageAbove;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_below")
    public Long pageBelow;
    public GetLinksLinksGetQueryParams withPageBelow(Long pageBelow) {
        this.pageBelow = pageBelow;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_cursor")
    public Long pageCursor;
    public GetLinksLinksGetQueryParams withPageCursor(Long pageCursor) {
        this.pageCursor = pageCursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_limit")
    public Long pageLimit;
    public GetLinksLinksGetQueryParams withPageLimit(Long pageLimit) {
        this.pageLimit = pageLimit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public Long pageNumber;
    public GetLinksLinksGetQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_offset")
    public Long pageOffset;
    public GetLinksLinksGetQueryParams withPageOffset(Long pageOffset) {
        this.pageOffset = pageOffset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=response_fields")
    public String responseFields;
    public GetLinksLinksGetQueryParams withResponseFields(String responseFields) {
        this.responseFields = responseFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=response_format")
    public String responseFormat;
    public GetLinksLinksGetQueryParams withResponseFormat(String responseFormat) {
        this.responseFormat = responseFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetLinksLinksGetQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}