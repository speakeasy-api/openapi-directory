package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesAnnouncementsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseId")
    public String courseId;
    public ClassroomCoursesAnnouncementsPatchPathParams withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ClassroomCoursesAnnouncementsPatchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}