package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumbersPrimeIsPellPrimeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public Long number;
    public GetNumbersPrimeIsPellPrimeQueryParams withNumber(Long number) {
        this.number = number;
        return this;
    }
}