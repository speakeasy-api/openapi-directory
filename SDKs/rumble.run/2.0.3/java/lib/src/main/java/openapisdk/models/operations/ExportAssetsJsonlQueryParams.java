package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportAssetsJsonlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ExportAssetsJsonlQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public ExportAssetsJsonlQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}