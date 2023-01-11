package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumbersPrimeIsFermatPrimeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public Long number;
    public GetNumbersPrimeIsFermatPrimeQueryParams withNumber(Long number) {
        this.number = number;
        return this;
    }
}