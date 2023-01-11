package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportWirelessCsvQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ExportWirelessCsvQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}