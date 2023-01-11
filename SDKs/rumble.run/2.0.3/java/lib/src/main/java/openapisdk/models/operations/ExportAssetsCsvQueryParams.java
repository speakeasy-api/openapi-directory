package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportAssetsCsvQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ExportAssetsCsvQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}