package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomUserProfilesGuardiansDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=guardianId")
    public String guardianId;
    public ClassroomUserProfilesGuardiansDeletePathParams withGuardianId(String guardianId) {
        this.guardianId = guardianId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studentId")
    public String studentId;
    public ClassroomUserProfilesGuardiansDeletePathParams withStudentId(String studentId) {
        this.studentId = studentId;
        return this;
    }
}