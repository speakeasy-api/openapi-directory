package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumbersPrimeIsMersennePrimeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public Long number;
    public GetNumbersPrimeIsMersennePrimeQueryParams withNumber(Long number) {
        this.number = number;
        return this;
    }
}