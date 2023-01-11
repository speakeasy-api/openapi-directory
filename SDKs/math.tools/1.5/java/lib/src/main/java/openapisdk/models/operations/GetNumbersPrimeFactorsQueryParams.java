package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumbersPrimeFactorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public Long number;
    public GetNumbersPrimeFactorsQueryParams withNumber(Long number) {
        this.number = number;
        return this;
    }
}