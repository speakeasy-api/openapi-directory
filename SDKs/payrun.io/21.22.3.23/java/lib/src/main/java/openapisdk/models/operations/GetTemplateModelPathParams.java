package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTemplateModelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DtoDataType")
    public String dtoDataType;
    public GetTemplateModelPathParams withDtoDataType(String dtoDataType) {
        this.dtoDataType = dtoDataType;
        return this;
    }
}