package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseId")
    public String courseId;
    public ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseWorkId")
    public String courseWorkId;
    public ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams withCourseWorkId(String courseWorkId) {
        this.courseWorkId = courseWorkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}