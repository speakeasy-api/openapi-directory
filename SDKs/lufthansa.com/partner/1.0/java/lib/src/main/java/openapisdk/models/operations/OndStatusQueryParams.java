package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OndStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=catalogues")
    public String catalogues;
    public OndStatusQueryParams withCatalogues(String catalogues) {
        this.catalogues = catalogues;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=new-routes")
    public String newRoutes;
    public OndStatusQueryParams withNewRoutes(String newRoutes) {
        this.newRoutes = newRoutes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=old-routes")
    public String oldRoutes;
    public OndStatusQueryParams withOldRoutes(String oldRoutes) {
        this.oldRoutes = oldRoutes;
        return this;
    }
}