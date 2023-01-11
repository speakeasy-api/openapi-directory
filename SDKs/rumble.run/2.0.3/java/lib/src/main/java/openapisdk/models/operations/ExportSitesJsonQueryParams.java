package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportSitesJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ExportSitesJsonQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ExportSitesJsonQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}