package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TopOndQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=catalogues")
    public String catalogues;
    public TopOndQueryParams withCatalogues(String catalogues) {
        this.catalogues = catalogues;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=origin")
    public String origin;
    public TopOndQueryParams withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
}