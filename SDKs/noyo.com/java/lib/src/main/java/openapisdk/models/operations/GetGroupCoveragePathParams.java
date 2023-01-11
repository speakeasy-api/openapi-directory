package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupCoveragePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_coverage_id")
    public String groupCoverageId;
    public GetGroupCoveragePathParams withGroupCoverageId(String groupCoverageId) {
        this.groupCoverageId = groupCoverageId;
        return this;
    }
}