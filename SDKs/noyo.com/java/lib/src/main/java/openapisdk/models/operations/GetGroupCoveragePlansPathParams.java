package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupCoveragePlansPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_coverage_id")
    public String groupCoverageId;
    public GetGroupCoveragePlansPathParams withGroupCoverageId(String groupCoverageId) {
        this.groupCoverageId = groupCoverageId;
        return this;
    }
}