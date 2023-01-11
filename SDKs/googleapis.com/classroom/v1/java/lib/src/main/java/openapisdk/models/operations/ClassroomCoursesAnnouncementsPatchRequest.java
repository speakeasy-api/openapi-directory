package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesAnnouncementsPatchRequest {
    public ClassroomCoursesAnnouncementsPatchPathParams pathParams;
    public ClassroomCoursesAnnouncementsPatchRequest withPathParams(ClassroomCoursesAnnouncementsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesAnnouncementsPatchQueryParams queryParams;
    public ClassroomCoursesAnnouncementsPatchRequest withQueryParams(ClassroomCoursesAnnouncementsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Announcement request;
    public ClassroomCoursesAnnouncementsPatchRequest withRequest(openapisdk.models.shared.Announcement request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesAnnouncementsPatchSecurity security;
    public ClassroomCoursesAnnouncementsPatchRequest withSecurity(ClassroomCoursesAnnouncementsPatchSecurity security) {
        this.security = security;
        return this;
    }
}