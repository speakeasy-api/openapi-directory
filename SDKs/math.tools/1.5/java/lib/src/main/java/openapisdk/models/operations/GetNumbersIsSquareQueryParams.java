package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumbersIsSquareQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public Long number;
    public GetNumbersIsSquareQueryParams withNumber(Long number) {
        this.number = number;
        return this;
    }
}