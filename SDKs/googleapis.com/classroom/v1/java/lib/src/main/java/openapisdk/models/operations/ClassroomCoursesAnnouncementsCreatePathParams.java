package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesAnnouncementsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseId")
    public String courseId;
    public ClassroomCoursesAnnouncementsCreatePathParams withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
}