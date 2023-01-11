package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspaceIdMembersMemberIdActivitiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=member_id")
    public String memberId;
    public GetWorkspaceIdMembersMemberIdActivitiesPathParams withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace_id")
    public String workspaceId;
    public GetWorkspaceIdMembersMemberIdActivitiesPathParams withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}