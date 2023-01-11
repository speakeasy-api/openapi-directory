package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomUserProfilesGuardianInvitationsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studentId")
    public String studentId;
    public ClassroomUserProfilesGuardianInvitationsCreatePathParams withStudentId(String studentId) {
        this.studentId = studentId;
        return this;
    }
}