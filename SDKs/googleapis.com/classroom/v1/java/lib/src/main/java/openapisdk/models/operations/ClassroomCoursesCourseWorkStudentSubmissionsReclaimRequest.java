package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest {
    public ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams pathParams;
    public ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest withPathParams(ClassroomCoursesCourseWorkStudentSubmissionsReclaimPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams queryParams;
    public ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest withQueryParams(ClassroomCoursesCourseWorkStudentSubmissionsReclaimQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity security;
    public ClassroomCoursesCourseWorkStudentSubmissionsReclaimRequest withSecurity(ClassroomCoursesCourseWorkStudentSubmissionsReclaimSecurity security) {
        this.security = security;
        return this;
    }
}