package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsCreateColumnRequest {
    public ProjectsCreateColumnPathParams pathParams;
    public ProjectsCreateColumnRequest withPathParams(ProjectsCreateColumnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ProjectsCreateColumnRequestBody request;
    public ProjectsCreateColumnRequest withRequest(ProjectsCreateColumnRequestBody request) {
        this.request = request;
        return this;
    }
}