package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiNameQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameType")
    public openapisdk.models.shared.NameTypeEnum nameType;
    public GetApiNameQueryParams withNameType(openapisdk.models.shared.NameTypeEnum nameType) {
        this.nameType = nameType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quantity")
    public Integer quantity;
    public GetApiNameQueryParams withQuantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }
}