package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OndRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=catalogues")
    public String catalogues;
    public OndRouteQueryParams withCatalogues(String catalogues) {
        this.catalogues = catalogues;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public OndRouteQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public OndRouteQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}