package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProductQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=returnEntity")
    public Boolean returnEntity;
    public CreateProductQueryParams withReturnEntity(Boolean returnEntity) {
        this.returnEntity = returnEntity;
        return this;
    }
}