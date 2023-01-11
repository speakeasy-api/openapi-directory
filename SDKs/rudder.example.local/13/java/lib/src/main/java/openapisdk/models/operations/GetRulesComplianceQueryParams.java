package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRulesComplianceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=level")
    public Long level;
    public GetRulesComplianceQueryParams withLevel(Long level) {
        this.level = level;
        return this;
    }
}