package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportServicesCsvQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ExportServicesCsvQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}