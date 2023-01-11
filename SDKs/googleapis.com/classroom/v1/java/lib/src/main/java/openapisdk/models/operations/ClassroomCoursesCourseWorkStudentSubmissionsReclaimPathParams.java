package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseId")
    public String courseId;
    public ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseWorkId")
    public String courseWorkId;
    public ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams withCourseWorkId(String courseWorkId) {
        this.courseWorkId = courseWorkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams withId(String id) {
        this.id = id;
        return this;
    }
}