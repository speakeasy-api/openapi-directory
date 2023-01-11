package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest {
    public IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams pathParams;
    public IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest withPathParams(IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams queryParams;
    public IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest withQueryParams(IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleSearchIdeahubV1betaIdeaActivity request;
    public IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest withRequest(openapisdk.models.shared.GoogleSearchIdeahubV1betaIdeaActivity request) {
        this.request = request;
        return this;
    }
}