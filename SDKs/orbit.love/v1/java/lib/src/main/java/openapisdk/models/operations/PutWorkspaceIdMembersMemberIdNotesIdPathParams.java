package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWorkspaceIdMembersMemberIdNotesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutWorkspaceIdMembersMemberIdNotesIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=member_id")
    public String memberId;
    public PutWorkspaceIdMembersMemberIdNotesIdPathParams withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace_id")
    public String workspaceId;
    public PutWorkspaceIdMembersMemberIdNotesIdPathParams withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}