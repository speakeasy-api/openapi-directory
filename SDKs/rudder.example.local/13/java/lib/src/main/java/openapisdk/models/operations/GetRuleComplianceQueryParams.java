package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRuleComplianceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=level")
    public Long level;
    public GetRuleComplianceQueryParams withLevel(Long level) {
        this.level = level;
        return this;
    }
}