package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesAnnouncementsModifyAssigneesRequest {
    public ClassroomCoursesAnnouncementsModifyAssigneesPathParams pathParams;
    public ClassroomCoursesAnnouncementsModifyAssigneesRequest withPathParams(ClassroomCoursesAnnouncementsModifyAssigneesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesAnnouncementsModifyAssigneesQueryParams queryParams;
    public ClassroomCoursesAnnouncementsModifyAssigneesRequest withQueryParams(ClassroomCoursesAnnouncementsModifyAssigneesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyAnnouncementAssigneesRequest request;
    public ClassroomCoursesAnnouncementsModifyAssigneesRequest withRequest(openapisdk.models.shared.ModifyAnnouncementAssigneesRequest request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesAnnouncementsModifyAssigneesSecurity security;
    public ClassroomCoursesAnnouncementsModifyAssigneesRequest withSecurity(ClassroomCoursesAnnouncementsModifyAssigneesSecurity security) {
        this.security = security;
        return this;
    }
}