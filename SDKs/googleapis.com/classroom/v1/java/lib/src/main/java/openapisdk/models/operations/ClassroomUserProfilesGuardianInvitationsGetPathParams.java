package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomUserProfilesGuardianInvitationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invitationId")
    public String invitationId;
    public ClassroomUserProfilesGuardianInvitationsGetPathParams withInvitationId(String invitationId) {
        this.invitationId = invitationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studentId")
    public String studentId;
    public ClassroomUserProfilesGuardianInvitationsGetPathParams withStudentId(String studentId) {
        this.studentId = studentId;
        return this;
    }
}