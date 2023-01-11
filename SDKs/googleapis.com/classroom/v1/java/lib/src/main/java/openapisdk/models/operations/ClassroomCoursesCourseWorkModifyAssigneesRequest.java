package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesCourseWorkModifyAssigneesRequest {
    public ClassroomCoursesCourseWorkModifyAssigneesPathParams pathParams;
    public ClassroomCoursesCourseWorkModifyAssigneesRequest withPathParams(ClassroomCoursesCourseWorkModifyAssigneesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesCourseWorkModifyAssigneesQueryParams queryParams;
    public ClassroomCoursesCourseWorkModifyAssigneesRequest withQueryParams(ClassroomCoursesCourseWorkModifyAssigneesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyCourseWorkAssigneesRequest request;
    public ClassroomCoursesCourseWorkModifyAssigneesRequest withRequest(openapisdk.models.shared.ModifyCourseWorkAssigneesRequest request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesCourseWorkModifyAssigneesSecurity security;
    public ClassroomCoursesCourseWorkModifyAssigneesRequest withSecurity(ClassroomCoursesCourseWorkModifyAssigneesSecurity security) {
        this.security = security;
        return this;
    }
}