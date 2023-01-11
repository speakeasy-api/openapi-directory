package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language_code")
    public String languageCode;
    public GetDocumentsQueryParams withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_by")
    public GetDocumentsOrderByEnum orderBy;
    public GetDocumentsQueryParams withOrderBy(GetDocumentsOrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_type")
    public openapisdk.models.shared.ListOrderTypeEnum orderType;
    public GetDocumentsQueryParams withOrderType(openapisdk.models.shared.ListOrderTypeEnum orderType) {
        this.orderType = orderType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetDocumentsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetDocumentsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recent")
    public Boolean recent;
    public GetDocumentsQueryParams withRecent(Boolean recent) {
        this.recent = recent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetDocumentsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type_filter")
    public GetDocumentsTypeFilterEnum typeFilter;
    public GetDocumentsQueryParams withTypeFilter(GetDocumentsTypeFilterEnum typeFilter) {
        this.typeFilter = typeFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with[]")
    public GetDocumentsWithEnum[] with;
    public GetDocumentsQueryParams withWith(GetDocumentsWithEnum[] with) {
        this.with = with;
        return this;
    }
}