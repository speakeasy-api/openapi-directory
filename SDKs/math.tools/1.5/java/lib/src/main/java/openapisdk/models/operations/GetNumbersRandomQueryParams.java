package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumbersRandomQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public GetNumbersRandomQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min")
    public Long min;
    public GetNumbersRandomQueryParams withMin(Long min) {
        this.min = min;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=total")
    public Long total;
    public GetNumbersRandomQueryParams withTotal(Long total) {
        this.total = total;
        return this;
    }
}