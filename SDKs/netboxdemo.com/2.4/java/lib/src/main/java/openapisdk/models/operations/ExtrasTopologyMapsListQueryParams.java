package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasTopologyMapsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ExtrasTopologyMapsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public ExtrasTopologyMapsListQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ExtrasTopologyMapsListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public ExtrasTopologyMapsListQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site_id")
    public String siteId;
    public ExtrasTopologyMapsListQueryParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=slug")
    public String slug;
    public ExtrasTopologyMapsListQueryParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}