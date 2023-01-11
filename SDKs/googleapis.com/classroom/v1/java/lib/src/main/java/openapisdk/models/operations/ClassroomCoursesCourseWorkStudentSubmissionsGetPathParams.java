package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseId")
    public String courseId;
    public ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseWorkId")
    public String courseWorkId;
    public ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams withCourseWorkId(String courseWorkId) {
        this.courseWorkId = courseWorkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}