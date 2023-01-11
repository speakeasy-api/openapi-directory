package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEventTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListEventTypeQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SchemaId")
    public String schemaId;
    public ListEventTypeQueryParams withSchemaId(String schemaId) {
        this.schemaId = schemaId;
        return this;
    }
}