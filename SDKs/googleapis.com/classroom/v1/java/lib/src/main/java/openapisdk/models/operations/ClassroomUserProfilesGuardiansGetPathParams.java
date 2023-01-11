package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomUserProfilesGuardiansGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=guardianId")
    public String guardianId;
    public ClassroomUserProfilesGuardiansGetPathParams withGuardianId(String guardianId) {
        this.guardianId = guardianId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studentId")
    public String studentId;
    public ClassroomUserProfilesGuardiansGetPathParams withStudentId(String studentId) {
        this.studentId = studentId;
        return this;
    }
}