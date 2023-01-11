package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumbersNumeralChineseQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public Long number;
    public GetNumbersNumeralChineseQueryParams withNumber(Long number) {
        this.number = number;
        return this;
    }
}