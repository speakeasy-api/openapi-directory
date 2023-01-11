package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumbersNumeralEgyptianQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public Long number;
    public GetNumbersNumeralEgyptianQueryParams withNumber(Long number) {
        this.number = number;
        return this;
    }
}