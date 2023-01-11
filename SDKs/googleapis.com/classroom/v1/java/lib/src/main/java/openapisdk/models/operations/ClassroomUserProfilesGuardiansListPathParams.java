package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomUserProfilesGuardiansListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studentId")
    public String studentId;
    public ClassroomUserProfilesGuardiansListPathParams withStudentId(String studentId) {
        this.studentId = studentId;
        return this;
    }
}