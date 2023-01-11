package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesAnnouncementsModifyAssigneesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseId")
    public String courseId;
    public ClassroomCoursesAnnouncementsModifyAssigneesPathParams withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ClassroomCoursesAnnouncementsModifyAssigneesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}