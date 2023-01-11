package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesAddAssigneesRequest {
    public IssuesAddAssigneesPathParams pathParams;
    public IssuesAddAssigneesRequest withPathParams(IssuesAddAssigneesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IssuesAddAssigneesRequestBody request;
    public IssuesAddAssigneesRequest withRequest(IssuesAddAssigneesRequestBody request) {
        this.request = request;
        return this;
    }
}