package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportEventsJsonlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ExportEventsJsonlQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ExportEventsJsonlQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}