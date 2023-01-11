package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStructuresStructuresGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_hint")
    public String apiHint;
    public GetStructuresStructuresGetQueryParams withApiHint(String apiHint) {
        this.apiHint = apiHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email_address")
    public String emailAddress;
    public GetStructuresStructuresGetQueryParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetStructuresStructuresGetQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetStructuresStructuresGetQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_above")
    public Long pageAbove;
    public GetStructuresStructuresGetQueryParams withPageAbove(Long pageAbove) {
        this.pageAbove = pageAbove;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_below")
    public Long pageBelow;
    public GetStructuresStructuresGetQueryParams withPageBelow(Long pageBelow) {
        this.pageBelow = pageBelow;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_cursor")
    public Long pageCursor;
    public GetStructuresStructuresGetQueryParams withPageCursor(Long pageCursor) {
        this.pageCursor = pageCursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_limit")
    public Long pageLimit;
    public GetStructuresStructuresGetQueryParams withPageLimit(Long pageLimit) {
        this.pageLimit = pageLimit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public Long pageNumber;
    public GetStructuresStructuresGetQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_offset")
    public Long pageOffset;
    public GetStructuresStructuresGetQueryParams withPageOffset(Long pageOffset) {
        this.pageOffset = pageOffset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=response_fields")
    public String responseFields;
    public GetStructuresStructuresGetQueryParams withResponseFields(String responseFields) {
        this.responseFields = responseFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=response_format")
    public String responseFormat;
    public GetStructuresStructuresGetQueryParams withResponseFormat(String responseFormat) {
        this.responseFormat = responseFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetStructuresStructuresGetQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}