package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportServicesJsonlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ExportServicesJsonlQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ExportServicesJsonlQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}