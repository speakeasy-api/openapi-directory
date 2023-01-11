package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNodeComplianceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=level")
    public Long level;
    public GetNodeComplianceQueryParams withLevel(Long level) {
        this.level = level;
        return this;
    }
}