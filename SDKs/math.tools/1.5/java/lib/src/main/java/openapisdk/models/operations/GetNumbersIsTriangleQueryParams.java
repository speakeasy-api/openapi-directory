package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumbersIsTriangleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public Long number;
    public GetNumbersIsTriangleQueryParams withNumber(Long number) {
        this.number = number;
        return this;
    }
}