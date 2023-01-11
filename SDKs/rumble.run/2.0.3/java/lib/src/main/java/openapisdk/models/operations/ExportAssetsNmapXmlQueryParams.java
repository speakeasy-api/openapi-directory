package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportAssetsNmapXmlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ExportAssetsNmapXmlQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}