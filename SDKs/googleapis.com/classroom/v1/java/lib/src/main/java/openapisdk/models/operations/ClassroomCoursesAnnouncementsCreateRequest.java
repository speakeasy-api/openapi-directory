package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesAnnouncementsCreateRequest {
    public ClassroomCoursesAnnouncementsCreatePathParams pathParams;
    public ClassroomCoursesAnnouncementsCreateRequest withPathParams(ClassroomCoursesAnnouncementsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesAnnouncementsCreateQueryParams queryParams;
    public ClassroomCoursesAnnouncementsCreateRequest withQueryParams(ClassroomCoursesAnnouncementsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Announcement request;
    public ClassroomCoursesAnnouncementsCreateRequest withRequest(openapisdk.models.shared.Announcement request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesAnnouncementsCreateSecurity security;
    public ClassroomCoursesAnnouncementsCreateRequest withSecurity(ClassroomCoursesAnnouncementsCreateSecurity security) {
        this.security = security;
        return this;
    }
}