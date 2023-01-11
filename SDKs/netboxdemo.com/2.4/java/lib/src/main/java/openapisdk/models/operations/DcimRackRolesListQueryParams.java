package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRackRolesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=color")
    public String color;
    public DcimRackRolesListQueryParams withColor(String color) {
        this.color = color;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public DcimRackRolesListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public DcimRackRolesListQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public DcimRackRolesListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=slug")
    public String slug;
    public DcimRackRolesListQueryParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}