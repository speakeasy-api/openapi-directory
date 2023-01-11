package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumbersPrimeIsPartitionPrimeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public Long number;
    public GetNumbersPrimeIsPartitionPrimeQueryParams withNumber(Long number) {
        this.number = number;
        return this;
    }
}