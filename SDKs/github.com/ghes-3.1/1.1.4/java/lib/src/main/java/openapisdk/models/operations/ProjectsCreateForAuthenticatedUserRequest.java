package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsCreateForAuthenticatedUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ProjectsCreateForAuthenticatedUserRequestBody request;
    public ProjectsCreateForAuthenticatedUserRequest withRequest(ProjectsCreateForAuthenticatedUserRequestBody request) {
        this.request = request;
        return this;
    }
}