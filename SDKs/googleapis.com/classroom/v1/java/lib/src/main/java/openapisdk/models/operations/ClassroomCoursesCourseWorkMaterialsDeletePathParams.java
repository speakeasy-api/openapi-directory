package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesCourseWorkMaterialsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseId")
    public String courseId;
    public ClassroomCoursesCourseWorkMaterialsDeletePathParams withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ClassroomCoursesCourseWorkMaterialsDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}