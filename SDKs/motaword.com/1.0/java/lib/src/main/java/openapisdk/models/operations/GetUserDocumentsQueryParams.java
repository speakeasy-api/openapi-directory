package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserDocumentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language_code")
    public String languageCode;
    public GetUserDocumentsQueryParams withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_by")
    public GetUserDocumentsOrderByEnum orderBy;
    public GetUserDocumentsQueryParams withOrderBy(GetUserDocumentsOrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_type")
    public openapisdk.models.shared.ListOrderTypeEnum orderType;
    public GetUserDocumentsQueryParams withOrderType(openapisdk.models.shared.ListOrderTypeEnum orderType) {
        this.orderType = orderType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetUserDocumentsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetUserDocumentsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recent")
    public Boolean recent;
    public GetUserDocumentsQueryParams withRecent(Boolean recent) {
        this.recent = recent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetUserDocumentsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type_filter")
    public GetUserDocumentsTypeFilterEnum typeFilter;
    public GetUserDocumentsQueryParams withTypeFilter(GetUserDocumentsTypeFilterEnum typeFilter) {
        this.typeFilter = typeFilter;
        return this;
    }
}