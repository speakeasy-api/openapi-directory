package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCoursesRootContentIdPermissionsUserEmailRequest {
    public PostCoursesRootContentIdPermissionsUserEmailPathParams pathParams;
    public PostCoursesRootContentIdPermissionsUserEmailRequest withPathParams(PostCoursesRootContentIdPermissionsUserEmailPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser request;
    public PostCoursesRootContentIdPermissionsUserEmailRequest withRequest(PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser request) {
        this.request = request;
        return this;
    }
}