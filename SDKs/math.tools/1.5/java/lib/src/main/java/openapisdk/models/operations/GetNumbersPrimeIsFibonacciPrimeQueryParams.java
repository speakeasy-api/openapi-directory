package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumbersPrimeIsFibonacciPrimeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public Long number;
    public GetNumbersPrimeIsFibonacciPrimeQueryParams withNumber(Long number) {
        this.number = number;
        return this;
    }
}