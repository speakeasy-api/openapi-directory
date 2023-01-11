package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataExporterTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public DataExporterTemplateQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}