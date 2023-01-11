package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesAliasesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alias")
    public String alias;
    public ClassroomCoursesAliasesDeletePathParams withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=courseId")
    public String courseId;
    public ClassroomCoursesAliasesDeletePathParams withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
}