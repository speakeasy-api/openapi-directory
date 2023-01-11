package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportAssetsCiscoCsvQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ExportAssetsCiscoCsvQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}