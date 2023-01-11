package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesCourseWorkMaterialsPatchRequest {
    public ClassroomCoursesCourseWorkMaterialsPatchPathParams pathParams;
    public ClassroomCoursesCourseWorkMaterialsPatchRequest withPathParams(ClassroomCoursesCourseWorkMaterialsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesCourseWorkMaterialsPatchQueryParams queryParams;
    public ClassroomCoursesCourseWorkMaterialsPatchRequest withQueryParams(ClassroomCoursesCourseWorkMaterialsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CourseWorkMaterial request;
    public ClassroomCoursesCourseWorkMaterialsPatchRequest withRequest(openapisdk.models.shared.CourseWorkMaterial request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesCourseWorkMaterialsPatchSecurity security;
    public ClassroomCoursesCourseWorkMaterialsPatchRequest withSecurity(ClassroomCoursesCourseWorkMaterialsPatchSecurity security) {
        this.security = security;
        return this;
    }
}