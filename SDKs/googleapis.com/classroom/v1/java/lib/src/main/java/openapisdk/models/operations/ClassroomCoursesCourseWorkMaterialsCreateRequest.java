package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesCourseWorkMaterialsCreateRequest {
    public ClassroomCoursesCourseWorkMaterialsCreatePathParams pathParams;
    public ClassroomCoursesCourseWorkMaterialsCreateRequest withPathParams(ClassroomCoursesCourseWorkMaterialsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesCourseWorkMaterialsCreateQueryParams queryParams;
    public ClassroomCoursesCourseWorkMaterialsCreateRequest withQueryParams(ClassroomCoursesCourseWorkMaterialsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CourseWorkMaterial request;
    public ClassroomCoursesCourseWorkMaterialsCreateRequest withRequest(openapisdk.models.shared.CourseWorkMaterial request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesCourseWorkMaterialsCreateSecurity security;
    public ClassroomCoursesCourseWorkMaterialsCreateRequest withSecurity(ClassroomCoursesCourseWorkMaterialsCreateSecurity security) {
        this.security = security;
        return this;
    }
}