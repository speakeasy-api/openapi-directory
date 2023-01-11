package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesStudentsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseId")
    public String courseId;
    public ClassroomCoursesStudentsCreatePathParams withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
}