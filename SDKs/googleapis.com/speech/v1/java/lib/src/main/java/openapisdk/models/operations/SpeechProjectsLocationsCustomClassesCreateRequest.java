package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpeechProjectsLocationsCustomClassesCreateRequest {
    public SpeechProjectsLocationsCustomClassesCreatePathParams pathParams;
    public SpeechProjectsLocationsCustomClassesCreateRequest withPathParams(SpeechProjectsLocationsCustomClassesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SpeechProjectsLocationsCustomClassesCreateQueryParams queryParams;
    public SpeechProjectsLocationsCustomClassesCreateRequest withQueryParams(SpeechProjectsLocationsCustomClassesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCustomClassRequest request;
    public SpeechProjectsLocationsCustomClassesCreateRequest withRequest(openapisdk.models.shared.CreateCustomClassRequest request) {
        this.request = request;
        return this;
    }
    public SpeechProjectsLocationsCustomClassesCreateSecurity security;
    public SpeechProjectsLocationsCustomClassesCreateRequest withSecurity(SpeechProjectsLocationsCustomClassesCreateSecurity security) {
        this.security = security;
        return this;
    }
}