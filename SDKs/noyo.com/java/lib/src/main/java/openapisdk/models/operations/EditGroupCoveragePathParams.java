package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditGroupCoveragePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_coverage_id")
    public String groupCoverageId;
    public EditGroupCoveragePathParams withGroupCoverageId(String groupCoverageId) {
        this.groupCoverageId = groupCoverageId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public EditGroupCoveragePathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}