package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TenancyTenantGroupsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public TenancyTenantGroupsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public TenancyTenantGroupsListQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public TenancyTenantGroupsListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=slug")
    public String slug;
    public TenancyTenantGroupsListQueryParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}