package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNodesComplianceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=level")
    public Long level;
    public GetNodesComplianceQueryParams withLevel(Long level) {
        this.level = level;
        return this;
    }
}