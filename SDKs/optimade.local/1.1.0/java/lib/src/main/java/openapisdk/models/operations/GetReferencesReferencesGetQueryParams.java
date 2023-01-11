package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReferencesReferencesGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_hint")
    public String apiHint;
    public GetReferencesReferencesGetQueryParams withApiHint(String apiHint) {
        this.apiHint = apiHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email_address")
    public String emailAddress;
    public GetReferencesReferencesGetQueryParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetReferencesReferencesGetQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetReferencesReferencesGetQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_above")
    public Long pageAbove;
    public GetReferencesReferencesGetQueryParams withPageAbove(Long pageAbove) {
        this.pageAbove = pageAbove;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_below")
    public Long pageBelow;
    public GetReferencesReferencesGetQueryParams withPageBelow(Long pageBelow) {
        this.pageBelow = pageBelow;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_cursor")
    public Long pageCursor;
    public GetReferencesReferencesGetQueryParams withPageCursor(Long pageCursor) {
        this.pageCursor = pageCursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_limit")
    public Long pageLimit;
    public GetReferencesReferencesGetQueryParams withPageLimit(Long pageLimit) {
        this.pageLimit = pageLimit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public Long pageNumber;
    public GetReferencesReferencesGetQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_offset")
    public Long pageOffset;
    public GetReferencesReferencesGetQueryParams withPageOffset(Long pageOffset) {
        this.pageOffset = pageOffset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=response_fields")
    public String responseFields;
    public GetReferencesReferencesGetQueryParams withResponseFields(String responseFields) {
        this.responseFields = responseFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=response_format")
    public String responseFormat;
    public GetReferencesReferencesGetQueryParams withResponseFormat(String responseFormat) {
        this.responseFormat = responseFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetReferencesReferencesGetQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}