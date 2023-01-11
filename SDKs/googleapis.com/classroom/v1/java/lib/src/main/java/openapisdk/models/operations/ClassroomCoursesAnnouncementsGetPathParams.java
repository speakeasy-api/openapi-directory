package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesAnnouncementsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseId")
    public String courseId;
    public ClassroomCoursesAnnouncementsGetPathParams withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ClassroomCoursesAnnouncementsGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}