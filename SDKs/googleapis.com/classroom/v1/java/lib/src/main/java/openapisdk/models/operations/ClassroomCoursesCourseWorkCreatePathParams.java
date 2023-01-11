package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesCourseWorkCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseId")
    public String courseId;
    public ClassroomCoursesCourseWorkCreatePathParams withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
}