package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesTopicsPatchRequest {
    public ClassroomCoursesTopicsPatchPathParams pathParams;
    public ClassroomCoursesTopicsPatchRequest withPathParams(ClassroomCoursesTopicsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassroomCoursesTopicsPatchQueryParams queryParams;
    public ClassroomCoursesTopicsPatchRequest withQueryParams(ClassroomCoursesTopicsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Topic request;
    public ClassroomCoursesTopicsPatchRequest withRequest(openapisdk.models.shared.Topic request) {
        this.request = request;
        return this;
    }
    public ClassroomCoursesTopicsPatchSecurity security;
    public ClassroomCoursesTopicsPatchRequest withSecurity(ClassroomCoursesTopicsPatchSecurity security) {
        this.security = security;
        return this;
    }
}