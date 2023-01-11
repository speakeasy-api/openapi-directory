package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchemaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DtoDataType")
    public String dtoDataType;
    public GetSchemaPathParams withDtoDataType(String dtoDataType) {
        this.dtoDataType = dtoDataType;
        return this;
    }
}