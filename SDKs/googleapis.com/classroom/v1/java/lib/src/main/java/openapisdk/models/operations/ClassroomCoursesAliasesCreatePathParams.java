package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesAliasesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseId")
    public String courseId;
    public ClassroomCoursesAliasesCreatePathParams withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
}