package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProjectRequest request;
    public ProjectsCreateRequest withRequest(openapisdk.models.shared.ProjectRequest request) {
        this.request = request;
        return this;
    }
}