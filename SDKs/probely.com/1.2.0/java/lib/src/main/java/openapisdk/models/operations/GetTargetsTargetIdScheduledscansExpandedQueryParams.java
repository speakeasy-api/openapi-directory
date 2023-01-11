package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetsTargetIdScheduledscansExpandedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public Long length;
    public GetTargetsTargetIdScheduledscansExpandedQueryParams withLength(Long length) {
        this.length = length;
        return this;
    }
}