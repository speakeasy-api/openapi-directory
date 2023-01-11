package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportEventsJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ExportEventsJsonQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ExportEventsJsonQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}