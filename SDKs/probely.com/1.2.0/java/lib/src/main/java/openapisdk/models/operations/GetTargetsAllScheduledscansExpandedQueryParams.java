package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetsAllScheduledscansExpandedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public Long length;
    public GetTargetsAllScheduledscansExpandedQueryParams withLength(Long length) {
        this.length = length;
        return this;
    }
}