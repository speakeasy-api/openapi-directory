package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesCourseWorkStudentSubmissionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseId")
    public String courseId;
    public ClassroomCoursesCourseWorkStudentSubmissionsListPathParams withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseWorkId")
    public String courseWorkId;
    public ClassroomCoursesCourseWorkStudentSubmissionsListPathParams withCourseWorkId(String courseWorkId) {
        this.courseWorkId = courseWorkId;
        return this;
    }
}