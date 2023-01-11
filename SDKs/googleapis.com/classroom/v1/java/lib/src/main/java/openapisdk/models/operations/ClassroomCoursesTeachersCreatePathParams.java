package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesTeachersCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseId")
    public String courseId;
    public ClassroomCoursesTeachersCreatePathParams withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
}