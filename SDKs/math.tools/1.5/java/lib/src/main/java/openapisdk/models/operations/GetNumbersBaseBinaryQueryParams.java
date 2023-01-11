package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumbersBaseBinaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public Long from;
    public GetNumbersBaseBinaryQueryParams withFrom(Long from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public Long number;
    public GetNumbersBaseBinaryQueryParams withNumber(Long number) {
        this.number = number;
        return this;
    }
}