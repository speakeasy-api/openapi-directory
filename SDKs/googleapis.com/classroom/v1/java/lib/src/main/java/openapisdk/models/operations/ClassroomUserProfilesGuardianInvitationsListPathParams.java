package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomUserProfilesGuardianInvitationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studentId")
    public String studentId;
    public ClassroomUserProfilesGuardianInvitationsListPathParams withStudentId(String studentId) {
        this.studentId = studentId;
        return this;
    }
}