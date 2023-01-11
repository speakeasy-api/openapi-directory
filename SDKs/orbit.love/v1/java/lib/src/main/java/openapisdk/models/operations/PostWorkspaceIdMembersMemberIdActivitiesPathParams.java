package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWorkspaceIdMembersMemberIdActivitiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=member_id")
    public String memberId;
    public PostWorkspaceIdMembersMemberIdActivitiesPathParams withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace_id")
    public String workspaceId;
    public PostWorkspaceIdMembersMemberIdActivitiesPathParams withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}