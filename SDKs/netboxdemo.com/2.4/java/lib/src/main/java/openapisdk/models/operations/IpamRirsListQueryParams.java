package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamRirsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id__in")
    public String idIn;
    public IpamRirsListQueryParams withIdIn(String idIn) {
        this.idIn = idIn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_private")
    public String isPrivate;
    public IpamRirsListQueryParams withIsPrivate(String isPrivate) {
        this.isPrivate = isPrivate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public IpamRirsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public IpamRirsListQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public IpamRirsListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=slug")
    public String slug;
    public IpamRirsListQueryParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}