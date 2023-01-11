package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdeahubPlatformsPropertiesTopicStatesPatchRequest {
    public IdeahubPlatformsPropertiesTopicStatesPatchPathParams pathParams;
    public IdeahubPlatformsPropertiesTopicStatesPatchRequest withPathParams(IdeahubPlatformsPropertiesTopicStatesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IdeahubPlatformsPropertiesTopicStatesPatchQueryParams queryParams;
    public IdeahubPlatformsPropertiesTopicStatesPatchRequest withQueryParams(IdeahubPlatformsPropertiesTopicStatesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleSearchIdeahubV1alphaTopicState request;
    public IdeahubPlatformsPropertiesTopicStatesPatchRequest withRequest(openapisdk.models.shared.GoogleSearchIdeahubV1alphaTopicState request) {
        this.request = request;
        return this;
    }
}